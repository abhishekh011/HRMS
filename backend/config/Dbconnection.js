import mongoose from 'mongoose';
const connectDB = async ()=> {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected:`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error:`,error);
      }
    }
  };
  
  export default connectDB;