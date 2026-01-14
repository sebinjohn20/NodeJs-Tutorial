require("dotenv").config();
const express = require("express");
const connectToDB = require("./Database/db");
const bookRoutes = require("./Routes/book-routes");
const app = express();
app.use(express.json());
app.use("/api/books", bookRoutes);
const PORT = 4000;
connectToDB()
  .then(() => {
    console.log("MongoDB connected ");
    app.listen(PORT, () => {
      console.log(`Server is running at the port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });

///
