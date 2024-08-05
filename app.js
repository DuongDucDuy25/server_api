const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/acountRoute'); // Đảm bảo rằng đường dẫn đúng
const SanPhamRouter = require('./routes/sanphamRoute');
const initRouter = require('./routes/routerweb');


const app = express();
const port = 3000;

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/AND103', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Kết nối thành công');
    })
    .catch((e) => {
        console.log('Kết nối thất bại: ' + e);
    });

// Sử dụng body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Sử dụng view engine ejs
app.set('view engine', 'ejs');

// Sử dụng router
initRouter(app); // Gọi hàm initRouter và truyền đối tượng app

app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
});
