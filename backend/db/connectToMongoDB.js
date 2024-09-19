import mongoose from "mongoose";

const connectToMongoDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected db successfully");
  } catch (error) {
    console.log("error in connecting db func", error.message);
  }
};

export default connectToMongoDB;