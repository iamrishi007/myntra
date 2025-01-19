const express = require("express")
const { createCategoryProduct, getCategoryProduct } = require("../controllers/category_controller")
const categoryRouter = express.Router()

categoryRouter.post("/category/products", createCategoryProduct)
categoryRouter.get("/category/products", getCategoryProduct)

module.exports = categoryRouter
