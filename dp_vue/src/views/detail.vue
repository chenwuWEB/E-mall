<template>
    <div>
        <!-- 引入header -->
        <my-header></my-header>
        <!-- 创建detail模板 -->
         <div id="nav">
            <ul class="clear">
                <li><a href="javascript:;">首页</a></li>
                <li><a href="javascript:;">全部商品</a></li>
                <li><a href="javascript:;">数码专区</a></li>
                <li><a href="javascript:;">手机卖场</a></li>
                <li><a href="javascript:;">简约</a></li>
                <li><a href="javascript:;">多功能</a></li>
             </ul>
         </div>

        <div id="bre-nav">
            <ul class="clear">
                <li><a href="javascript:;">数码专区</a></li>
                <li><a href="javascript:;">手机</a></li>
                <li><a href="javascript:;">高端智能</a></li>
                <li><a href="javascript:;">小米</a></li>
                <li><a href="javascript:;">简约</a></li>
            </ul>
        </div>

    <div id="detail">
      <div class="content">
        <div class="left">
          <img :src="product.img_url" alt="">
          <div>
            <ul class="clear">
              <li class="active"><img :src="product.img_url" alt=""></li>
            </ul>
          </div>
          <div>
            <a href="javascript:;">
              <i class="sprite"></i>
              关注
            </a>
            <a href="javascript:;">
                <i class="share"></i>
                分享
              </a>
          </div>
        </div>
        <div class="center">
          <div class="name-news">
            <h3>{{product.title}}</h3>
        <p>{{product.promise}}</p>
          </div>
          <div class="price">
            <div class="miaosha">
              <i></i>
              <p>电铺秒杀</p>
            </div>
            <div class="price-wrap">
              <table></table>
                <p>秒 杀 价:<span>￥{{product.price}}</span></p>
                <p>促　　销:<span>{{product.onsale}}</span></p>
              <table></table>
            </div>
          </div>
          <div class="oper">
            <table></table>
            <p>配 送 至:<span>浙江省 湖州市 安吉县 / 由 店铺 发货, 并提供售后服务.</span></p>
            <p>增值业务:<span>无</span></p>
          </div>
          <div class="x-color clear">
            <p>选择颜色:</p>
            <div>
              <ul class="clear">
                <li :class="{active:elem.color===product.color}" v-for="(elem,i) of color" :key="i"><a href="javascript:;" @click="getcolor" :data-color="elem.color">{{elem.color}}</a></li>
                <!-- <li><a href="javascript:;">雀翎蓝</a></li>
                <li><a href="javascript:;">珍珠白</a></li>
                <li><a href="javascript:;">炫丽金</a></li>
                <li><a href="javascript:;">烟晶灰</a></li>
                <li><a href="javascript:;">勃艮第红</a></li> -->
              </ul>
            </div>
          </div>
          <div class="choose-attr clear">
            <p>选择版本:</p>
            <div>
              <ul class="clear">
                <li :class="{active:elem.spec===product.spec}" v-for="(elem,i) of spec" :key="i"><a href="javascript:;" @click="getspec" :data-spec="elem.spec">{{elem.spec}}</a></li>
                <!-- <li><a href="javascript:;">特惠套装版</a></li> -->
              </ul>
            </div>
          </div>
          <div class="choose-GB clear">
            <p>选择内存:</p>
            <div>
              <ul class="clear">
                <li :class="{active:elem.memory===product.memory}" v-for="(elem,i) of memory" :key="i"><a href="javascript:;" @click="getmemory" :data-memory="elem.memory">{{elem.memory}}</a></li>
                <!-- <li><a href="javascript:;">6GB+128GB</a></li> -->
              </ul>
            </div>
          </div>
          <div class="quantity clear">
            <p>购买数量:</p>
            <div>
              <input type="button" value="-" @click="sub">
              <input type="text" v-model="num">
              <input type="button" value="+" @click="add">
              <span>件/(库存{{product.p_count}})</span>
            </div>
          </div>
          <div class="shopping-cart clear">
            <a href="javascript:;">立即购买</a>
            <a href="javascript:;">加入购物车</a>
          </div>
          <div class="points clear">
            <p>温馨提示</p>
            <p> ·支持7天无理由退货 ·此商品不可使用电铺券</p>
          </div>
        </div>
        <div class="right">
          <p>-----看了|又看-----</p>
          <div class="recs">
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="http://127.0.0.1:3000/img/recommend001.jpg" alt="">
                  <p title="奔创 小米8/小米8se钢化膜 小米8青春版水凝膜全屏覆盖高清高透防指纹护眼抗蓝光防爆软贴膜 小米8  钢化膜-紫光护眼抗蓝光-2片装">奔创 小米8/小米8se钢化膜 小米8青春版水凝膜全屏覆盖高清高透防指纹护眼抗蓝光防爆软贴膜 小米8  钢化膜-紫光护眼抗蓝光-2片装</p>
                  <p>￥19.8</p>
                </a>
             </li>
             <li>
                <a href="javascript:;">
                  <img src="http://127.0.0.1:3000/img/recommend002.jpg" alt="">
                  <p title="【壳膜套装】菲尔克 小米8手机壳 黑鲨游戏手机2保护套微磨砂指环支架硅胶小米8se全包防摔软壳 小米8【睿智黑】+钢化膜（送液）">【壳膜套装】菲尔克 小米8手机壳 黑鲨游戏手机2保护套微磨砂指环支架硅胶小米8se全包防摔软壳 小米8【睿智黑】+钢化膜（送液）</p>
                  <p>￥29.8</p>
                </a>
             </li>
             <li>
                <a href="javascript:;">
                  <img src="http://127.0.0.1:3000/img/recommend003.jpg" alt="">
                  <p title="爱国者（aigo） W200充电宝移动电源便携20000毫安聚合物电芯 苹果/安卓双输入适用于小米苹果白色">爱国者（aigo） W200充电宝移动电源便携20000毫安聚合物电芯 苹果/安卓双输入适用于小米苹果白色</p>
                  <p>￥89.0</p>
                </a>
             </li>
            </ul>
          </div>
        </div>
        <div class="magnifying" v-show="show" :style="magnifyingStyle"></div>
        <div class="img_copy" @mouseover="showit" @mouseout="outit" @mousemove="move($event)"></div>
        <div class="img_index" :style="img_indexStyle" v-show="show"></div>
      </div>
    </div>
        <!-- 引入footer -->
        <my-footer></my-footer>

    </div>
