<template>
  <div class="main">
		<Topbar></Topbar>
  </div>
</template>

<script>
import Topbar from "../components/topbar.vue";
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

</style>