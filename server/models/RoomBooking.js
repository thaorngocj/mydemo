const mongoose = require("mongoose");

const roomBookingSchema = new mongoose.Schema({
  userName: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  date: Date,
  startTime: String,
  endTime: String,
  status: {
    type: String,
    enum: ["booked", "cancelled"],
    default: "booked"
  }
});
module.exports = mongoose.model("RoomBooking", roomBookingSchema);