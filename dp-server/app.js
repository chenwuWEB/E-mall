//使用express构建web服务器 --11:25
const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors=require("cors");
/*引入路由模块*/
var users=require("./routes/users");
var details=require("./routes/details");
var products=require("./routes/list");


var app = express();
app.use(cors({
  origin:['http://127.0.0.1:8080','http://localhost:8080'],
  credentials:true
}))
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));

/*使用路由器来管理路由*/
app.use("/users",users);
app.use("/details",details);
app.use("/products",products);

