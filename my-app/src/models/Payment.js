import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: true,
        },
        paymentSessionId: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            required: true,
            default: "INR",
        },
        customerId: {
            type: String,
            required: true,
        },
        customerName: {
            type: String,
            required: true,
        },
        customerEmail: {
            type: String,
            required: true,
        },
        customerPhone: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ["PENDING", "SUCCESS", "FAILED", "USER_DROPPED"],
            default: "PENDING",
        },
        transactionId: {
            type: String,
        },
        paymentMethod: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
