
let mongoose;

async function getModel() {
    if (!mongoose) {
        mongoose = (await import("mongoose")).default;
    }

    // Check if model already exists to prevent recompilation error
    if (mongoose.models.Payment) {
        return mongoose.models.Payment;
    }

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
                enum: ["PENDING", "SUCCESS", "FAILED", "USER_DROPPED", "UNKNOWN"],
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

    return mongoose.model("Payment", PaymentSchema);
}

export default getModel;
