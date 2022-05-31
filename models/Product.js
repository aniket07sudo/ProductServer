const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName:String,
    Price:Number,
    VAT:Number,
    Stock:Number,
})

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;