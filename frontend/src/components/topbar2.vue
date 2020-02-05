<template>
  <div class="topbar">
	<div class="topbar__logo">
		<img src="../assets/logo.svg" alt="로고" width="48px"/>
		<div class="topbar__logo__title" @click="title()">
			Planit
		</div>
	</div>
	<div class="topbar__center">
		<div @click="plans()" :class="{topbar__selector:!$store.state.status.planner, topbar__selector__click:$store.state.status.planner}" >
			<img src="../assets/undraw_booking_33fn.svg" alt="calendar" class="topbar__selector__icon" />
			Planner
		</div>
		<div @click="community()" :class="{topbar__selector:!$store.state.status.community, topbar__selector__click:$store.state.status.community}"   >
			<img src="../assets/undraw_chat_1wo5.svg" alt="calendar" class="topbar__selector__icon" />
			Community
		</div>
	</div>
	<div class="topbar__nav">
		<div class="color2" @click="profile()" id="MyAccount" >My Account</div>
		<div class="nonecolor2" @click="logout()" id="SignOut" >Sign Out</div>
	</div>
  </div>
</template>
<script>
export default {
  name: 'topbar2',
  created(){
	
  },
	data(){
		return{
		}
	},
  computed: {
  },
  methods:{
	  logout(){
		  localStorage.removeItem('token');
		  this.$store.state.transtionStatus = "bottom"
		  this.$store.state.userdata = {};
		  this.$router.push("/");
	  },
	  plans(){
		  this.$store.state.wrap = "right"
		  this.$router.push("/wrap/main");
	  },
	  community(){
		  	 this.$store.state.wrap = "left"
		  this.$router.push("/wrap/community");
	  },
	  title(){
		  this.$store.state.wrap = "right"
		  this.$router.push("/wrap/main");
	  },
	  profile(){
		  this.$store.state.wrap = "left"
		  this.$router.push("/wrap/profile");
	  }
  }
}
</script>
<style scoped lang="scss">
	.place{
		background:#E3E1FF important;
	}
	.color2{
		text-decoration: none;
		color:black;
		cursor: pointer;
		border: 1px solid #6c63ff;
  		border-radius: 3px;
  		font-family: "ProductSansR";
		display: flex;
  		align-items: center;
  		justify-content: center;
  		height: 30px;
  		font-size: 14px;
  		padding: 2px 8px;
  		color: #ffffff;
  		background-color: #6c63ff;
  		box-sizing: content-box;
	}
	.nonecolor2{
		text-decoration: none;
		color:black;
		cursor: pointer;
		border: 1px solid #6c63ff;
  		border-radius: 3px;
  		font-family: "ProductSansR";
		display: flex;
  		align-items: center;
  		justify-content: center;
  		height: 30px;
  		font-size: 14px;
  		padding: 2px 8px;
  		color: #6c63ff;
  		background-color: #ffffff;
  		box-sizing: content-box;
	}
	.topbar{
		width:100%;
		min-height: 80px;
		background-color: white;
		z-index:99999;
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding:0 2% 0 5%;
		box-sizing:border-box;
		
	}
	.topbar__center{
		display:flex
	}
	.topbar__center > * {
		margin:0 20px;
		font-family: "ProductSansM";
	}
	.topbar__nav{
		display:flex;
		font-family: "NanumSR";
	}
	.topbar__nav > .nonecolor2{
		margin: 0 5px;
	}
	.topbar__logo{
		cursor: pointer;
		display:flex;
		font-family: "ProductSansM";
	}
	.topbar__logo > div{
		margin: auto 5px;
	}
	.topbar__logo__title{
		font-size:32px;
	}
	.topbar__selector{
		padding: 6px;
  		border-radius: 4px;
  		font-size:18px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content:center;
	}
	.topbar__selector__icon{
		width: 42px;
		margin-right:6px;
	}
	.topbar__selector:hover {
  		transition: 0.2s;
  		background-color: #E3E1FF;
	}
	.topbar__selector__click{
		padding: 6px;
  		border-radius: 4px;
  		font-size:18px;
		cursor: pointer;
		display: flex;
		align-items: center;
		background-color: #E3E1FF;
		justify-content:center;
	}
</style>
