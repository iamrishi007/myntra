const mongoose = require("mongoose")
const menProductSchemma = mongoose.Schema({
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
          type: Number,
     },
     discount: {
          type: String
     },
     size:{
          type:String
     }
})

const mensProductsModel = new mongoose.model("mens_product", menProductSchemma)
module.exports = mensProductsModel