const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  borrowDate: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date,
    required: true
  },
  returnDate: Date,
  status: {
    type: String,
    enum: ["borrowed", "returned", "overdue"],
    default: "borrowed"
  },

}, { timestamps: true });

borrowSchema.pre("find", function () {
  this.where({
    $or: [
      { status: "borrowed", dueDate: { $lt: new Date() } }
    ]
  });
});

module.exports = mongoose.model("Borrow", borrowSchema);