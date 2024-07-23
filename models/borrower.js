const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BorrowerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  borrowedItems: [{ type: Schema.Types.ObjectId, ref: 'Book' }, { type: Schema.Types.ObjectId, ref: 'Computer' }],
});

module.exports = mongoose.model('Borrower', BorrowerSchema);
