const express = require('express');
const mongoose = require('mongoose');
const SanPhamRouter = require('./routes/sanphamRoute');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
// kết nói đến mongoDB
mongoose.connect('mongodb://localhost:27017/AND103',{useNewUrlParser : true,useUnifiedTopology : true})
.then(()=>{
    console.log('Kết nối thành công');
})
.catch((e)=>{
    console.log('Kết nối thất bại : '+e);
});
// sử dụng bodyparser
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// sử dụng view engine ejs
app.set('view engine','ejs');

// sử dụng router
app.use('/product',SanPhamRouter);
app.listen(port,()=>{
    console.log('Server đang chạy ở cổng ' + port);
});