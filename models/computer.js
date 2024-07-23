const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ComputerSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  serialNumber: { type: String, required: true },
});
module.exports = mongoose.model('Computer', ComputerSchema);
