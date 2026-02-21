import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI

export const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI)
        console.log("MONGODB CONNECTED SUCCESSFULLY!!");
    }catch(error){
        console.error('Error connecting mongoDB', error);
        process.exit(1);
    }
}