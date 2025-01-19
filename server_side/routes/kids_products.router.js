const express = require("express")
const { addKidsProducts, getKidsProducts } = require("../controllers/kids_products_controller")

const kids_product_router = express.Router()

kids_product_router.post("/kids/products", addKidsProducts)
kids_product_router.get("/kids/products", getKidsProducts)

module.exports = kids_product_router