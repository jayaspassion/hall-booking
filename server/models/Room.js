const mongoose = require('mongoose');

// Create Schema
const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  numberOfSeats: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amenities: [{
    type : String
  }]
  
});

const Room = mongoose.model('room', RoomSchema);

module.exports = Room ;