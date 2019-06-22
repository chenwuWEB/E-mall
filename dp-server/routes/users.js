var express=require("express");
var router=express.Router();
var pool=require("../pool");

// 登录
router.get("/login",(req,res)=>{
  var uname=req.query.uname
  var upwd=req.query.upwd
  
    var sql="select uid from users where uname=? and upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
     if(err)throw err;
     if(result.length>0){
       res.send({code:1,msg:"登录成功"})
     }else{
      res.send({code:0,msg:"登录失败"})
     }
    })
})
// 注册
router.get("/group",(req,res)=>{
  var uname=req.query.uname
  var upwd=req.query.upwd
  var email=req.query.email
  var phone=req.query.phone

  var sql1="select uid from users where uname=?";
  pool.query(sql1,[uname],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send({code:0,msg:"用户名已经被使用，请确认后重试！"})
    }else{
      var sql2="insert into users values(null,?,?,?,?)";
      pool.query(sql2,[uname,upwd,email,phone],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
          res.send({code:1,msg:"注册成功"})
        }else{
          res.send({code:2,msg:"注册失败"})
        }
      })
    }
   })
  
  
    
})
module.exports=router;