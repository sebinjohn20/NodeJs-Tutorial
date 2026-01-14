const newBook = require("../Models/book");
const getAllBook = async (req, res) => {
  try {
    const books = await newBook.find();
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getSingleBookById = async (req, res) => {
  try {
    const book = await newBook.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const addNewBook = async (req, res) => {
  try {
    const newlyCreatedBook = await newBook.create(req.body);
    res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: newlyCreatedBook,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBookById = req.params.id;
    const updateFormData = req.body;
    const updatedBook = await newBook.findByIdAndUpdate(
      updatedBookById,
      updateFormData,
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      data: updatedBook,
    });
    if (!updateBook) {
      return res.status(404).json({
        success: false,
        message: "Book not Found",
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something went Wrong ! please try again",
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const deletedBook = await newBook.findByIdAndDelete(getCurrentBookId);
    if (!deleteBook) {
      return res.status(404).json({
        success: false,
        message: "Book not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book is successfully deleted",
      data: deleteBook,
    });
  } catch (error) {}
};
module.exports = {
  getAllBook,
  addNewBook,
  getSingleBookById,
  updateBook,
  deleteBook,
};

//
