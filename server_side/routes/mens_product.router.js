const express = require("express")
const mensProductsRouter = express.Router()
const { addMensProduct, getMensProducts } = require("../controllers/mens_product_controller")


mensProductsRouter.post("/mens/products", addMensProduct)
mensProductsRouter.get("/mens/products", getMensProducts)


module.exports = mensProductsRouter