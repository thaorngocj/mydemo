const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  description: String
});
module.exports = mongoose.model("Room", roomSchema);