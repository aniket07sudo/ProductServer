const Product = require("../models/Product");

exports.displayProduct = async (req,res,next) => {

    console.log(req.body);

    try {
        const products = await Product.find();
    
        res.status(200).json({
            status:'success',
            products:products
        })

    } catch(e) {
        console.log(e);
    }
}   

exports.addProduct = async (req,res,next) => {
    console.log(req.body);

    try {
        const addProduct = await Product.create(req.body);
    
        res.status(200).json({
            status:'success',
            addProduct
        })

    } catch(e) {
        console.log(e);
    }
}   