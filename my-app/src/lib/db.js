
let mongoose;

const MONGODB_URI = process.env.DB_URL;

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (!MONGODB_URI) {
        throw new Error(
            "Please define the DB_URL environment variable inside .env.local"
        );
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        // Dynamic import to avoid build-time resolution issues
        mongoose = (await import("mongoose")).default;

        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
