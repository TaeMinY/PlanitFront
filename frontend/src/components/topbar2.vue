<template>
  <div class="topbar">
	<div class="topbar__logo">
		<img src="../assets/logo.svg" alt="로고" width="48px"/>
		<div class="topbar__logo__title">
			Planit
		</div>
	</div>
	<div class="topbar__center">
		<div @click="plans()">
			Plans
		</div>
		<div @click="community()">
			Community
		</div>
	</div>
	<div class="topbar__nav">
		<div class="nonecolor2" @click="logout()">로그아웃</div>
	</div>
  </div>
</template>
<script>
export default {
  name: 'topbar',
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
	  }
  }
}
</script>
<style scoped lang="scss">
	.nonecolor2{
		text-decoration: none;
		color:black;
		cursor: pointer;
	}
	.topbar{
		width:100%;
		min-height: 80px;
		background-color: white;
		z-index:99999;
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding:0 5%;
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
	.topbar__nav > .nonecolor{
		margin: 0 5px;
		color:white;
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
</style>
