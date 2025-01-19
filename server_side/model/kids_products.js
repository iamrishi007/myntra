const mongoose = require("mongoose")
const kindsProductsSchema = new mongoose.Schema({
     title: {
          type: String,
          required: true
     },
     img: {
          type: String
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
          type: Number
     },
     discount: {
          type: String
     },
     size: {
          type: String
     }
})

const kindsProductsModel = new mongoose.model("kids_product", kindsProductsSchema)
module.exports = kindsProductsModel