</template>
<script>
import myHeader from "@/components/header.vue"
import myFooter from "@/components/footer.vue"
export default {
  props:["lid"],
    data(){
        return{
          num:1,
          img_indexStyle:{
            top:0,
            left:0
          },
          magnifyingStyle:{
            background:"",
            backgroundPosition:"0px 0px"
          },
          show:false,
          product:{},
          color:[],
          spec:[],
          memory:[],
          g_color:"",
          g_spec:"",
          g_memory:"",
        }
    },
    methods:{
      sub(){
        if(this.num>1){
          this.num--
        }
      },
      add(){
        this.num++
      },
      showit(){
        this.show=true
      },
      outit(){
        this.show=false
      },
      move(e){
        var b=(e.offsetX-100)*2;
				var c=(e.offsetY-100)*2;
				var d=e.offsetX-100;
				var f=e.offsetY-100;
				if(e.offsetX<=100){
					b=0;
					d=0;
				}
				if(e.offsetX>=300){
					b=400;
					d=200;
				}
				if(e.offsetY<=100){
					c=0;
					f=0;
				}
				if(e.offsetY>=300){
					c=400;
					f=200;
				}	
				this.magnifyingStyle.backgroundPosition=`-${b}px -${c}px`

				this.img_indexStyle.top=f+"px";
				this.img_indexStyle.left=d+"px"
      },
      load(){
        this.axios.get(
          "http://127.0.0.1:3000/details/detail",
          {params:{lid:this.lid}}
        ).then(res=>{
          this.product=res.data["product"]
          this.color=res.data["color"]
          this.spec=res.data["spec"]
          this.memory=res.data["memory"]
          this.g_color=this.product.color
          this.g_spec=this.product.spec
          this.g_memory=this.product.memory
          this.magnifyingStyle.background=`url(${this.product.img_url}) no-repeat`
        })
      },
      getcolor(e){
        this.g_color=e.target.dataset.color
        console.log(this.g_color)
      },
      getspec(e){
        this.g_spec=e.target.dataset.spec
        console.log(this.g_spec)
      },
      getmemory(e){
        this.g_memory=e.target.dataset.memory
        console.log(this.g_memory)
      },
      linka(){
        this.axios.get(
          "http://127.0.0.1:3000/details/getlid",
          {params:{color:this.g_color,spec:this.g_spec,memory:this.g_memory,lid:this.lid}}
        ).then(res=>{
          
          console.log(res.data.lid)
           this.$router.push(`/detail/${res.data.lid}`)
        })
      }
    },
    created(){
      this.load()
    },
    watch:{
      lid(){
        this.load()
      },
      g_color(){
        this.linka()
      },
      g_spec(){
        this.linka()
      },
      g_memory(){
        this.linka()
      }
    },
    components:{
      myHeader,
      myFooter
    }
}
</script>

