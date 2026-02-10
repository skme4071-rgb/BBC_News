import mongoose from "mongoose";

const connectionMongoDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_DB_CONNECTION_URL
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

connectionMongoDB();
