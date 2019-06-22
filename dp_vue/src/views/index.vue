<template>
  <div>
    <!-- 引入header组件 -->
    <my-header></my-header>
    <!-- 编写主体模板 -->
    		<div id="top">
			<table></table>
			<div class="top-box">
				<div class="adm">
					<a href="">
						<img src="http://127.0.0.1:3000/img/dailybes.png" alt="">
					</a>
				</div>
				<div class="pro">
					<ul class="clear">
						<li>
							<a href="">
								<img src="http://127.0.0.1:3000/img/dailybes001.jpg" alt="">
								<p>太阳神正品空气净化器 去甲醛pm2.5雾霾 家用空气净化</p>
								<p>¥1500.0</p>
							</a>
						</li>
						<li>
							<a href="">
								<img src="http://127.0.0.1:3000/img/dailybes002.jpg" alt="">
								<p>Hytera/海能达TC-700EX防爆电池 好易通780对讲机电池 BH-1601-EX</p>
								<p>¥5800.0</p>
							</a>
						</li>
						<li>
							<a href="">
								<img src="http://127.0.0.1:3000/img/dailybes003.jpg" alt="">
								<p>Kingston/金士顿骇客U盘HXS3 256G高速优盘USB3.1 五年质保包邮</p>
								<p>¥800.0</p>
              </a>
						</li>
						<li>
							<a href="">
								<img src="http://127.0.0.1:3000/img/dailybes004.jpg" alt="">
								<p>ce-link 高科技军工级绝密USB2GU盘密码设定无人开启自毁文件</p>
								<p>¥669.0</p>
							</a>
						</li>
						<li>
							<a href="">
								<img src="http://127.0.0.1:3000/img/dailybes005.jpg" alt="">
								<p>Dreamwave VENTURE无线便携对讲机可达3KM户外多功能蓝牙音响</p>
								<p>¥568.0</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div id="img-wrap">
			<div class="title">
				<p>区域销售
					<img src="http://127.0.0.1:3000/img/img-bg1.png" alt="">
				</p>
			</div>

			<div class="head">
				<ul class="head-img">
					<!-- <li class="active" data-toggle="img-1">上海</li>
					<li data-toggle="img-2">深圳</li>
					<li data-toggle="img-3">杭州</li>
					<li data-toggle="img-4">南京</li>
					<li data-toggle="img-5">大连</li>
					<li data-toggle="img-6">哈尔滨</li>
					<li data-toggle="img-7">成都</li>
					<li data-toggle="img-8">重庆</li>
					<li data-toggle="img-9">石家庄</li>
					<li data-toggle="img-10">山东</li>
					<li data-toggle="img-11">郑州</li> -->
						<li v-for="(elem,i) of area" :key="i" @click="area_li(i)" :class="{active:i===item}">{{elem}}</li>
				</ul>
			</div>
			<div class="content">
				<ul>
					<!-- <li class="active" data-toggle="img-1">
						<img src="http://127.0.0.1:3000/img/shanghai.jpg" alt="">
					</li>
					<li data-toggle="img-2">
						<img src="http://127.0.0.1:3000/img/shenzhen.jpg" alt="">
					</li>
					<li data-toggle="img-3">
						<img src="http://127.0.0.1:3000/img/hangzhou.jpg" alt="">
					</li>
					<li data-toggle="img-4">
						<img src="http://127.0.0.1:3000/img/nanjing.jpg" alt="">
					</li>
					<li data-toggle="img-5">
						<img src="http://127.0.0.1:3000/img/dalian.jpg" alt="">
					</li>
					<li data-toggle="img-6">
						<img src="http://127.0.0.1:3000/img/harbin.jpg" alt="">
					</li>
					<li data-toggle="img-7">
						<img src="http://127.0.0.1:3000/img/chengdu.jpg" alt="">
					</li>
					<li data-toggle="img-8">
						<img src="http://127.0.0.1:3000/img/chongqing.jpg" alt="">
					</li>
					<li data-toggle="img-9">
						<img src="http://127.0.0.1:3000/img/shijiazhuang.jpg" alt="">
					</li>
					<li data-toggle="img-10">
						<img src="http://127.0.0.1:3000/img/jinan.jpg" alt="">
					</li>
					<li data-toggle="img-11">
						<img src="http://127.0.0.1:3000/img/zhengzhou.jpg" alt="">
					</li> -->
					<li v-for="(elem,i) of src_img" :key="i" :class="{active:i===item}">
						<img :src="elem" alt="">
					</li>
				</ul>
			</div>
		</div>
		<div id="content">
			<!-- 手机专区 -->
			<div class="floor clear">
				<p>||&nbsp;1F&nbsp;&nbsp;&nbsp;手机专区</p>
				<div>
					<div class="left">
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/phone-bg.png" alt="">
						</a>
						<div>
							<table></table>
							<ul class="clear">
								<li><a href="JavaScript:;">小米6</a></li>
								<li><a href="JavaScript:;">荣耀9</a></li>
								<li><a href="JavaScript:;">Mate9</a></li>
								<li><a href="JavaScript:;">iphone 7p</a></li>
								<li><a href="JavaScript:;">iphone 7</a></li>
								<li><a href="JavaScript:;">Galaxy S8+</a></li>
							</ul>
						</div>
					</div>
					<div class="center">
						<ul class="clear">
							<li>
								<router-link to="/detail/17">
									<img src="http://127.0.0.1:3000/img/phone001.jpg" alt="">
									<p>Xiaomi/小米 6X新品手机双摄智能骁龙660处理器时尚拍照全屏手机</p>
									<p>￥999</p>
								</router-link>
							</li>
							<li>
									<router-link to="/detail/29">
										<img src="http://127.0.0.1:3000/img/phone002.jpg" alt="">
										<p>现货发货  Xiaomi/小米 Redmi Note 7 红米note7手机正品小金刚6</p>
										<p>￥1099</p>
									</router-link>
							</li>
							<li>
									<router-link to="/detail/41">
										<img src="http://127.0.0.1:3000/img/phone003.jpg" alt="">
										<p>Xiaomi/小米 小米手机5S小米5X 红米5Plus 指纹解锁千元以下手机</p>
										<p>￥545</p>
									</router-link>
							</li>
							<li>
									<router-link to="/detail/45">
										<img src="http://127.0.0.1:3000/img/phone004.jpg" alt="">
										<p>Xiaomi/小米 小米8SE全面屏手机小米8se全网通4G智能机5.88英寸屏</p>
										<p>￥1088</p>
									</router-link>
							</li>
							<li>
									<router-link to="/detail/53">
										<img src="http://127.0.0.1:3000/img/phone005.jpg" alt="">
										<p>现货急速发 Xiaomi/小米 Redmi Note 7 红米note7手机正品小金刚6</p>
										<p>￥1090</p>
									</router-link>
							</li>
							<li>
									<router-link to="/detail/65">
										<img src="http://127.0.0.1:3000/img/phone006.jpg" alt="">
										<p>Meizu/魅族 note8 全面屏6英寸4G全网通智能学生手机魅蓝note8</p>
										<p>￥879</p>
									</router-link>
							</li>
							<li>
									<router-link to="/detail/1">
										<img src="http://127.0.0.1:3000/img/phone007.jpg" alt="">
										<p>现货当天发 Xiaomi/小米 Redmi Note 7 红米note7手机正品小金刚6</p>
										<p>￥999</p>
									</router-link>
							</li>
							<li>
									<router-link to="/detail/69">
										<img src="http://127.0.0.1:3000/img/phone008.jpg" alt="">
										<p>新品Xiaomi/小米 小米8 青春版大屏全网通4G美颜拍照手机屏幕指纹</p>
										<p>￥1080</p>
									</router-link>
							</li>
						</ul>
					</div>
					<div class="right">
						<a href="">
							<img src="http://127.0.0.1:3000/img/phone-right1.png" alt="">
						</a>
						<a href="">
							<img src="http://127.0.0.1:3000/img/phone-right2.jpg" alt="">
						</a>
					</div>
				</div>
			</div>
			<!-- 游戏设备 -->
			<div class="floor clear">
				<p>||&nbsp;2F&nbsp;&nbsp;&nbsp;游戏设备</p>
				<div>
					<div class="left">
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/game-bg.jpg" alt="">
						</a>
						<div>
							<table></table>
							<ul class="clear">
								<li><a href="JavaScript:;">游戏鼠标</a></li>
								<li><a href="JavaScript:;">机械键盘</a></li>
								<li><a href="JavaScript:;">索尼ps4</a></li>
								<li><a href="JavaScript:;">Switch</a></li>
								<li><a href="JavaScript:;">XBOX</a></li>
								<li><a href="JavaScript:;">VR眼镜</a></li>
							</ul>
						</div>
					</div>
					<div class="center">
						<ul>
							<li>
								<a href="JavaScript:;">
									<img src="http://127.0.0.1:3000/img/game001.jpg" alt="">
									<p>任天堂Nintendo Switch NX NS Joy-Con 左右手柄 双手柄红蓝色</p>
									<p>￥520</p>
								</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/game002.jpg" alt="">
										<p>郑州实体 罗技/Logitech G903有线/无线双模式游戏吃鸡鼠标 RGB光</p>
										<p>￥699</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/game003.jpg" alt="">
										<p>任天堂 Switch nx NS Joy-Con左右手柄 双手柄红蓝灰色奥德赛红色</p>
										<p>￥855</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/game001.jpg" alt="">
										<p>任天堂Nintendo Switch NX NS Joy-Con 左右手柄 双手柄红蓝灰色</p>
										<p>￥515</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/game004.jpg" alt="">
										<p>QPAD 8K Laser 激光电竞鼠标, 7键可编程, 自定义灯光,人体工学款</p>
										<p>￥599</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/game005.jpg" alt="">
										<p>樱桃G80-3000LXCEU-0 机械键盘(白色茶轴3000)</p>
										<p>￥669</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/game006.jpg" alt="">
										<p>罗技赛钛客 saitek Flight Throttle Quadrant专用轴杆仿真控制器</p>
										<p>￥649</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/game007.jpg" alt="">
										<p>Oculus Rift CV1 VR虚拟现实头盔手柄无线Oculus Touch控制器</p>
										<p>￥2199</p>
									</a>
							</li>
						</ul>
					</div>
					<div class="right">
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/game-right1.jpg" alt="">
						</a>
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/game-right2.jpg" alt="">
						</a>
					</div>
				</div>
			</div>
			<!-- 电脑专区 -->
			<div class="floor clear">
				<p>||&nbsp;3F&nbsp;&nbsp;&nbsp;电脑主机</p>
				<div>
					<div class="left">
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/comput-bg.jpg" alt="">
						</a>
						<div>
							<table></table>
							<ul class="clear">
								<li><a href="JavaScript:;">联想笔记本</a></li>
								<li><a href="JavaScript:;">Surface</a></li>
								<li><a href="JavaScript:;">Macbook</a></li>
								<li><a href="JavaScript:;">mod定制</a></li>
								<li><a href="JavaScript:;">水冷主机</a></li>
								<li><a href="JavaScript:;">iPad</a></li>
							</ul>
						</div>
					</div>
					<div class="center">
						<ul>
							<li>
								<a href="JavaScript:;">
									<img src="http://127.0.0.1:3000/img/comput001.jpg" alt="">
									<p>➡️嘉莱宝超薄一体机电脑独显网吧游戏型家用办公台式主机全套</p>
									<p>￥1998</p>
								</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/comput002.jpg" alt="">
										<p>全新15.6英寸酷睿I7高清笔记本电脑轻薄便携游戏本学生商务办公</p>
										<p>￥1728</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/comput003.jpg" alt="">
										<p>嘉莱宝一体机电脑四核i5家用办公独显游戏吃鸡绝地大逃亡台式整机</p>
										<p>￥4980</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/comput004.jpg" alt="">
										<p>嘉莱宝一体机电脑四核i5独显游戏吃鸡绝地大逃亡台式整机双硬盘</p>
										<p>￥5388</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/comput005.jpg" alt="">
										<p>恩腾32/42寸卧式查询机/落地式一体机/商场导购机/红外电容触控机</p>
										<p>￥2000</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/comput006.jpg" alt="">
										<p>现货HP/惠普Elite x2 1011 G1 11.6寸二合一笔记本平板电脑M-5Y71</p>
										<p>￥2150</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/comput007.jpg" alt="">
										<p>预定惠普/HP Folio 1020 G1 12.5寸笔记本电脑M5Y71 8G 256G固态</p>
										<p>￥2750</p>
									</a>
							</li>
							<li>
									<a href="JavaScript:;">
										<img src="http://127.0.0.1:3000/img/comput008.jpg" alt="">
										<p>特价Lenovo/联想 YT3-X90F WIFI 32GB投影仪平板电脑2GB内存运行</p>
										<p>￥1699</p>
									</a>
							</li>
						</ul>
					</div>
					<div class="right">
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/comput-right1.jpg" alt="">
						</a>
						<a href="JavaScript:;">
							<img src="http://127.0.0.1:3000/img/comput-right2.jpg" alt="">
						</a>
					</div>
				</div>
			</div>
		</div>
    <!-- 引入footer组件 -->
    <my-footer></my-footer>
  </div>     
      
