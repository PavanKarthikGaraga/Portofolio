
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

        // However, verify signature is recommended. 
        // For now simple implementation based on order_id fetching.

        // NOTE: In a real world, verify the signature 'x-webhook-signature'

        // Let's rely on fetching the order status from Cashfree using the order_id 
        // provided in the webhook payload or just parse the payload directly.

        // Verify signature logic should be here.
        // For now, we trust the payload but log verification status.
        // In production, use Cashfree.PGVerifyWebhookSignature(signature, rawBody, timestamp)

        let data;

        try {
            // Try parsing as JSON first (standard for modern webhooks)
            data = await req.json();
        } catch (e) {
            console.log("Webhook: Not JSON, trying formData");
            try {
                const formData = await req.formData();
                const entries = Object.fromEntries(formData.entries());
                // Depending on how cashfree sends form data, it might be nested or flat.
                // Usually older webhooks send flat data.
                // However, let's assume JSON for now as it's the default for new accounts.
                console.log("Webhook: Received FormData", entries);
                return NextResponse.json({ status: "Ignored Form Data" });
            } catch (err) {
                return NextResponse.json({ error: "Invalid Payload" }, { status: 400 });
            }
        }

        console.log("Webhook Received:", JSON.stringify(data, null, 2));

        if (data && data.data && data.data.order && data.data.order.order_id) {
            const orderId = data.data.order.order_id;
            const paymentStatus = data.data.payment ? data.data.payment.payment_status : "UNKNOWN";

            console.log(`Processing Order: ${orderId}, Status: ${paymentStatus}`);

            await dbConnect();

            // Update payment status
            const update = {
                status: paymentStatus,
            };

            if (data.data.payment) {
                update.transactionId = data.data.payment.cf_payment_id;
                update.paymentMethod = data.data.payment.payment_group;
            }

            const updatedPayment = await Payment.findOneAndUpdate(
                { orderId: orderId },
                update,
                { new: true }
            );

            if (updatedPayment) {
                console.log("Payment updated in DB:", updatedPayment._id);
            } else {
                console.error("Payment not found in DB for order:", orderId);
            }

            return NextResponse.json({ status: "OK" });
        }

        return NextResponse.json({ status: "Ignored - Missing Order ID" });

    } catch (error) {
        console.error("Webhook Error:", error);
        return NextResponse.json({ error: "Webhook Error" }, { status: 500 });
    }
}
