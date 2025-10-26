import mongoose from "mongoose";

// In development, Next.js hot-reloads modules, causing multiple connection attempts.
// This cached object prevents exponential connection growth.
const cached: {
	connection?: typeof mongoose;
	promise?: Promise<typeof mongoose>;
} = {};

/**
 * Establishes a cached MongoDB connection using Mongoose.
 * Reuses existing connection in development; creates new one in production.
 */
export async function connectDB(): Promise<typeof mongoose> {
	if (cached.connection) {
		return cached.connection;
	}

	if (!cached.promise) {
		const uri = process.env.MONGODB_URI;

		if (!uri) {
			throw new Error("Please define MONGODB_URI in your .env file");
		}

		cached.promise = mongoose.connect(uri, {
			bufferCommands: false, // Disabled command buffering to avoid connection issues
		});
	}

	try {
		cached.connection = await cached.promise;
		console.log("MongoDB connected successfully");
		return cached.connection;
	} catch (error) {
		cached.promise = undefined;
		console.error("MongoDB connection error:", error);
		throw error;
	}
}
