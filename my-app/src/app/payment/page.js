'use client';

import { useState } from 'react';
import { load } from '@cashfreepayments/cashfree-js';

export default function PaymentPage() {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            const cashfree = await load({
                mode: "sandbox", // pending: Change to production when live
            });

            const res = await fetch('/api/payment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: 1, // Example amount
                    customerName: "Test User",
                    customerEmail: "test@example.com",
                    customerPhone: "9999999999"
                }),
            });

            const data = await res.json();

            if (data.payment_session_id) {
                const checkoutOptions = {
                    paymentSessionId: data.payment_session_id,
                    redirectTarget: "_self", // Redirect in same tab
                };
                cashfree.checkout(checkoutOptions);
            } else {
                console.error("Failed to create payment session");
            }

        } catch (error) {
            console.error("Payment Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
            <div className="p-8 border border-[var(--foreground-secondary)]/20 rounded-lg shadow-lg bg-[var(--background-secondary)] text-center max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6">Complete Your Payment</h1>
                <p className="mb-8 text-[var(--foreground-secondary)]">
                    Secure payment gateway integrated with Cashfree.
                </p>
                <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Processing...' : 'Pay Now ₹1.00'}
                </button>
            </div>
        </div>
    );
}
