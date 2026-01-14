const mongoose = require("mongoose");
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log("MongoDb connection failed");
  }
};
module.exports = connectToDB;
