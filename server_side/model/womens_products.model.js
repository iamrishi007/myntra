const mongoose = require("mongoose")

const womenProductsSchema = mongoose.Schema({
     title: {
          type: String,
          required: true
     },
     img: {
          type: String,
          required: true
     },
     price: {
          type: Number,
          required: true
     },
     category: {
          type: String,
          required: true
     },
     review: {
          type: String,
          required: false
     },
     discount: {
          type: String,
          required: false
     },
     size: {
          type: String
     }
});

const womenProductsModel = new mongoose.model("women_products", womenProductsSchema);
module.exports = womenProductsModel;


