
const kindsProductsModel = require("../model/kids_products");

const addKidsProducts = async (req, res) => {
     const { title, img, price, category, review, discount } = req.body;

     if (!title || !img || !price || !category) {
          return res.status({
               message: "please add products "
          })
     }

     try {

          const kids_product = await kindsProductsModel({
               title,
               img,
               price,
               category,
               review,
               discount
          })

          const productsAdded = await kids_product.save()
          return res.status(200).json({
               products: productsAdded,
               message: "Kids Products Added Successfully"
          })

     } catch (error) {
          return res.status(500).json({
               message: error.message
          })

     }
}


const getKidsProducts = async (req, res) => {

     const kidsProducts = await kindsProductsModel.find()
     try {
          if (!kidsProducts.length) {
               return res.status({
                    message: "please add kids products"
               })
          }

          return res.status(200).json({
               message: "hey bro choise your products cute boy!",
               products:kidsProducts
          })

     } catch (error) {
          return res.status(500).json({
               message: "error while fetching kids products.",
               error: error.message,
          });
     }
}

module.exports = {
     addKidsProducts,
     getKidsProducts
}