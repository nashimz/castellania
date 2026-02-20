import dotenv from "dotenv";

dotenv.config();
import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async (): Promise<void> => {
  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI no definido en .env");

    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    process.exit(1);
  }
};
