import mongoose from "mongoose";
import { MONGO_URI } from "./config/keys.js";

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Successfully connected");
  } catch (error) {
    console.error(error);
    throw new Error("Connection failed");
  }
};

export default dbConnection;
