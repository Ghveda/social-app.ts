import { connect } from "mongoose";

export const connectDB = async (url: string): Promise<void> => {
  try {
    const conn = await connect(url);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting: ${error}`);
  }
};
