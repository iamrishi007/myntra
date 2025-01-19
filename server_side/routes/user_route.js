const express = require("express");
const { userRegister, userLogin } = require("../controllers/user_controller");
const verifyToken = require("../middleware/user_middleware");

const userRouter = express.Router()


userRouter.post("/register", userRegister)
userRouter.post("/login", userLogin)



module.exports = userRouter;
