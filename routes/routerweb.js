const express = require('express');
const router = express.Router();
const productAPI = require('../api/productapi');
const userController = require('../api/user');
const CartAPI = require('../api/cartapi');

const initRouter = (app) => {
    // userapi 
    router.post('/register', userController.register);
    router.post('/login', userController.login);

    //productapi 
    router.get('/listproducts', productAPI.getProduct);
    router.post('/addproduct', productAPI.addProduct); // Đảm bảo rằng bạn đã định nghĩa addProduct
    router.post('/findproduct', productAPI.findproduct); // Đảm bảo rằng bạn đã định nghĩa findproduct
    router.get('/getinfoproduct/:productId', productAPI.getInfoProduct); // Đảm bảo rằng bạn đã định nghĩa getInfoProduct


    //cartapi 
    router.get('/listcart',CartAPI.getCart);
    router.post('/addcart',CartAPI.addCart);

    return app.use('/', router);
}

module.exports = initRouter;
