var express=require("express");
var router=express.Router();
var pool=require("../pool");


// 注册
router.get("/detail",(req,res)=>{
  var lid=req.query.lid;
  var pid=null
  var data={}
  /*var sql="select pid from products where lid=?";
    pool.query(sql,[lid],(err,result)=>{
      if(err)throw err;
      pid=result[0].pid;
    })*/
    /*var sql="select title,price,img_url,promise,onsale,p_count from products where lid=?";
    pool.query(sql,[lid],(err,result)=>{
      if(err)throw err;
      data.product=result[0]
      
    })*/
    /*var sql="select DISTINCT color from products where pid=?";
    pool.query(sql,[1],(err,result)=>{
      if(err)throw err;
      res.send(result)
    })*/
    var sql1="select title,price,img_url,promise,onsale,p_count,color,spec,memory from products where lid=?";
    pool.query(sql1,[lid],(err,result)=>{
      if(err)throw err;
      data.product=result[0]
      var sql2="select pid from products where lid=?";
      pool.query(sql2,[lid],(err,result)=>{
        if(err)throw err;
        pid=result[0].pid;
        var sql3="select DISTINCT color from products where pid=?";
        pool.query(sql3,[pid],(err,result)=>{
          if(err)throw err;
          data.color=result;
          var sql4="select DISTINCT spec from products where pid=?";
          pool.query(sql4,[pid],(err,result)=>{
            if(err)throw err;
            data.spec=result;
            var sql5="select DISTINCT memory from products where pid=?";
            pool.query(sql5,[pid],(err,result)=>{
              if(err)throw err;
              data.memory=result;
              res.send(data)
            })
          })
        })
      })
    })
})

router.get("/getlid",(req,res)=>{
  var color=req.query.color
  var spec=req.query.spec
  var memory=req.query.memory.split(" ").join("+")
  var lid=req.query.lid
  var pid=null
  /*var sql="select lid from products where color=? and spec=? and memory=?"
  pool.query(sql,[color,spec,memory],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result[0])
    }
  })*/
  var sql1="select pid from products where lid=?";
  pool.query(sql1,[lid],(err,result)=>{
    if(err)throw err;
    pid=result[0].pid;
    var sq2="select lid from products where color=? and spec=? and memory=? and pid=?"
    pool.query(sq2,[color,spec,memory,pid],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result[0])
    }
    })         
  })
})
module.exports=router;