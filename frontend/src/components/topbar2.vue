<template>
  <div class="topbar">
	<div class="topbar__logo">
		<img src="../assets/logo.svg" alt="로고" width="48px"/>
		<div class="topbar__logo__title">
			Planit
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
		height: 80px;
		background-color: transparent;
		z-index:99999;
		position:absolute;
		top:0;
		left:0;
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding:0 5%;
		box-sizing:border-box;
		
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
