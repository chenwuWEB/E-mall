var express=require("express");
var router=express.Router();
var pool=require("../pool");

// 列表
router.get("/list",(req,res)=>{
    var word=req.query.words
    var words=`%${word}%`
    var pageSize=10
    var list={}
   
    var pno=req.query.pno
    var limits=`limit ${pno*pageSize},${pageSize}`
    var sql=`select title,price,img_url,lid from products_list where conditions like '${words}'`;
    pool.query(sql,[],(err,result)=>{
      if(err)throw err;
      if(result.length>0){
        list.count=Math.ceil(result.length/pageSize)
        sql+=` ${limits}`
        pool.query(sql,[],(err,result)=>{
          if(err)throw err;
          if(result.length>0){
            list.data=result
            res.send(list)
          }
        })
      }else{
        res.send({code:-1,msg:"你太帅了"})
      }
    })
})

module.exports=router;