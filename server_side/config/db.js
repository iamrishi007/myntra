const mongoose = require("mongoose")
const MONGODB_URL = process.env.MONGODB_URL
const connection = mongoose.connect(MONGODB_URL)

module.exports = connection