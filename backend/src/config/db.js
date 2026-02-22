import mongoose from "mongoose"

export const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI
    try{
        await mongoose.connect(MONGO_URI)
        console.log("MONGODB CONNECTED SUCCESSFULLY!!");
    }catch(error){
        console.error('Error connecting mongoDB', error);
        process.exit(1);
    }
}