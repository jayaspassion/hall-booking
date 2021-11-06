const mongoose = require('mongoose');

// Create Schema
const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  }
});

const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer ;