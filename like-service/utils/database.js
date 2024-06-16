import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_PRODUCTION_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}

export async function disconnectDb() {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected");
  } catch (error) {
    console.log("Error disconnecting from database", error);
  }
}
