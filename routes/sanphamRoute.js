const express = require('express');
const router = express.Router();
const productAPI = require('../api/productapi'); // Đảm bảo rằng đường dẫn đúng

router.get('/listproducts', productAPI.getProduct);
router.post('/addproduct', productAPI.addProduct); // Đảm bảo rằng bạn đã định nghĩa addProduct
router.post('/findproduct', productAPI.findproduct); // Đảm bảo rằng bạn đã định nghĩa findproduct
router.get('/getinfoproduct/:productId', productAPI.getInfoProduct); // Đảm bảo rằng bạn đã định nghĩa getInfoProduct

module.exports = router; // Đảm bảo bạn xuất router đúng cách
