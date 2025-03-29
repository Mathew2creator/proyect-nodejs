const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  price: { type: Number, required: true },
  image: { type: String },
  tags: [{ type: String }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
