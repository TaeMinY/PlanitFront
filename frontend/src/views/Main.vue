<template>
  <div style="display:flex; width:100%;">
    <div class="main__left__bar">
      <div class="main__dashboards">
		<div class="dashboard__title">
			Dashboards	
		</div>
        <div @click="todo()" class="dashboard__item">
          <img src="../assets/list-24px.svg" alt="calendar" class="dashboard__icon" />
          Plans
        </div>
		<div @click="calendar()" class="dashboard__item">
          <img src="../assets/calendar_today-24px.svg" alt="calendar" class="dashboard__icon" />
          Calendar
        </div>
        <div @click="memo()" style="width:fit-content; text-align:left" class="dashboard__item">
          <img src="../assets/note-24px.svg" alt="calendar" class="dashboard__icon" />
          Memo
        </div>
      </div>
      <div class="main__nofitications">
			<img :src="'http://nulllove-rgobq.run.goorm.io/api/' + $store.state.userdata.email + '.png'" class="main__nofitications__img"/>
		  <div>안녕하세요, <span style="font-family: NanumSB;" >{{$store.state.userdata.username}}님!</span></div>
		  	<div style="word-break:keep-all; font-size: 24px; font-family:NanumSB;">환영합니다!</div>
		</div>
    </div>
    <div style="width:100%;height:100%; position:relative; background-color:#f1f3f5">
      <transition name="fade">
        <router-view></router-view>
      </transition>
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
	data(){
	return{
		imageurl:"http://nulllove-rgobq.run.goorm.io/"+$store.state.userdata.email+'.png'
	}	
	},
  created() {
    console.log(this.$store.state.token);
  },
  methods: {
	todo() {
	  console.log(this);
      this.$router.push("/wrap/main");
    },
    calendar() {
      this.$router.push("/wrap/main/calendar");
    },
    memo() {
      this.$router.push("/wrap/main/memo");
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.main {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.main__wrap {
  display: flex;
  width: 100%;
  height: 100%;
}
.main__left__bar {
  width: 350px;
  height: 100%;
  background-color: #f1f3f5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 30px;
  flex-direction: column;
}
.main__left__bar > * {
  margin: 7px;
}
	.main__nofitications>*{
		margin:10px 0px;
		font-family: NanumSR;
		font-size: 16px;
	}
	.main__nofitications__img{
		width:50px;
		height:50px;
		border-radius:100%;
	}
.main__dashboards {
  background-color: white;
  width: 85%;
  height: 30vh;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  padding: 5% 10% 10% 10%;
  box-sizing: border-box;
}
.main__dashboards > * {
  font-size: 18px;
  font-family: ProductSansM;
}
.main__nofitications {
	padding: 6px;
  background-color:white;
  width: 85%;
  height: 50vh;
  border-radius: 20px;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
}
.dashboard__title{
	color: black;
	font-size: 20px;
	margin-bottom: 12px;
}
.dashboard__item {
  padding: 4px;
  border-radius: 4px;
  font-size:18px;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard__item:hover {
  transition: 0.2s;
  background-color: #E3E1FF;
}
.dashboard__item.on {
  transition: 0.2s;
  background-color: #E3E1FF;
}
.dashboard__icon {
  margin-right: 8px;
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