<template>
  <footer>
      <div class="top">
        <p>END</p>
        <ul>
          <li>
            <img src="http://127.0.0.1:3000/img/icon1.png" alt=""><span>消费者保障</span>
            <p>保障范围 退货退款流程 服务中心 更多特色服务</p>
          </li>
          <li>
            <img src="http://127.0.0.1:3000/img/icon3.png" alt=""><span>新手上路</span>
            <p>新手专区 消费警示 交易安全 24小时在线帮助 免费开店</p>
          </li>
          <li>
            <img src="http://127.0.0.1:3000/img/icon2.png" alt=""><span>付款方式</span>
            <p>快捷支付 信用卡 余额宝 蚂蚁花呗 货到付款</p>
          </li>
          <li>
            <img src="http://127.0.0.1:3000/img/icon4.png" alt=""><span>电铺特色</span>
            <p>手机电铺 旺旺/旺信 大众评审</p>
          </li>
        </ul>
      </div>

      <div class="bottom">
        <div class="cent clear">
          <table></table>
          <div class="left">
            <ul>
              <li>关于我们</li>
              <li>|</li>
              <li>招聘信息</li>
              <li>|</li>
              <li>联系我们</li>
              <li>|</li>
              <li>商务合作</li>
              <li>|</li>
              <li>VIP服务</li>
            </ul>
            <p>Copyright © 杭州电铺金桥科技有限公司版权所有 杭ICP备201700012号-3</p>
          </div>
          
          <div class="right">
            <span>增值电信业务经营许可证：浙B2-20080224 </span>
            
            <img src="http://127.0.0.1:3000/img/erweima.png" alt="">
          </div>

        </div>
        <table></table>
      </div>

    </footer>	
  
</template>
<script>
  //抛出匿名模块对象
  export default {
    data(){
      return {
      
      }
    }
  }
</script>

<style scoped>
  footer .top{
      width:1190px;
      margin:0 auto;
      margin-bottom:24px
    }

    footer .top p:first-child{
      text-align:center;
      line-height:36px;
      position:relative;
      width:84px;
      margin:auto;
      color:#d7ecf0f8;
    }
    footer .top p:first-child:before,footer .top p:first-child:after{
      content:'';
      position:absolute;
      height:0;
      line-height:0;
      border-top:1px solid #e6e6e6;
      width:60px;
      top:50%;
    }
    footer .top p:first-child:before{
      left:-70px;
    }
    footer .top p:first-child:after{
      right:-70px;
    }

    footer .top ul{
      display:flex;
      width:1190px;
      justify-content: space-around;
      margin-top:50px
    }

    footer .top ul li{
      width:220px;
    }

    footer .top ul li span{
      line-height:60px;
      font-size: 16px;
      color:#3c3c3c;
    }

    footer .top ul li p{
      font-size: 12px;
      width:212px;
      color:#999;
    }

    footer .bottom{
      background:#666
    }

    footer .cent{
      width:1190px;
      margin:auto;
      color:#999;
      border-bottom:1px solid #999;
      margin-bottom:50px;
    }

    footer .cent .left{
      width:510px;
      margin-top:50px;
      float:left;
    }

    footer .left ul{
      display:flex;
      width:510px;
      justify-content:space-between;
      margin-bottom:12px
    }

    footer .cent .left p{
      font-size:14px;
      margin-bottom:6px;
    }

    footer .cent .right{
      width:420px;
      float:right;
      margin-top:20px
    }

    footer .cent .right img{
      width:75px;
    }
    footer .cent .right span{
      font-size:12px
    }

</style>