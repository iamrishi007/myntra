const express = require("express")
const { addWomensProduct, getWomensProducts } = require("../controllers/womens_products")
const womensProductRouter = express.Router()

womensProductRouter.post("/womens/products", addWomensProduct)
womensProductRouter.get("/womens/products", getWomensProducts)

module.exports = womensProductRouter