<template>
<!-- 创建登录模板 -->
    <div id="parent">
		<div class="bg-home">
			<div class="cir"></div>
			<div class="cir1"></div>
			<div class="cir2"></div>
			<div class="lite1">
				<div class="dec1"></div>
				<div class="dec2"></div>	
			</div>
			<div class="lite2">
				<div class="dec3"></div>
			</div>
			<div class="lite3"></div>
			<div class="lite4"></div>
			<div class="net">
				<div class="net1"></div>
				<div class="net2"></div>
			</div>
		</div>
<!-- 		登录 -->
		<div class="login" id="login" v-show="open==1">
				<span id="sp1" :class="{red:/^\w{6,11}$/.test(uname)!=true,yellow:/^\w{6,11}$/.test(uname)==true}">{{login_name}}</span>
				<input id="user" type="text" placeholder="请输入用户名" v-model="uname">
				<span id="sp2" :class="{red:/^\d{6,12}$/.test(upwd)!=true,yellow:/^\d{6,12}$/.test(upwd)==true}">{{login_pwd}}</span>
				<input id="upwd" type="password" placeholder="请输入密码" v-model="upwd">
				<a id="log" href="javascript:;" @click="login_btn">登&nbsp;&nbsp;&nbsp;&nbsp;录</a>
		</div>
<!-- 		注册 -->
		<div id="group" v-show="open==2">
				<span :class="{red:/^\w{6,11}$/.test(name)!=true,yellow:/^\w{6,11}$/.test(name)==true}">{{group_name}}</span>
				<input type="text" placeholder="请输入用户名" v-model="name">
				<span :class="{red:/^\d{6,12}$/.test(pwd_1)!=true,yellow:/^\d{6,12}$/.test(pwd_1)==true}">{{group_pwd_1}}</span>
				<input type="password" placeholder="请输入密码" v-model="pwd_1">
				<span :class="{red:pwd_1!=pwd_2,yellow:pwd_1==pwd_2}">{{group_pwd_2}}</span>
				<input type="password" placeholder="请确认密码" v-model="pwd_2">
				<span :class="{red:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)!=true,yellow:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)==true}">{{group_email}}</span>
				<input type="text" placeholder="请输入邮箱" v-model="email">
				<span :class="{red:/^1[34578]\d{9}$/.test(phone)!=true,yellow:/^1[34578]\d{9}$/.test(phone)==true}">{{group_phone}}</span>
				<input type="text" placeholder="请输入手机号" v-model="phone">
				<a id="gro" href="javascript:;" @click="group_btn">注&nbsp;&nbsp;&nbsp;&nbsp;册</a>
		</div>
	
		<div class="btn">
			<a id="logina" href="javascript:;" @click="login">登录</a>
			<a id="groupa" href="javascript:;" @click="group">注册</a>
		</div>
	</div>
