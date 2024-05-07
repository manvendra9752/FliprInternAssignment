const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected".bgBlue);
  } catch (error) {
    console.error("MongoDB Connection Failed: ", error.bgred);
    process.exit(1);
  }
};

module.exports = connectDB;
