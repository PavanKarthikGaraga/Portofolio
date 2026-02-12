import { NextResponse } from "next/server";
import { Cashfree, CFEnvironment } from "cashfree-pg";
import dbConnect from "@/lib/db";
import getPaymentModel from "@/models/Payment";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const orderId = searchParams.get('order_id');

        if (!orderId) {
            return NextResponse.json(
                { error: "Order ID is required" },
                { status: 400 }
            );
        }

        // Configure Cashfree - use CASHFREE_ENV for environment detection
        const cashfreeEnv = process.env.CASHFREE_ENV || 'sandbox';
        const isProduction = cashfreeEnv === 'production';
        const cashfree = new Cashfree(
            isProduction ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX,
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET
        );

        // Fetch order status from Cashfree
        const response = await cashfree.PGFetchOrder(orderId);
        const orderData = response.data;

        console.log("Order verification response:", JSON.stringify(orderData, null, 2));

        // Map Cashfree status to our status
        let paymentStatus = "PENDING";
        if (orderData.order_status === "PAID") {
            paymentStatus = "SUCCESS";
        } else if (orderData.order_status === "EXPIRED" || orderData.order_status === "TERMINATED") {
            paymentStatus = "FAILED";
        }

        // Update payment in database
        try {
            await dbConnect();
            const Payment = await getPaymentModel();

            await Payment.findOneAndUpdate(
                { orderId: orderId },
                {
                    status: paymentStatus,
                },
                { new: true }
            );

            console.log(`Payment ${orderId} updated to status: ${paymentStatus}`);
        } catch (dbError) {
            console.error("Error updating payment in database:", dbError);
        }

        // Get payment details from DB for response
        let paymentDetails = null;
        try {
            await dbConnect();
            const Payment = await getPaymentModel();
            paymentDetails = await Payment.findOne({ orderId: orderId });
        } catch (dbError) {
            console.error("Error fetching payment from database:", dbError);
        }

        return NextResponse.json({
            status: paymentStatus,
            orderId: orderId,
            amount: paymentDetails?.amount || orderData.order_amount,
            message: paymentStatus === "SUCCESS" ? "Payment completed successfully" :
                paymentStatus === "FAILED" ? "Payment failed or expired" :
                    "Payment is being processed"
        });

    } catch (error) {
        console.error("Error verifying payment:", error);
        return NextResponse.json(
            {
                status: "ERROR",
                error: error.message || "Failed to verify payment"
            },
            { status: 500 }
        );
    }
}
