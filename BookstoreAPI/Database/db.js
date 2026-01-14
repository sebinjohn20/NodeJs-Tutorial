const mongoose = require("mongoose");
const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sebinjohn20_db:sebinjohn20_db2000@cluster0.ithnyoh.mongodb.net/"
    );
    console.log("MongoDb is connected successfully");
  } catch (error) {
    console.error("MongoDb connection failed", error);
    process.exit(1);
  }
};
module.exports = connectToDb;
