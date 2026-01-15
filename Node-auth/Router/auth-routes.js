const express = require("express");
const authMiddleware = require("../Middleware/auth-middleware");
const {
  registerUser,
  loginUser,
  changePassword,
  changeEmail,
} = require("../Controllers/auth-controllers");
const router = express();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/changepassword", authMiddleware, changePassword);
router.put("/change-email", authMiddleware, changeEmail);

module.exports = router;

//
