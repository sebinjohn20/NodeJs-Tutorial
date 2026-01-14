require("dotenv").config();
const express = require("express");
const connectToDB = require("./Database/db");
const authRoutes = require("./Router/auth-routes");
const app = express();
connectToDB();
const PORT = 4000;
app.use(express.json());
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is now listening to PORT${PORT}`);
});
