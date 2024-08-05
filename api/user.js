const taikhoanmodel = require('../models/acountModel');
const mongoose = require('mongoose');

exports.register = async (req, res) => {
    try {
        const { username, password, name } = req.body;
        
        // Kiểm tra độ dài mật khẩu
        if (password.length >= 6) {
            const newUser = new taikhoanmodel.Acount({
                username,
                password,
                name
            });
            await newUser.save();
            console.log("Đăng ký người dùng thành công");
            res.status(201).json({ message: "Người dùng đã được tạo thành công" });
        } else {
            console.log("Mật khẩu phải đủ 6 ký tự");
            res.status(400).json({ message: "Mật khẩu phải đủ 6 ký tự" });
        }
    } catch (e) {
        console.log("Lỗi : " + e);
        res.status(500).json({ message: "Lỗi server" });
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await taikhoanmodel.Acount.findOne({ username: username });
        
        if (!user) {
            console.log('Người dùng không tồn tại');
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }
        
        if (user.password !== password) {
            console.log("Sai mật khẩu");
            return res.status(401).json({ message: "Sai mật khẩu" });
        } else {
            const userPayload = { username: user.username, password: user.password };
            console.log(userPayload);
            console.log("Đăng nhập thành công");
            res.status(200).json(userPayload);
        }
    } catch (e) {
        console.log("Lỗi : " + e);
        res.status(500).json({ message: "Lỗi server" });
    }
}
