<template>
  <div class="community">
	<Topbar></Topbar>
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
		
	}
	.community__wrap{
		display:flex;
		width:100%;
		height:100%;
		overflow-y:auto;
		box-sizing:border-box;
	}
</style>