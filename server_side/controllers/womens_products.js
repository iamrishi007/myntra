
const womenProductsModel = require("../model/womens_products.model")

const addWomensProduct = async (req, res) => {
     const { title, img, price, category, review, discount } = req.body

     if (!title || !img || !price || !category) {
          return res.status(400).json({
               message: "Missing required fields"
          })
     }

     try {
          const women_products = new womenProductsModel({
               title,
               img,
               price,
               category,
               review,
               discount
          })
          const productsAdded = await women_products.save()
          return res.status(200).json({
               message: "Women's product added!",
               product: productsAdded
          })

     } catch (error) {
          console.log(error.message, "Women's products are not added! Please try again.");
          return res.status(500).json({
               message: "An error occurred, please try again."
          })
     }
}

const getWomensProducts = async (req, res) => {
     const allWomensProduct = await womenProductsModel.find()

     if (!allWomensProduct.length) {
          return res.status(404).json({
               message: "Please add women's products"
          })
     }

     try {
          return res.status(200).json({
               products: allWomensProduct,
               message: "Women's products are here, dude! Buy the products."
          })

     } catch (error) {
          return res.status(500).json({
               message: error.message
          })
     }
}

module.exports = {
     addWomensProduct,
     getWomensProducts
}
