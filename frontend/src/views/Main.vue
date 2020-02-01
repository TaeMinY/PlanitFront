<template>
  <div class="main">
	<Topbar></Topbar>
	 <div class="main__wrap">
		<div class="main__left__bar">
			<div class="main__dashboards">
				<div @click="calendar()" class="dashboard__item">
					<img src="../assets/calendar_today-24px.svg" alt="calendar" class="dashboard__icon"/>
					Calendar
				</div>
				<div @click="todo()" class="dashboard__item">
					<img src="../assets/list-24px.svg" alt="calendar" class="dashboard__icon"/>
					Plans
				</div>
				<div @click="memo()" style="width:fit-content; text-align:left" class="dashboard__item">
					<img src="../assets/note-24px.svg" alt="calendar" class="dashboard__icon"/>
					Sticker Memo
				</div>
			</div>
			<div class="main__nofitications">
	
			</div>
		</div>
		 <div style="width:100%;height:100%; position:relative; background-color:#f1f3f5">
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
		calendar(){
			this.$router.push("/main")
		},
		todo(){
			this.$router.push("/main/todo");
		},
		memo(){
			this.$router.push("/main/memo")
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
		height:100%;
	}
	.main__left__bar{
		width:350px;
		height:100%;
		background-color:#f1f3f5;
		display:flex;
		justify-content:flex-start;
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
		height:30vh;
		border-radius:20px;
		display:flex;
		justify-content:space-around;
		align-items:flex-start;
		flex-direction:column;
		padding: 20% 10%;
		box-sizing:border-box;
	}
	.main__dashboards > * {
		font-size:18px;
		font-family:ProductSansM;
	}
	.main__nofitications{
		background-color:white;
		width:85%;
		height:50Vh;
		border-radius:20px;
	}
	.dashboard__item{
		cursor:pointer;
		display: flex; 
		align-items: center; 
		justify-content:center;
	}
	.dashboard__icon{
		margin-right: 8px;
		fill: red;
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