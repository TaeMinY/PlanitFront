<template>
  <div class="community">
	 <div class="community__wrap">
		test
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
	},
	methods:{
	}
};
</script>
<style scoped>
	.community{
		width:100%;
		height:100%;
	}
	.community__wrap{
		display:flex;
		width:100%;
		height:100%;
		box-sizing:border-box;
		background-color:#f1f3f5;
		 	}
</style>