</template>
<script>
export default {
    data(){
        return{
			uname:"",
			upwd:"",
			name:"",
			pwd_1:"",
			pwd_2:"",
			email:"",
			phone:"",
			login_name:"",
			login_pwd:"",
			group_name:"",
			group_pwd_1:"",
			group_pwd_2:"",
			group_email:"",
			group_phone:"",
			open:1
        }
    },
	methods:{
		// 切换登录
		login(){
			this.open=1
		},
		// 切换注册
		group(){
			this.open=2
		},
		// 登录按钮
		login_btn(){
			this.axios.get(
				"http://127.0.0.1:3000/users/login",
				{params:{uname:this.uname,upwd:this.upwd}}
			).then(res=>{
				if(res.data.code==1){
					alert(res.data.msg)
					this.$router.push("/index")
				}else{
					alert("登录失败")
				}
			})
		},
		// 注册按钮
		group_btn(){
			this.axios.get(
				"http://127.0.0.1:3000/users/group",
				{params:{uname:this.name,upwd:this.pwd_1,email:this.email,phone:this.phone}}
			).then(res=>{
				if(res.data.code==1){
					alert(res.data.msg)
					this.$router.push("/index")
				}else if(res.data.code==0){
					alert(res.data.msg)
				}else if(res.data.code==2){
					alert(res.data.msg)
				}else{"异常错误，请确认后再试！"}
			})
		}

	},
	watch:{
		/* 登录界面用户名验证 */
		uname(){
			var reg=/^\w{6,11}$/
			if(this.uname.length>0){
				if(reg.test(this.uname)==true){
					this.login_name="用户名格式正确"
				}else{
					this.login_name="请输入正确格式用户名（用户名格式有误）"
				}	
			}else{
				this.login_name="用户名不可为空"
			}
		},
		// 登录界面密码验证
		upwd(){
			var reg=/^\d{6,12}$/
			if(this.upwd.length>0){
				if(reg.test(this.upwd)==true){
					this.login_pwd="用户密码格式正确"
				}else{
					this.login_pwd="请输入正确格式用户密码（用户密码格式有误）"
				}	
			}else{
				this.login_pwd="用户密码不可为空"
			}
		},
		// 注册界面用户名验证
		name(){
			var reg=/^\w{6,11}$/
			if(this.name.length>0){
				if(reg.test(this.name)==true){
					this.group_name="用户名格式正确"
				}else{
					this.group_name="请输入正确格式用户名（用户名格式有误）"
				}	
			}else{
				this.group_name="用户名不可为空"
			}
		},
		// 注册界面密码验证
		pwd_1(){
			var reg=/^\d{6,12}$/
			if(this.pwd_1.length>0){
				if(reg.test(this.pwd_1)==true){
					this.group_pwd_1="用户密码格式正确"
				}else{
					this.group_pwd_1="请输入正确格式用户密码（用户密码格式有误）"
				}	
			}else{
				this.group_pwd_1="用户密码不可为空"
			}
		},
		pwd_2(){
			if(this.pwd_2.length>0){
				if(this.pwd_1==this.pwd_2){
					this.group_pwd_2="用户密码验证完成"
				}else{
					this.group_pwd_2="请确认用户密码（用户密码前后不一致）"
				}	
			}else{
				this.group_pwd_2="用户密码验证不可为空"
			}
		},
		// 注册界面邮箱验证
		email(){
			var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
			if(this.email.length>0){
				if(reg.test(this.email)==true){
					this.group_email="用户邮箱格式正确"
				}else{
					this.group_email="请输入正确格式邮箱（邮箱格式有误）"
				}	
			}else{
				this.group_email="邮箱不可为空"
			}
		},

		// 注册界面电话验证
		phone(){
			var reg=/^1[34578]\d{9}$/
			if(this.phone.length>0){
				if(reg.test(this.phone)==true){
					this.group_phone="用户电话格式正确"
				}else{
					this.group_phone="请输入正确格式电话（电话格式有误）"
				}	
			}else{
				this.group_phone="电话不可为空"
			}
		},

	}
}
</script>
<style scoped>
#parent .login #sp1.red,#parent .login #sp2.red{color:red}
#parent .login #sp1.yellow,#parent .login #sp2.yellow{color:yellow}
#group span.red{color:red}
#group span.yellow{color:yellow}
#parent{
			width:100%;
			height:1080px;
			margin:0 auto;
			overflow:hidden}
		#parent .bg-home{
			background:url('http://127.0.0.1:3000/img/banner_bg.jpg');
			width: 1920px;
			height: 1080px;
			position:relative;
			top:50%;
			left:50%;
			margin:-540px 0 0 -960px;}
		#parent .cir{
			width:730px;
			height:730px;
			position:absolute;
			top:82px;
			left:0;
			right:0;
			background:url('http://127.0.0.1:3000/img/earth01.png');
			margin:auto;}

		#parent .login{
			position:absolute;
			width:330px;
			top:272px;
			left:0px;
			right:0px;
			margin:0px auto;
			box-sizing:border-box;}
		#parent .login [type]{
			display:block;
			width:330px;
			height:30px;
			margin-top:45px;
			background:#5ceaff;
			opacity: 0.4;
			padding:22px 8px;
			border:1px solid purple;
			box-sizing:border-box;
			font-size:18px;
			color:purple;
			border-radius:16px}
		#parent .login a{
			display:block;
			width:282px;
			height:112px;
			margin:30px auto;
			background:url('http://127.0.0.1:3000/img/spr_head.png');
			border:none;
			font-size:24px;
			color:#fff;
			opacity: 0.7;
			line-height:112px;
			text-align:center}
		
		#parent .login a:hover{opacity: 1;}
		#gro:hover{opacity: 1;}
		
		#parent .login #sp1{
			margin:20px 0 0 10px;
			display:block;
			position:absolute;
			font-size:8px;
			color:#fff}
		#parent .login #sp2{
			margin:20px 0 0 10px;
			display:block;
			position:absolute;
			font-size:8px;
			color:#fff}
		

		

		#parent .cir1{
			width:719px;
			height:719px;
			position:absolute;
			top:87px;
			left:0;
			right:0;
			background:url('http://127.0.0.1:3000/img/spr_bannerPathway.png') -2436px 0px;
			margin:auto;
			animation:a 30s linear infinite reverse;}
		#parent .cir2{
			width:648px;
			height:674px;
			position:absolute;
			top:108px;left:0;right:0;
			background:url('http://127.0.0.1:3000/img/spr_bannerPathway.png') -2436px -724px;
			margin:auto;
			animation:b 30s linear infinite reverse;}
		#parent .lite1{
			width:1128px;
			height:430px;
			background:url('http://127.0.0.1:3000/img/spr_bannerPathway.png') 0px -2075px;
			position:absolute;
			left:0;
			right:0;
			margin:192px auto;}
		#parent .lite2{
			width:1582px;
			height:583px;
			background:url('http://127.0.0.1:3000/img/spr_bannerPathway.png') 0px -1487px;
			position:absolute;
			left:0;
			right:0;
			margin:126px auto;}
		#parent .lite3{
			width:1772px;
			height:677px;
			background:url('http://127.0.0.1:3000/img/spr_bannerPathway.png') 0px -805px;
			position:absolute;
			left:0;
			right:0;
			margin:120px auto;}
		#parent .lite4{
			width:2431px;
			height:800px;
			background:url('http://127.0.0.1:3000/img/spr_bannerPathway.png') 0px 0px;
			position:absolute;
			left:-268px;
			right:0;
			margin:91px auto;}


		#parent .dec1{
			background:url('http://127.0.0.1:3000/img/spr_head.png') -156px -117px;
			width:40px;
			height:40px;
			top:70px;
			left:86px;
			position:absolute;}
		#parent .dec2{
			background:url('http://127.0.0.1:3000/img/spr_head.png') -97px -117px;
			width:54px;
			height:54px;
			top:112px;
			right:12px;
			position:absolute;}
		#parent .dec3{
			background:url('http://127.0.0.1:3000/img/spr_head.png') 0px -117px;
			width:92px;
			height:92px;
			bottom:12px;
			left:246px;
			position:absolute;}

		#parent .net{
			width:100%;
			height:100%;
			position:absolute;
			top:0;
			right:0;}
		#parent .net1{
			width:910px;
			height:514px;
			position:absolute;
			top:248px;
			left:-10px;
			background:url('http://127.0.0.1:3000/img/spr_bannerPathway.png') -925px -2510px;}
		#parent .net2{
			width:920px;
			height:515px;
			position:absolute;
			top:248px;
			right:10px;
			background:url('http://127.0.0.1:3000/img/spr_bannerPathway.png') 0px -2510px;}

		#parent .btn{position:absolute}
		#parent #group{
			position:absolute;
			width:330px;
			top:190px;
			left:0px;
			right:0px;
			margin:0px auto;
			box-sizing:border-box;
			/*display:none;*/
			}
		#group [type]{
			display:block;
			width:330px;
			height:30px;
			margin-top:35px;
			background:#5ceaff;
			opacity: 0.4;
			padding:22px 8px;
			border:1px solid purple;
			box-sizing:border-box;
			font-size:14px;
			color:purple;
			border-radius:16px}
		
		#group a{
			display:block;
			width:282px;
			height:112px;
			margin:15px auto;
			background:url('http://127.0.0.1:3000/img/spr_head.png');
			border:none;
			font-size:24px;
			color:#fff;
			opacity: 0.7;
			line-height:112px;
			text-align:center}
		#group span{
			margin:10px 0 0 10px;
			display:block;
			position:absolute;
			font-size:8px;
			color:#fff}


		#parent .btn{
			position:absolute;
			right:20px;
			margin-top:10px}
		#parent .btn a{
			display:block;
			width:60px;
			height:60px;
			border-radius:50%;
			line-height:60px;
			text-align:center;
			background:#333;
			opacity:0.6;
			color:#fff;
			margin:10px}

		@keyframes a{
			0%{transform:rotate(0deg)}
			100%{transform:rotate(360deg)}
		}
		@keyframes b{
			0%{transform:rotate(0deg)}
			100%{transform:rotate(-360deg)}
		}
</style>