<style scoped>
#nav{
    padding-bottom:10px
}
#nav ul,#bre-nav ul{
  width:1190px;
  margin:auto;
}

#nav ul li,#bre-nav ul li{
  float:left;
  text-align:center
}

#nav ul li a,#bre-nav ul li a{
  display:block;
  padding-left:10px;
  padding-right:10px;
  color:#444
}

#nav ul li+li{
  margin-left:36px;
}

#nav ul a:hover{
  border-radius:10px;
  background:rgb(37, 19, 22);
  color:#eee
}

#bre-nav{
  background:#e5e5e5;
  padding-top:6px;
  padding-bottom:6px;
  margin-top:12px
}

#bre-nav ul li+li::before{
  content:"\\";
  float: left;
}

#bre-nav ul li a:hover{
  color:red;
}

#bre-nav ul li a{
  font-size:12px;
  line-height:21px
}

#detail .content{
  width:1190px;
  height:600px;
  margin:6px auto;
  border:1px solid #dcdcdc;
  display:flex;
  justify-content:space-between;
  position: relative;
}

#detail .content .left{
  width:400px;
  height:560px;
  /*/border:1px solid green;*/
} 

#detail .content .left img{
  width:400px;
  height:400px;
}

#detail .content .left ul{
  width:360px;
  margin:auto
}

#detail .content .left li{
  float:left;
}

#detail .content .left li.active{
  border:1px solid red
}
#detail .content .left ul img{
  width:60px;
  height:60px;
}

#detail .content .left .sprite{
  display:inline-block;
  width:14px;
  height:13px;
  background:url("http://127.0.0.1:3000/img/sprite.png") -44px -40px;
}

#detail .content .left .share{
  display:inline-block;
  width:14px;
  height:13px;
  background:url("http://127.0.0.1:3000/img/sprite.png") -45px -24px;
}

#detail .content .left a{
  color:#666;
  font-size:14px
}

#detail .content .left div:nth-child(3){
padding-left:16px;
margin-top:12px
}

#detail .content .center{
  width:590px;
  height:580px;
 /* border:1px solid orange;*/
} 

#detail .content .center .name-news h3{
  font-weight: 700;
  font-size: 16px;
  color:#3c3c3c;
  text-align: center;
  line-height:28px;
  margin-bottom:12px
}

#detail .content .center .name-news p{
  font-size: 14px;
  color:#5e69ad;
  padding:0 6px 0 6px;
  margin-bottom:8px
}

#detail .content .center .price .miaosha{
  background:url("http://127.0.0.1:3000/img/seckilling.png");
  height:32px;
}
#detail .content .center .price .miaosha i{
  background:url("http://127.0.0.1:3000/img/__sprite.png") -20px 0;
  width:20px;
  height:20px;
  display:block;
  margin-top:6px;
  float:left;
  margin-left:12px
}
#detail .content .center .price .miaosha p{
  float:left;
  margin-left:12px;
  line-height:32px;
  color:#eee
}
#detail .content .center .price .price-wrap{
  background:#f3f3f3;
  padding-bottom:12px
}
#detail .content .center .price .price-wrap p{
  color:#999;
  font-size:12px;
  margin-left:12px;
  margin-top:14px
}
#detail .content .center .price .price-wrap p:nth-child(2) span{
  color:red;
  font-size:18px;
  margin-left:12px;
}
#detail .content .center .price .price-wrap p:nth-child(3) span{
  color:#888;
  font-size:12px;
  margin-left:12px;
}

