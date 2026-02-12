import mongoose from 'mongoose';
import {env} from "./env.js";

export const connectDB = async () => {
    
    try {
       await mongoose.connect(env.MONGODB_URL);
       console.log("MONGODB connected successfully -->", mongoose.connection) 
    } catch (error) {
        console.error("MONGODB connect failed --->", error.message);
        console.error("stack trace:", error.Stack);
        process.exit(1)
    }
};
