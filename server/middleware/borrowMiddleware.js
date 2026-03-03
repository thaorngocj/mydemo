exports.returnBook = async (req, res) => {
  try {
    const borrow = await Borrow.findById(req.params.id);

    if (!borrow) {
      return res.status(404).json({ message: "Borrow record not found" });
    }

    if (borrow.status === "returned") {
      return res.status(400).json({ message: "Already returned" });
    }

    const book = await Book.findById(borrow.book);

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