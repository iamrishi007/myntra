const Category = require("../model/category_images.model");

const createCategoryProduct = async (req, res) => {
    try {
        const { image } = req.body;


        if (!image) {
            return res.status(400).json({ message: "Image and category are required" });
        }


        const newProduct = new Category({
            image,
       
        });
        const savedProduct = await newProduct.save();

        res.status(201).json({
            message: "Category product created successfully",
            product: savedProduct,
        });
    } catch (error) {
        console.error("Error creating product:", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
};

const getCategoryProduct = async (req, res) => {
    try {
        const products = await Category.find()
        if (!products.length) {
            return res.status(404).json(
                {
                    message: "No products found"

                });
        }
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
};

module.exports = {
    createCategoryProduct,
    getCategoryProduct,
};
