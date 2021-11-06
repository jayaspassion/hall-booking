const mongoose = require('mongoose');

// Create Schema
const BookingSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  custName: {
    type: String,
    required: true
  },
  custId: {
    type: String,
    required: true
  },
  roomId: {
      type: String,
      required: true
  },
  date: {
    type : Date,
    required: true
  },
  startTime: {
      type: Date
  },
  endTime: {
      type: Date
  }

},{timestamps:true});

const Booking = mongoose.model('booking', BookingSchema);

module.exports = Booking ;