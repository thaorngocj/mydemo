const Borrow = require("../models/Borrow");
const Book = require("../models/Book");

exports.borrowBook = async (req, res) => {
  try {
    const { bookId, quantity, dueDate } = req.body;

    // Validate quantity
    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "Quantity must be greater than 0" });
    }

    // Validate dueDate
    if (!dueDate || new Date(dueDate) <= new Date()) {
      return res.status(400).json({ message: "Due date must be in the future" });
    }

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.availableQuantity < quantity) {
      return res.status(400).json({ message: "Not enough books available" });
    }

    // Update stock
    book.availableQuantity -= quantity;
    book.borrowedQuantity += quantity;
    await book.save();

    const borrow = await Borrow.create({
      user: req.user._id,
      book: bookId,
      quantity,
      dueDate,
      status: "borrowed"
    });

    res.status(201).json(borrow);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const borrow = await Borrow.findById(req.params.id);

    if (!borrow) {
      return res.status(404).json({ message: "Borrow record not found" });
    }

    // Check ownership (user only return their own borrow)
    if (borrow.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (borrow.status === "returned") {
      return res.status(400).json({ message: "Already returned" });
    }

    const book = await Book.findById(borrow.book);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Update stock back
    book.availableQuantity += borrow.quantity;
    book.borrowedQuantity -= borrow.quantity;
    await book.save();

    borrow.status = "returned";
    borrow.returnDate = new Date();
    await borrow.save();

    res.json({ message: "Book returned successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMyBorrows = async (req, res) => {
  try {

    // Auto update overdue
    await Borrow.updateMany(
      { status: "borrowed", dueDate: { $lt: new Date() } },
      { status: "overdue" }
    );

    const borrows = await Borrow.find({ user: req.user._id })
      .populate("book", "title author");

    res.json(borrows);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ADMIN only
exports.getAllBorrows = async (req, res) => {
  try {

    // Auto update overdue
    await Borrow.updateMany(
      { status: "borrowed", dueDate: { $lt: new Date() } },
      { status: "overdue" }
    );

    const borrows = await Borrow.find()
      .populate("user", "name email")
      .populate("book", "title author");

    res.json(borrows);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};