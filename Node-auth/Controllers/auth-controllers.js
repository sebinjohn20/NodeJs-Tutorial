const User = require("../Model/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { models } = require("mongoose");
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const checkExitsingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkExitsingUser) {
      return res.status(400).json({
        success: false,
        message:
          "User is already exits with same username or email. Please try again username and email",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    await newlyCreatedUser.save();
    if (newlyCreatedUser) {
      res.status(201).json({
        success: true,
        message: "User register successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to register! Please try again",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some error occured! Please try again",
    });
  }
};

module.exports = registerUser;
//