#detail .content .center .oper p{
  color:#999;
  font-size:12px;
  margin-left:12px;
  margin-top:14px
}

#detail .content .center .oper span{
  color:#888;
  font-size:12px;
  margin-left:12px;
}

#detail .content .center .x-color p,
#detail .content .center .choose-attr p,
#detail .content .center .choose-GB p,
#detail .content .center .quantity p,
#detail .content .center .points p{
  color:#999;
  font-size:12px;
  margin-left:12px;
  margin-top:20px;
  float:left;
}

#detail .content .center .x-color div,
#detail .content .center .choose-attr div,
#detail .content .center .choose-GB div,
#detail .content .center .quantity div{
  float:left;
  margin-left:12px;
  margin-top:14px;
  width:500px;
}

#detail .content .center .x-color li,
#detail .content .center .choose-attr li,
#detail .content .center .choose-GB li{
  float:left;
  border:1px solid #dcdcdc;
  border-radius:2px;
  margin-right:6px;
  margin-bottom:6px;
}

#detail .content .center .x-color li:hover,
#detail .content .center .choose-attr li:hover,
#detail .content .center .choose-GB li:hover{
  border:1px solid red;
  background:#f7f7f7;
}
#detail .content .center .x-color li a,
#detail .content .center .choose-attr li a,
#detail .content .center .choose-GB li a{
  display:block;
  padding:0 6px 0 6px;
  height:32px;
  line-height:32px;
  color:#666;
  font-size:14px
}

#detail .content .center .quantity div input:nth-child(1),
#detail .content .center .quantity div input:nth-child(3){
  padding:6px
}
#detail .content .center .quantity div input:nth-child(2){
width:66px;
padding:6px;
text-align:center;
}
#detail .content .center .quantity div span{
  color:#666;
  font-size:14px;
  margin-left:6px;
}

#detail .content .center .shopping-cart{
  margin:14px 0 0 12px;
}

#detail .content .center .shopping-cart a{
  display:block;
  width:99px;
  height:36px;
  border:1px solid #F0CAB6;
  float:left;
  text-align:center;
  line-height:36px;
  margin-right:12px;
  border-radius:6px;
  color:#E5511D;
  background:#FFE4D0;
}

#detail .content .center .shopping-cart a:hover{
  background:#FFE4A4
}

#detail .content .right{
  width:180px;
  height:600px;
  /*border:1px solid purple;*/
  border-left:1px solid #dcdcdc;
} 

#detail .content .right p:nth-child(1){
  color:#666;
  text-align:center;
  line-height:30px;
  font-size:12px;
}

#detail .content .right .recs{
  width:120px;
  margin:15px auto;
}
#detail .content .right .recs li{
  width:120px;
  margin-bottom:4px
}

#detail .content .right .recs li a{
  display:block;
  width:110px;
  color:#666;
}

#detail .content .right .recs li a p{
  width:120px;
  text-align: center;
  white-space:nowrap;
	overflow:hidden;
  text-overflow:ellipsis;
  font-size:12px;
  margin-top:4px;  
}

#detail .content .right .recs li a p:nth-child(3){
  color:red;
  font-size:15px
}
#detail .content .right .recs li a img{
  margin-left:10px
}

#detail .content .magnifying{
  width:400px;
	height:400px;
	border:1px solid #eee;
	position:absolute;
	top:4px;
	left:403px;
  background-size: 800px 800px
	/*background:url("http://127.0.0.1:3000/img/phone007.jpg") no-repeat;*/
	/* display:none */
}

#detail .content .center .x-color li.active,
#detail .content .center .choose-attr li.active,
#detail .content .center .choose-GB li.active{border-color:red;}

#detail .content .img_copy{
  width:400px;
  height:400px;
  position:absolute;
  top:0;
  left:0;
  /*background:pink;*/
  z-index:1;
}

#detail .content .img_index{
  width:200px;
  height:200px;
  position:absolute;
  top:0;
  left:0;
  background:#000;
  opacity:0.2;
  /* display:none; */
}
</style>

