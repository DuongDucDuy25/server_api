const mongoose = require('mongoose');
const cartShema = new mongoose.Schema({
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
const cartModel = mongoose.model('carts',cartShema);
module.exports = {cartModel};