</template>
<script>
 
  import myHeader from "@/components/header.vue"
  import myFooter from "@/components/footer.vue"
import { setInterval } from 'timers';
  export default {
    data(){
      return {
        area:["上海","深圳","杭州","南京","大连","哈尔滨","成都","重庆","石家庄","山东","郑州"],
				src_img:["http://127.0.0.1:3000/img/shanghai.jpg",
				"http://127.0.0.1:3000/img/shenzhen.jpg",
				"http://127.0.0.1:3000/img/hangzhou.jpg",
				"http://127.0.0.1:3000/img/nanjing.jpg",
				"http://127.0.0.1:3000/img/dalian.jpg",
				"http://127.0.0.1:3000/img/harbin.jpg",
				"http://127.0.0.1:3000/img/chengdu.jpg",
				"http://127.0.0.1:3000/img/chongqing.jpg",
				"http://127.0.0.1:3000/img/shijiazhuang.jpg",
				"http://127.0.0.1:3000/img/jinan.jpg",
				"http://127.0.0.1:3000/img/zhengzhou.jpg"],
				item:0
			}
		},
		methods:{
			area_li(i){
				this.item=i
			},
			add(){
					if(this.item<10){
					this.item++
				}else if(this.item>=10){
					this.item=0
				}
			}
		},
    created(){
     /* this.axios.get(
        "http://localhost:3000/index"
      ).then(res=>{
       
			})*/
			setInterval(()=>{
				this.add()
			},3000)
		},
		watch:{
		},
    components:{
      myHeader,
      myFooter
    }
  }
