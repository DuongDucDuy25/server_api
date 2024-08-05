const sanphamModel = require('../models/sanphamModel');

exports.addProduct = async (req, res) => {
    try {
        const { name, price, mota, imageproduct } = req.body;

        const NewProduct = new sanphamModel.productModel({
            name,
            price,
            mota,
            imageproduct
        });

        await NewProduct.save();
        console.log('Sản phẩm mới: ', NewProduct);
        res.status(201).json({ message: 'Thêm sản phẩm thành công' });
    } catch (e) {
        console.log("Lỗi: ", e);
        res.status(500).json({ message: 'Có lỗi xảy ra khi thêm sản phẩm' });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const products = await sanphamModel.productModel.find();
        console.log('Danh sách sản phẩm: ', products);
        res.status(200).json(products);
    } catch (e) {
        console.log("Lỗi: ", e);
        res.status(500).json({ message: 'Có lỗi xảy ra khi lấy danh sách sản phẩm' });
    }
}

exports.findproduct = async (req, res) => {
    try {
        const productname = req.body.name;
        const searchCondition = {};
        if (productname) {
            searchCondition.name = productname;
        }

        const products = await sanphamModel.productModel.find(searchCondition);
        console.log("Kết quả tìm kiếm: ", products);
        res.status(200).json(products);
    } catch (e) {
        console.log("Lỗi: ", e);
        res.status(500).json({ message: 'Có lỗi xảy ra khi tìm kiếm sản phẩm' });
    }
}

exports.getInfoProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await sanphamModel.productModel.findById(productId);
        if (!product) {
            console.log("Không tìm thấy sản phẩm");
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }
        console.log("Thông tin sản phẩm: ", product);
        res.status(200).json(product);
    } catch (e) {
        console.log("Lỗi: ", e);
        res.status(500).json({ message: 'Có lỗi xảy ra khi lấy thông tin sản phẩm' });
    }
}

