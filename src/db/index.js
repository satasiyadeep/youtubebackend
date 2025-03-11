import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("DB connected")
        // console.log(connectionInstance)
        console.log(`mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("mongodb connection error", error);
        process.exit(1)
    }
}

export default connectDB;