</script>

<style scoped>
  #top{
		width:100%;
		height:306px;
		background:#ebeffa;
	}

	#top .top-box{
		width:1190px;
		height:270px;
		margin:6px auto;
	}
	#top .top-box .adm{
		float:left;
	}
	#top .top-box .pro{
		float: left;
	}
	#top .top-box .pro a{
		display:block;
		float:left;
		height:270px;
		background:#fff;
	}
	#top .top-box .pro img{
		height:198px;
	}
	#top .top-box .pro p{
		width:198px;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		font-size:14px;
		text-align:center;
		margin-top:4px;
		color:#000;
	}
	#top .top-box .pro p:nth-child(3){
		color:red
	}
	#top .top-box .pro p:nth-child(2){
		font-size:10px;
		width:180px;
		color:#777
	}
	#top .top-box .pro li{
		float:left;
	}

	#img-wrap{
		height:560px
	}

	#img-wrap .title{
		width:1190px;
		height:41px;
		background:url('http://127.0.0.1:3000/img/img-bg.png') no-repeat 0 5px;
		margin:0 auto;
	}
	#img-wrap .title p{
		color:#444;
		width:150px;
		text-align:center;
		line-height:50px;
		background:#e7e7e7;
		margin:auto;
		position: relative;
		border-left:24px solid #fff;
		border-right:24px solid #fff;
		font-family: Roboto, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Microsoft YaHei";
		
	}
	#img-wrap .title img{
		position:absolute;
		top:40px;
		left:66px
	}

	#img-wrap .head{
		margin-top:35px
	}
	#img-wrap .head .head-img{
		width:1190px;
		height:108px;
		display:flex;
		margin:auto
	}
	#img-wrap .head .head-img li{
		padding: 25px 0 23px;
    margin: 0 34px;
    font-size: 17px;
		height:65px;
		color:#999999;
		cursor: pointer;
		font-family: Roboto, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Microsoft YaHei";
	}

	#img-wrap .head .head-img li.active::after{
		content: "";
		display:block;
		border-top:2px solid #000;
		margin-top:4px
	}
	#img-wrap .head .head-img li.active{
		color:#000;
	}
	#img-wrap .content ul{
		width:1190px;
		margin:auto
	}
	#img-wrap .content li{
		position: absolute;
		opacity:0;
		transition: 1.5s ;
	}

	#img-wrap .content li.active{
		opacity:1;
	}

	#content .floor{
		margin:0 auto;
		width:1190px;
		margin-bottom:26px;
	}

	#content .floor p{
		margin-bottom:12px;
		font-family: Roboto, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Microsoft YaHei";
		color:#658bf6;
    font-size:18px;
    text-align:left;
	}

	#content .floor .left{
		float:left;
		height:500px;
		width:223px;
		background:#e7e7e7;
	}

	#content .floor .left a:nth-child(1){
		display:block
	}
	#content .floor .left div{
		width:223px;
		/*background:#e7e7e7;*/
	}

	#content .floor .left ul{
		margin:20px 0 0 20px;
	}

	#content .floor .left li{
		float:left;
		height:30px;
		width:80px;
		font-size:14px
	}
	#content .floor .left a{
		color:#777
	}

	#content .floor .center{
		float:left;
		width:744px;
		height:500px;
	}

	#content .floor .center li{
		width:186px;
		height:250px;
		border:1px solid #e5e5e5;
		float:left;
		box-sizing:border-box;
		overflow: hidden;
	}

	#content .floor .center img{
		width:185px;
		height:196px;
	}

	#content .floor .center p:nth-child(2){
		width:135px;
		color:#999;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		font-size:12px;
		margin:0 auto
	}

	#content .floor .center p:nth-child(3){
		width:135px;
		color:red;
		margin:0 auto;
		margin-top:10px;
		text-align:center;
		font-size:16px
	}

	#content .floor .right{
		width:223px;
		height:500px;
		float: left;
	}

	#content .floor .right a{
		display:block;
		border:1px solid #e5e5e5;
		box-sizing: border-box;
		overflow: hidden;
	}
	#content .floor .right a:nth-child(2){
		border-top:none
	}
</style>