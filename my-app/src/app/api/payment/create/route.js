
import { NextResponse } from "next/server";
import { Cashfree } from "cashfree-pg";
import dbConnect from "@/lib/db";
import getPaymentModel from "@/models/Payment";

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment || Cashfree.CFEnvironment || 1;

export async function POST(req) {
    try {
        const body = await req.json();
        const { amount, customerName, customerEmail, customerPhone } = body;

        await dbConnect();
        const Payment = await getPaymentModel();

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
                return_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/payment?order_id={order_id}`,
            },
            order_note: "Payment for Portfolio Services",
        };

        const response = await Cashfree.PGCreateOrder("2023-08-01", request);
        const paymentSessionId = response.data.payment_session_id;

        // Save initial payment record
        await Payment.create({
            orderId,
            paymentSessionId,
            amount,
            currency: "INR",
            customerId,
            customerName,
            customerEmail,
            customerPhone,
            status: "PENDING",
        });

        return NextResponse.json({
            payment_session_id: paymentSessionId,
            order_id: orderId,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
