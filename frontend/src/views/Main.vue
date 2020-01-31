<template>
  <div class="main">
	<Topbar></Topbar>
	 <div class="main__wrap">
		<div class="main__left__bar">대시보드</div>
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
	.main{
		display:flex;
		flex-direction: column;
	}
	.main__wrap{
		display:flex;
		height:100%;
	}
	.main__left__bar{
		width:350px;
	}
</style>