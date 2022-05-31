const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const ProductRoutes = require("./routes/ProductRoutes");

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/product').then(res => {
    console.log("Connected");
}).catch(e => {
    console.log(e);
})

// mongoose.connect('mongodb+srv://fyndme-cluster.3zo1z.mongodb.net/myFirstDatabase').then(res => {
//     console.log("Connected");
// }).catch(e => {
//     console.log(e);
// })

app.use("/",ProductRoutes);

app.use("/",express.static(__dirname + "public"));

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.listen(1000,() => {
    console.log("Server Running on 1000");
})