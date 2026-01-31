
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import getPaymentModel from "@/models/Payment";

async function handleWebhook(req) {
    try {
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
                console.error("Webhook Payload Error:", err);
                return NextResponse.json({ status: "Invalid Payload" });
            }
        }

        console.log("Webhook Received:", JSON.stringify(data, null, 2));

        if (data && data.data && data.data.order && data.data.order.order_id) {
            const orderId = data.data.order.order_id;
            const paymentData = data.data.payment;
            const paymentStatus = paymentData ? paymentData.payment_status : "UNKNOWN";

            console.log(`Processing Order: ${orderId}, Status: ${paymentStatus}`);

            // Map Cashfree status to our status
            let dbStatus = "UNKNOWN";
            if (paymentStatus === "SUCCESS") {
                dbStatus = "SUCCESS";
            } else if (paymentStatus === "FAILED" || paymentStatus === "CANCELLED") {
                dbStatus = "FAILED";
            } else if (paymentStatus === "USER_DROPPED") {
                dbStatus = "USER_DROPPED";
            } else if (paymentStatus === "PENDING") {
                dbStatus = "PENDING";
            }

            // Update payment in database
            try {
                await dbConnect();
                const Payment = await getPaymentModel();

                const updatedPayment = await Payment.findOneAndUpdate(
                    { orderId: orderId },
                    {
                        status: dbStatus,
                        transactionId: paymentData?.cf_payment_id || null,
                        paymentMethod: paymentData?.payment_method?.type || null,
                    },
                    { new: true }
                );

                if (updatedPayment) {
                    console.log(`Payment ${orderId} updated to status: ${dbStatus}`);
                } else {
                    console.log(`Payment ${orderId} not found in database`);
                }
            } catch (dbError) {
                console.error("Error updating payment in database:", dbError);
            }

            return NextResponse.json({ status: "OK" });
        }

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
