const mensProductsModel = require("../model/mens_products.model");

const addMensProduct = async (req, res) => {
     const { title, img, price, category, review, discount } = req.body


     if (!title || !img || !price || !category) {
          return res.status(400).json({
               message: "Mens product not added! Missing required fields.",
          });
     }

     try {

          const product = new mensProductsModel({
               title,
               img,
               price,
               category,
               review,
               discount,
          });

          const addedMensProduct = await product.save()
          return res.status(201).json({
               message: "Mens product added successfully!",
               product: addedMensProduct,
          });
     } catch (error) {
          console.error("Error adding product:", error.message)
          return res.status(500).json({
               message: "An error occurred while adding the mens product.",
               error: error.message,
          });
     }
};

const getMensProducts = async (req, res) => {
     try {

          const mens_product = await mensProductsModel.find()

          if (mens_product.length === 0) {
               console.log("No products found in the database.")
               return res.status(404).json({
                    message: "Please add some products bro !.",
               });
          }

          return res.status(200).json(mens_product)
     } catch (error) {
          console.error("Error fetching products:", error.message)
          return res.status(500).json({
               message: "Error while fetching mens products.",
               error: error.message,
          });
     }
};

module.exports = {
     addMensProduct,
     getMensProducts,
};
