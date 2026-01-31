'use client';

import { useState, useEffect, Suspense } from 'react';
import { load } from '@cashfreepayments/cashfree-js';
import { useSearchParams } from 'next/navigation';

function PaymentPageContent() {
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        amount: '',
    });

    // Check for payment status on return from Cashfree
    useEffect(() => {
        const orderId = searchParams.get('order_id');
        if (orderId) {
            verifyPayment(orderId);
        }
    }, [searchParams]);

    const verifyPayment = async (orderId) => {
        try {
            const res = await fetch(`/api/payment/verify?order_id=${orderId}`);
            const data = await res.json();
            setPaymentStatus(data);
        } catch (error) {
            console.error("Error verifying payment:", error);
            setPaymentStatus({ status: 'ERROR', message: 'Failed to verify payment' });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.customerName.trim()) return 'Please enter your name';
        if (!formData.customerEmail.trim() || !formData.customerEmail.includes('@')) return 'Please enter a valid email';
        if (!formData.customerPhone.trim() || formData.customerPhone.length < 10) return 'Please enter a valid phone number';
        if (!formData.amount || parseFloat(formData.amount) < 1) return 'Minimum amount is ₹1';
        return null;
    };

    const handlePayment = async (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            alert(error);
            return;
        }

        setLoading(true);
        try {
            const cashfree = await load({
                mode: process.env.NODE_ENV === 'production' ? "production" : "sandbox",
            });

            const res = await fetch('/api/payment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: parseFloat(formData.amount),
                    customerName: formData.customerName,
                    customerEmail: formData.customerEmail,
                    customerPhone: formData.customerPhone,
                }),
            });

            const data = await res.json();

            if (data.payment_session_id) {
                const checkoutOptions = {
                    paymentSessionId: data.payment_session_id,
                    redirectTarget: "_self",
                };
                cashfree.checkout(checkoutOptions);
            } else {
                alert(data.error || "Failed to create payment session");
            }

        } catch (error) {
            console.error("Payment Error:", error);
            alert("Payment failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Modal component for payment result
    const PaymentModal = () => {
        if (!paymentStatus) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => {
                        setPaymentStatus(null);
                        window.history.replaceState({}, '', '/payment');
                    }}
                />

                {/* Modal */}
                <div className="relative z-10 p-8 border border-[var(--foreground-secondary)]/20 rounded-2xl shadow-2xl bg-[var(--background-secondary)] text-center max-w-md w-full mx-4 animate-in fade-in zoom-in duration-300">
                    {/* Close button */}
                    <button
                        onClick={() => {
                            setPaymentStatus(null);
                            window.history.replaceState({}, '', '/payment');
                        }}
                        className="absolute top-4 right-4 text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors text-2xl"
                    >
                        ×
                    </button>

                    {paymentStatus.status === 'SUCCESS' ? (
                        <>
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                <span className="text-5xl">✓</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-2 text-green-500">Payment Successful!</h2>
                            <p className="text-[var(--foreground-secondary)] mb-1 text-sm">
                                Order ID: {paymentStatus.orderId}
                            </p>
                            <p className="text-3xl font-bold mb-6">
                                ₹{paymentStatus.amount}
                            </p>
                            <p className="text-[var(--foreground-secondary)] text-sm mb-6">
                                Thank you for your payment. A confirmation has been sent to your email.
                            </p>
                        </>
                    ) : paymentStatus.status === 'PENDING' ? (
                        <>
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                <span className="text-5xl animate-pulse">⏳</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-2 text-yellow-500">Payment Pending</h2>
                            <p className="text-[var(--foreground-secondary)] mb-6">
                                Your payment is being processed. Please wait a moment...
                            </p>
                            <button
                                onClick={() => verifyPayment(paymentStatus.orderId)}
                                className="text-blue-500 hover:text-blue-400 underline text-sm"
                            >
                                Check Status Again
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                                <span className="text-5xl">✕</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-2 text-red-500">Payment Failed</h2>
                            <p className="text-[var(--foreground-secondary)] mb-6">
                                {paymentStatus.message || 'Something went wrong. Please try again.'}
                            </p>
                        </>
                    )}

                    <button
                        onClick={() => {
                            setPaymentStatus(null);
                            window.history.replaceState({}, '', '/payment');
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                        {paymentStatus.status === 'SUCCESS' ? 'Done' : 'Try Again'}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            {/* Payment Result Modal */}
            <PaymentModal />

            <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] p-4">
                <div className="p-8 border border-[var(--foreground-secondary)]/20 rounded-lg shadow-lg bg-[var(--background-secondary)] max-w-md w-full">
                    <h1 className="text-2xl font-bold mb-2 text-center">Complete Your Payment</h1>
                    <p className="mb-6 text-[var(--foreground-secondary)] text-center text-sm">
                        Secure payment powered by Cashfree
                    </p>

                    <form onSubmit={handlePayment} className="space-y-4">
                        <div>
                            <label htmlFor="customerName" className="block text-sm font-medium mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="customerName"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 rounded-lg border border-[var(--foreground-secondary)]/20 bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="customerEmail" className="block text-sm font-medium mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="customerEmail"
                                name="customerEmail"
                                value={formData.customerEmail}
                                onChange={handleInputChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-[var(--foreground-secondary)]/20 bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="customerPhone" className="block text-sm font-medium mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="customerPhone"
                                name="customerPhone"
                                value={formData.customerPhone}
                                onChange={handleInputChange}
                                placeholder="10-digit mobile number"
                                className="w-full px-4 py-3 rounded-lg border border-[var(--foreground-secondary)]/20 bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="amount" className="block text-sm font-medium mb-1">
                                Amount (₹)
                            </label>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                                placeholder="Enter amount"
                                min="1"
                                step="0.01"
                                className="w-full px-4 py-3 rounded-lg border border-[var(--foreground-secondary)]/20 bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                        >
                            {loading ? 'Processing...' : `Pay ₹${formData.amount || '0.00'}`}
                        </button>
                    </form>

                    <p className="mt-6 text-xs text-center text-[var(--foreground-secondary)]">
                        🔒 Your payment is secured with 256-bit encryption
                    </p>
                </div>
            </div>
        </>
    );
}

// Wrapper with Suspense boundary - required by Next.js for useSearchParams
export default function PaymentPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-[var(--foreground-secondary)]">Loading payment page...</p>
                </div>
            </div>
        }>
            <PaymentPageContent />
        </Suspense>
    );
}
