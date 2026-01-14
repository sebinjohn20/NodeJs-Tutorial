const express = require("express");
const router = express.Router();
const {
  getAllBook,
  addNewBook,
  getSingleBookById,
  updateBook,
  deleteBook,
} = require("../Controllers/book-controllers");
router.get("/get", getAllBook);
router.get("/get/:id", getSingleBookById);
router.post("/add", addNewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);
module.exports = router;

//
