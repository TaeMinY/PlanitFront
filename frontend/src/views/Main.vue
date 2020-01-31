<template>
  <div class="main">
	<Topbar></Topbar>
	<router-view></router-view>
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
</style>