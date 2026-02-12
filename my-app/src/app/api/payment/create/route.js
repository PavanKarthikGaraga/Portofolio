
import { NextResponse } from "next/server";
import { Cashfree, CFEnvironment } from "cashfree-pg";
import dbConnect from "@/lib/db";
import getPaymentModel from "@/models/Payment";

export async function POST(req) {
    try {
        // Check environment variables
        if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
            console.error("Missing Cashfree credentials");
            return NextResponse.json(
                { error: "Server configuration error: Missing payment credentials" },
                { status: 500 }
            );
        }

        // Configure Cashfree - SDK v5+ requires instantiation
        // Use CASHFREE_ENV to explicitly control environment (set to 'production' in production)
        const cashfreeEnv = process.env.CASHFREE_ENV || 'sandbox';
        const isProduction = cashfreeEnv === 'production';

        console.log(`Cashfree Environment: ${cashfreeEnv}, isProduction: ${isProduction}`);
        console.log(`Client ID present: ${!!process.env.CLIENT_ID}, Secret present: ${!!process.env.CLIENT_SECRET}`);
        const cashfree = new Cashfree(
            isProduction ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX,
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET
        );

        const body = await req.json();
        const { amount, customerName, customerEmail, customerPhone } = body;

        console.log("Creating payment for:", { amount, customerName, customerEmail });

        // Generate a unique order ID
        const orderId = "ORDER_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
        const customerId = "CUST_" + Date.now();

        const request = {
            order_amount: amount,
            order_currency: "INR",
            order_id: orderId,
            customer_details: {
                customer_id: customerId,
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone || "9999999999",
            },
            order_meta: {
                return_url: `${process.env.NEXT_PUBLIC_URL || 'https://pavankarthik.in'}/payment?order_id={order_id}`,
            },
            order_note: "Payment for Portfolio Services",
        };

        console.log("Cashfree request:", JSON.stringify(request, null, 2));

        // SDK v5+ - PGCreateOrder is called on the instance without version parameter
        const response = await cashfree.PGCreateOrder(request);

        console.log("Cashfree response:", JSON.stringify(response.data, null, 2));

        const paymentSessionId = response.data.payment_session_id;

        // Save payment to database with PENDING status
        try {
            await dbConnect();
            const Payment = await getPaymentModel();

            const payment = new Payment({
                orderId: orderId,
                paymentSessionId: paymentSessionId,
                amount: amount,
                currency: "INR",
                customerId: customerId,
                customerName: customerName,
                customerEmail: customerEmail,
                customerPhone: customerPhone || "9999999999",
                status: "PENDING",
            });

            await payment.save();
            console.log("Payment saved to database:", orderId);
        } catch (dbError) {
            console.error("Error saving payment to database:", dbError);
            // Don't fail the request if DB save fails - payment can still proceed
        }

        return NextResponse.json({
            payment_session_id: paymentSessionId,
            order_id: orderId,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        console.error("Error response data:", JSON.stringify(error.response?.data, null, 2));
        console.error("Error status:", error.response?.status);

        const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
        const errorType = error.response?.data?.type || "unknown_error";

        return NextResponse.json(
            {
                error: errorMessage,
                type: errorType,
                hint: errorType === "authentication_error"
                    ? "Check your Cashfree credentials and ensure production mode is enabled in your Cashfree dashboard"
                    : undefined
            },
            { status: error.response?.status || 500 }
        );
    }
}
