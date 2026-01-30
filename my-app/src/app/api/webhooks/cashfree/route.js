
import { NextResponse } from "next/server";
import { Cashfree } from "cashfree-pg";
import dbConnect from "@/lib/db";
import Payment from "@/models/Payment";

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment || Cashfree.CFEnvironment || 1; // Fallback to 1 (SANDBOX)

export async function POST(req) {
    try {
        const formData = await req.formData();
        // Cashfree sends webhook data as form-data
        // Depending on webhook config, it might be JSON too. 
        // Usually standard webhooks are POST with body.

        let data;
        try {
            data = await req.json();
        } catch (e) {
            try {
                const formData = await req.formData();
                const entries = Object.fromEntries(formData);
                console.log("Webhook: Received FormData", entries);
                return NextResponse.json({ status: "Ignored Form Data" });
            } catch (err) {
                // Even if payload is invalid, return 200 to keep webhook active
                console.error("Webhook Payload Error:", err);
                return NextResponse.json({ status: "Invalid Payload" });
            }
        }

        console.log("Webhook Received:", JSON.stringify(data, null, 2));

        if (data && data.data && data.data.order && data.data.order.order_id) {
            const orderId = data.data.order.order_id;
            const paymentStatus = data.data.payment ? data.data.payment.payment_status : "UNKNOWN";

            console.log(`Processing Order: ${orderId}, Status: ${paymentStatus}`);

            try {
                await dbConnect();

                const update = { status: paymentStatus };
                if (data.data.payment) {
                    update.transactionId = data.data.payment.cf_payment_id;
                    update.paymentMethod = data.data.payment.payment_group;
                }

                await Payment.findOneAndUpdate(
                    { orderId: orderId },
                    update,
                    { new: true }
                );
            } catch (dbError) {
                console.error("DB Update Error:", dbError);
                // Return 200 even on DB error to acknowledge receipt
                return NextResponse.json({ status: "DB Error logged" });
            }

            return NextResponse.json({ status: "OK" });
        }

        // Return 200 for test pings or ignored events
        return NextResponse.json({ status: "Ignored" });

    } catch (error) {
        console.error("Webhook General Error:", error);
        return NextResponse.json({ status: "Error logged" });
    }
}

export async function POST(req) {
    return handleWebhook(req);
}

export async function GET(req) {
    return NextResponse.json({ status: "Webhook Endpoint Active" });
}
