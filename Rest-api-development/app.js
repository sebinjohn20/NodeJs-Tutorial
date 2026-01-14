const express = require("express");
const app = express();
app.use(express.json());
let books = [
  { id: "1", title: "Book 1" },
  { id: "2", title: "Book 2" },
];
app.get("/", (req, res) => {
  res.json({ message: "Welcome to book store" });
});

app.get("/get", (req, res) => {
  res.json(books);
});
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === req.params.id);
  if (book) {
    res.status(200).json({
      success: true,
      data: book,
    });
  }
});

app.post("/add", (req, res) => {
  const newBooK = {
    id: Math.floor(Math.random() * 1000).toString(),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  };
  books.push(newBooK);
  res.status(200).json({
    message: "New book is added successfully",
    data: newBooK,
  });
});

app.put("/update/:id", (req, res) => {
  const findCurrentBook = books.find((book) => book.id === req.params.id);
  if (!findCurrentBook) {
    return res.status(404).json({
      success: false,
      message: "Book  not found",
    });
  }
  if (req.body && req.body.title) {
    findCurrentBook.title = req.body.title;
  }
  res.status(200).json({
    message: `Book with Id ${req.params.id} updated successfully`,
    data: findCurrentBook,
  });
});

app.delete("delete/:id", (req, res) => {
  const findIndexOfCurrentBook = books.findIndex(
    (item) => item.id === req.params.id
  );
  if (findIndexOfCurrentBook !== -1) {
    const deletebook = books.splice(findIndexOfCurrentBook, 1);
    res.status(200).json({
      message: "Book deleted successfully",
      data: deletebook[0],
    });
  } else {
    return res.status(404).json({
      message: "Book not found",
    });
  }
});
app.listen(4000, () => {
  console.log("server running on port 4000");
});
