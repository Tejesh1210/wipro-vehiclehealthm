const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
//   VehicleID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Vehicle'
//   },
  VehicleStatus: String,
  EngineHealth: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Status', statusSchema);

