<template>
  <div class="main">
	<Topbar></Topbar>
	 <div class="main__wrap">
		<div class="main__left__bar">
			<div class="main__dashboards">
	
			</div>
			<div class="main__nofitications">
	
			</div>
		</div>
		<router-view></router-view>
	</div>
  </div>
</template>

<script>
import Topbar from "../components/topbar2.vue";
export default {
  name: "Main",
  components: {
    Topbar
  },
	created(){
		console.log(this.$store.state.token)	
	},
	methods:{
	}
};
</script>
<style scoped>
	*{
		box-sizing:border-box; 
	}
	.main{
		display:flex;
		flex-direction: column;
		box-sizing:border-box;
	}
	.main__wrap{
		display:flex;
		width:100%;
		height:100%;
		overflow-y:auto;
		box-sizing:border-box;
	}
	.main__left__bar{
		width:350px;
		background-color:#f1f3f5;
		display:flex;
		justify-content:center;
		align-items:center;
		padding:30px 30px;
		flex-direction:column;
		box-sizing:border-box;
	}
	.main__left__bar > * {
		margin:7px;
	}
	.main__dashboards{
		background-color:white;
		width:85%;
		height:40%;
		border-radius:20px;
	}
	.main__nofitications{
		background-color:white;
		width:85%;
		height:60%;
		border-radius:20px;
	}
</style>