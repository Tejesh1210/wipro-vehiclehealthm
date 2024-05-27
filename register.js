const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  Name: String,
  RegistrationNo: String,
  ChasisNo: String,
  Email: String,
  Password: String
});

module.exports = mongoose.model('Vehicle', vehicleSchema);