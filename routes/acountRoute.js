const express = require('express');
const router = express.Router();
const userController = require('../api/user'); // Đảm bảo rằng đường dẫn đúng

// Định nghĩa các route
router.post('/register', userController.register);
router.post('/login', userController.login); // Thay đổi GET thành POST nếu cần

module.exports = router;
