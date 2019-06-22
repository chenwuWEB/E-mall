<template>
  <header>
		<div class="top">
			<div class="top-nav">
				<p>小电铺商城</p>
				<ul class="nav-left">
					<li><a href="">电铺首页</a></li>
					<li><a href="">我的电铺</a></li>
					<li><a href="">收藏夹</a></li>
					<li><a href="">用户中心</a></li>
					<li><a href="">反馈</a></li>
					<li><a href="">购物车</a></li>
				</ul>
				<ul class="nav-right">
					<li>187 7285 1559</li>
					<li><a href="">帮助</a></li>
					<li></li>
					<li></li>
					<li></li>
					<li><router-link to="/login" target="_black">登录</router-link></li>
					<li><router-link to="/login" target="_black">注册</router-link></li>
				</ul>
			</div>
		</div>
    <div id="logo-nav">
			<div class="logo">
				<router-link to="/index">
					<img src="http://127.0.0.1:3000/img/logo.png" alt="">
				</router-link>
			</div>
			<div class="clear">
				<input type="text" placeholder="请输入搜索内容" v-model="words">
				<button @click="search">搜索</button>
			</div>
		</div>
	</header>
  
</template>
<script>
  //抛出匿名模块对象
  export default {
    data(){
      return {
				words:""
      }
    },
		methods:{
			search(){
				this.$router.push(`/product/${this.words}/0`)
			}
		}

  }
</script>

<style scoped>
  header .top{
			width:100%;
			height:36px;
			background:#f5f5f5;
		}

		header .top-nav{
			width:1190px;
			height:36px;
			margin:0 auto;
		}

		header .top-nav p{
			font-size:14px;
			color:green;
			line-height:36px;
			float:left;
		}
		header .top-nav .nav-left{
			float:left;
			margin-left:40px;
			margin-right:80px
		}
		header .top-nav li{
			float:left;
			height:36px;
			line-height:36px;
			margin-right:10px;
		}
		header .top-nav .nav-left li+li:before{
			content:"|"
		}
		header .top-nav li a{
			margin-left:10px;
			color:rgb(88, 157, 179)
		}
		header .top-nav .nav-right li{
			margin-left:12px
		}
		header .top-nav .nav-right li:nth-child(1){
			background:url('http://127.0.0.1:3000/img/top_ico.png') no-repeat 0 -12px;
			padding-left:26px;
			color:orange
		}
		header .top-nav .nav-right li:nth-child(2){
			background:url('http://127.0.0.1:3000/img/top_ico.png') no-repeat 0 -43px;
			padding-left:26px;
		}
		header .top-nav .nav-right li:nth-child(3){
			background:url('http://127.0.0.1:3000/img/res_iconlist.png') no-repeat 0 0px;
			width:19px;
			height:16px;
			margin-top:11px
		}
		header .top-nav .nav-right li:nth-child(3):hover{
			background:url('http://127.0.0.1:3000/img/res_iconlist.png') no-repeat 0 -20px;
		}

		header .top-nav .nav-right li:nth-child(4){
			background:url('http://127.0.0.1:3000/img/res_iconlist.png') no-repeat -30px 0px;
			width:19px;
			height:16px;
			margin-top:11px
		}
		header .top-nav .nav-right li:nth-child(4):hover{
			background:url('http://127.0.0.1:3000/img/res_iconlist.png') no-repeat -30px -20px;
		}
		header .top-nav .nav-right li:nth-child(5){
			background:url('http://127.0.0.1:3000/img/res_iconlist.png') no-repeat -63px 0px;
			width:19px;
			height:16px;
			margin-top:11px
		}
		header .top-nav .nav-right li:nth-child(5):hover{
			background:url('http://127.0.0.1:3000/img/res_iconlist.png') no-repeat -63px -20px;
    }
    
    #logo-nav{
		width:1190px;
		height:108px;
		margin:0 auto;
	}
	#logo-nav .logo{
		float:left;
		margin-left:38px;
	}
	#logo-nav img{
		width:66px;
	}

	#logo-nav div:nth-child(2){
		float:right;
		margin-right:100px;
		margin-top:25px;
	}

	#logo-nav input{
		float: left;
		width:456px;
		height:24px;
		padding:6px;
		border:2px solid #0368e5;
		font-size:14px
	}

	#logo-nav button{
		float: left;
		background:#0368e5;
		border:2px solid #0368e5;
		width:66px;
		height:40px;
		margin-left:-5px;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px	
	}
	#logo-nav button:hover{
		cursor: pointer;
	}

</style>