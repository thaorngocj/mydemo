const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  category: String,
  price: Number,
  quantity: {
    type: Number,
    default: 0
  },
  coverImage: String,
  description: String,
  isHot: {
    type: Boolean,
    default: false
  },
  availableQuantity: {
  type: Number,
  default: function () {
    return this.quantity;
    }
  },
  soldQuantity: {
    type: Number,
    default: 0
  },
  borrowedQuantity: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);