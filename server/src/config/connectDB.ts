import mongoose from "mongoose"
const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log('Database is connected');
        
    } catch (error) {
        console.error(error);
    }
}
export default connectDB