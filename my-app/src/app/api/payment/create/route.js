
import { NextResponse } from "next/server";
import { Cashfree } from "cashfree-pg";

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
        const isProduction = process.env.NODE_ENV === 'production';
        const cashfree = new Cashfree(
            isProduction ? Cashfree.PRODUCTION : Cashfree.SANDBOX,
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
                customer_phone: customerPhone,
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

        return NextResponse.json({
            payment_session_id: paymentSessionId,
            order_id: orderId,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        console.error("Error details:", error.response?.data || error.message);
        return NextResponse.json(
            { error: error.response?.data?.message || error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
