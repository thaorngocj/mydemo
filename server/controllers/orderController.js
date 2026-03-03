const Order = require("../models/OrderBook");
const Book = require("../models/Book");

exports.createOrder = async (req, res) => {
  try {
    const { items } = req.body;

    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      const book = await Book.findById(item.book);

      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      if (book.availableQuantity < item.quantity) {
        return res.status(400).json({ message: "Not enough stock" });
      }

      totalAmount += book.price * item.quantity;
      orderItems.push({
        book: book._id,
        quantity: item.quantity,
        price: book.price   
      });
      book.availableQuantity -= item.quantity;
      book.soldQuantity += item.quantity;

      await book.save();
    }

    const order = await Order.create({
      user: req.user._id,
      items: orderItems,
      totalAmount
    });

    res.status(201).json(order);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};