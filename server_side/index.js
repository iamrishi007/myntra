const dotenv = require("dotenv").config()
const express = require("express")
const connect = require("./config/db")
const userRouter = require("./routes/user_route")
const category_router = require("./routes/category_routes")
const kids_product_router = require("./routes/kids_products.router")
const mens_product_router = require("./routes/mens_product.router")
const womens_product_router = require("./routes/womens_products.router")
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json())
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Server is running!");
});
// Allow all origins
app.use(cors());



app.use("/user", userRouter);
app.use("/api", category_router)
app.use("/api", kids_product_router)
app.use("/api", mens_product_router)
app.use("/api", womens_product_router)

app.listen(PORT, async () => {
    try {
        await connect;
        console.log("Connected to MongoDB");
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
});
