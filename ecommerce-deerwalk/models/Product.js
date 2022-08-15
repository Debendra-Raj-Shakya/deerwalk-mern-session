const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },

  price: {
    type: Number,
  },

  description: {
    type: String,
  },

  category: { type: String },

  image: { type: String },

  rating: {
    rate: { type: Number },
    count: { type: Number },
  },
});

const ProductModel = mongoose.Model("product", productSchema);

module.exports = ProductModel;
