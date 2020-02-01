<template>
  <div class="main">
	<Topbar></Topbar>
	 <div class="main__wrap">
		<div class="main__left__bar">
			<div class="main__dashboards">
				<div @click="calander()">Calander</div>
				<div @click="todo()">Todo</div>
			</div>
			<div class="main__nofitications">
	
			</div>
		</div>
		 <div style="width:100%; position:relative; background-color:#f1f3f5">
		 <transition name="fade">
			<router-view></router-view>
		</transition>
		</div>
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
		calander(){
			this.$router.push("/main")
		},
		todo(){
			this.$router.push("/main/todo");
		}
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
		height:90%;
	}
	.main__left__bar{
		width:350px;
		background-color:#f1f3f5;
		display:flex;
		justify-content:center;
		align-items:center;
		padding:30px 30px;
		flex-direction:column;
	}
	.main__left__bar > * {
		margin:7px;
	}
	.main__dashboards{
		background-color:white;
		width:85%;
		min-height:40%;
		border-radius:20px;
		display:flex;
		justify-content:space-around;
		align-items:flex-start;
		flex-direction:column;
		padding: 20%;
		box-sizing:border-box;
	}
	.main__dashboards > * {
		font-size:20px;
		font-family:ProductSansM;
	}
	.main__nofitications{
		background-color:white;
		width:85%;
		height:60%;
		border-radius:20px;
	}
	.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
  position: absolute;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
  transform: scale(1);
}
</style>