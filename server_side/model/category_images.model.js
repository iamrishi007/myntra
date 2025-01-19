const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  }
});

const categoryModel = mongoose.model("category_product", categorySchema);

module.exports = categoryModel;
