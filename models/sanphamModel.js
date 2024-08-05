// viết model 
const mongoose = require('mongoose');
const sanphamShema = new mongoose.Schema({
    name : { 
        type : String,
    },
    price : {
        type : String,
    },
    mota : {
        type : String,
    },
    imageproduct : {
        type : String,
    }
},{versionKey : false});
const productModel = mongoose.model('products',sanphamShema);
module.exports = {productModel};