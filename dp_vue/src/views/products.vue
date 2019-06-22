<template>
    <div>
    <!-- 引入header -->
    <my-header></my-header>
    <!-- 创建products模板 -->
    <div id="center">
			<div class="products">
				<ul class="clear">
					<li v-for="(elem,i) of list" :key="i">
						<router-link :to="`/detail/${elem.lid}`">
							<img :src="elem.img_url" alt="">
							<p>{{elem.title}}</p>
							<p>￥{{elem.price}}</p>
						</router-link>
					</li>
					<!-- <li>
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/phone002.jpg" alt="">
							<p>现货发货  Xiaomi/小米 Redmi Note 7 红米note7手机正品小金刚6</p>
							<p>￥1099</p>
						</a>
				</li>
				<li>
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/phone003.jpg" alt="">
							<p>Xiaomi/小米 小米手机5S小米5X 红米5Plus 指纹解锁千元以下手机</p>
							<p>￥545</p>
						</a>
				</li>
				<li>
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/phone004.jpg" alt="">
							<p>Xiaomi/小米 小米8SE全面屏手机小米8se全网通4G智能机5.88英寸屏</p>
							<p>￥1088</p>
						</a>
				</li>
				<li>
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/phone006.jpg" alt="">
							<p>Meizu/魅族 note8 全面屏6英寸4G全网通智能学生手机魅蓝note8</p>
							<p>￥879</p>
						</a>
				</li>
				<li>
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/phone007.jpg" alt="">
							<p>现货当天发 Xiaomi/小米 Redmi Note 7 红米note7手机正品小金刚6</p>
							<p>￥999</p>
						</a>
				</li>
				<li>
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/phone008.jpg" alt="">
							<p>新品Xiaomi/小米 小米8 青春版大屏全网通4G美颜拍照手机屏幕指纹</p>
							<p>￥1080</p>
						</a>
				</li> -->
				</ul>
			</div>
			<div class="limit clear">
					<ul class="clear">
						<li><router-link :to="`/product/${words}/${pno>0 ? parseInt(pno)-1 : parseInt(pno)}`">上一页</router-link></li>
						<li v-for="(elem,i) of count" :key="i" :class="{active:i==pno}"><router-link :to="`/product/${words}/${i}`">{{i+1}}</router-link></li>
						<!-- <li><a href="javascript:;">2</a></li>
						<li><a href="javascript:;">3</a></li>
						<li><a href="javascript:;">4</a></li>
						<li><a href="javascript:;">5</a></li> -->
						<li><router-link :to="`/product/${words}/${pno<count-1 ? parseInt(pno)+1 : parseInt(pno)}`">下一页</router-link></li>

					</ul>
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
		props:["words","pno"],
    data(){
        return{
					list:[],
					count:0
				}
    },
		methods:{
			load(){
				this.axios.get(
					"http://127.0.0.1:3000/products/list",
					{params:{words:this.words,pno:this.pno}}
				).then(res=>{
					if(res.data.code==-1){
						this.list=[]
					}else{
						this.list=res.data.data
						this.count=res.data.count
					}
					
				})
				console.log(this.pno,this.words)
			}
		},
		created(){
			this.load()
		},
		watch:{
			words(){
				this.load()
			},
			pno(){
				this.load()
			}
		},
    components:{
      myHeader,
      myFooter
    }
}
</script>
<style scoped>
    #center .products{
  width:1190px;
  margin:auto;
}

#center .products li{
  float:left;
  width:235px;
  height:300px;
}


#center .products li a{
  display:block;
}

#center .products li a img{
  width:235px
}

#center .products li a p:nth-child(2){
  color:#444;
  padding-left:4px;
  padding-right:4px;
  white-space:nowrap;
	overflow:hidden;
  text-overflow:ellipsis;
  margin-top:4px;
  font-size:13px
}

#center .products li a p:nth-child(3){
  color:red;
  text-align:center;
  margin-top:8px;
  font-size:12px
}

#center .limit{
	width: 1190px;
	margin:0 auto

}

.limit ul{
	float:right;
	margin-right:20px
}

.limit li{
	padding:4px;
	float: left;
	border:1px solid #909090;
	background:	#D0D0D0;
	width:20px;
	margin:2px;
	border-radius: 4px;
	text-align:center
}

.limit li:first-child,.limit li:last-child{
	width:50px
}

.limit li a{
	display:block;
	height:20px;
	color:#3399FF
}

.limit li.active{
	background:#33CCFF;
	color:#FFFFCC
}

</style>
