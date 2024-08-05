const CartModelabc = require('../models/cartModel');
exports.addCart = async (req, res) => {
    try {
        const { name, price, mota, imageproduct } = req.body;

        const NewProduct = new CartModelabc.cartModel({
            name,
            price,
            mota,
            imageproduct
        });

        await NewProduct.save();
        console.log('Sản phẩm mới: ', NewProduct);
        res.status(201).json({ message: 'Thêm vào giỏ hàng thành công' });
    } catch (e) {
        console.log("Lỗi: ", e);
        res.status(500).json({ message: 'Có lỗi xảy ra khi thêm vào giỏ hàng' });
    }
}

exports.getCart = async (req, res) => {
    try {
        const products = await CartModelabc.cartModel.find();
        console.log('Danh sách sản phẩm: ', products);
        res.status(200).json(products);
    } catch (e) {
        console.log("Lỗi: ", e);
        res.status(500).json({ message: 'Có lỗi xảy ra khi lấy danh sách sản phẩm' });
    }
}