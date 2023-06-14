import mongoose from "mongoose";

// create connection
const mongoDBConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO);
    console.log(`MongoDB Connected successfully`);
  } catch (error) {
    console.log(error.message);
  }
};

// export mongo
export default mongoDBConnect;
