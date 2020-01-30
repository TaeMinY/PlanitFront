<template>
  <div class="landing">
    <div class="landing__animation">
    <Topbar class="topbar"></Topbar>

		<div class="landing__title">
        <h1>Planit</h1>
        <div
          style="minwidth:300px;width:440px; text-align:start;font-family:NanumSR; line-height:24px;">
			새해 목표, 이젠 "함께" 달성해 보세요! </br>
			Planit - 플래닛은 나의 새해 목표를 다른 사람들과 공유하고, 함께 달성해 나가며 동기를 얻을 수 있는 서비스입니다.</div>
        <div class="landing__button" @click="start()">
          <span>시작하기</span>
        </div>
      </div>
      <div class="landing__animation__big__box"></div>
      <div class="landing__animation__smail__box">
        <div class="landing__animation__phrase"></div>
      </div>
		 <div class="landing__triangle"></div>
    </div>
	<div class="wrap1">
        <img src="../assets/calendar.svg" alt="사진" width="25%" style="min-width:300px" />
        <div class="planner">
            <div class="planner__title">강력한 플래너 기능 제공</div>
            <div style="margin: 5% 0px 3% 0px;" class="planner__text">단순한 "플래너 기능"만을 제공하는 서비스는 이제 지겹습니다. </div>
            <div class="planner__text">플래닛에서는 사용자의 체계적인 새해 목표 달성을 위해,<br>
				<span style="font-family:NanumSB; ">캘린더/플래너/리마인더/스티커</span> 메모 등 다양하고 강력한 기능들을 한번에 제공합니다.</div>
        </div>
    </div>
	<div class="wrap2">
		  <div class="community">
            <div class="community__title">함께 달성하는 새해 목표</div>
            <div style="margin: 5% 0px 3% 0px;" class="community__text">혼자서는 어려운 일이라도, 다른 사람들과 힘을 합치면 쉽게 달성할 수 있죠! </div>
            <div class="community__text">플래닛에서는 새해 목표를 작성하고, <span style="font-family:NanumSB; ">다른 사람들과 공유</span>하며 <span style="font-family:NanumSB; ">서로를 응원</span>할 수 있습니다.<br>
				나의 노력을 꾸준히 기록하고, 목표 달성을 자랑해 보세요!
			</div>
        </div>
        <img src="../assets/community.svg" alt="사진" width="25%" style="min-width:300px"/>
    </div>
	<div class="wrap3">
		<div class="started_title">2020년 새해 목표, 플래닛에서 시작해 보세요</div>
        <img src="../assets/started.svg" alt="사진" width="25%" style="min-width:300px"/>
        <div class="started__button" @click="start()">
          <span>시작하기</span>
        </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/topbar.vue";
export default {
  name: "landing",
  components: {
    Topbar
  },
	methods:{
		start(){
		this.$store.state.transtionStatus = "bottom";
			this.$router.push("/account/signin");
		}
	}
};
</script>
<style >
* {
  overflow-x: hidden !important;
}
.wrap1{
    width:100%; height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}
.wrap2{
    width:100%; height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}
.wrap3{
    width:100%; height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
	flex-direction:column;
}
	@media(max-width:768px){
		.wrap1,.wrap2,.wrap3{	
			flex-direction:column;
		}
	}
.planner{
	text-align:left;
	max-width:35%;
	min-width:300px;
	word-break:break-all;
}
.community{
	text-align:left;
	max-width:35%;
	min-width:300px;
	word-break:break-all;
}

.wrap1 > div{
	margin: 4% 3% 0 7%;
}
.wrap2 > div{
	margin: 0 7% 0 3%;
}
.planner__title{
  font-size:36px;
  font-family: "NanumSEB";
}
.planner__text{
		font-family: "NanumSR";
	font-size:18px;
}
.community__title{
  font-size:36px;
  font-family: "NanumSEB";
}
.started_title{
  font-size:36px;
  font-family: "NanumSEB";	
  margin-bottom:5%;
}
.community__text{
		font-family: "NanumSR";
	font-size:18px;
}
.landing__triangle {
  width: 300px;
  height: 300px;
  opacity: 0.6;
  animation-duration: 1s;
  animation-name: triangle;
  animation-fill-mode: forwards;
  animation-delay: 0.2s;
  animation-timing-function: cubic-bezier(0.48, 1.32, 1, 1);
  background-image: url("../assets/arrow_round.svg");
  background-repeat: no-repeat;
  position: absolute;
  top: 60vh;
    left:5%;
  z-index: -1;
}
@keyframes triangle {
  0% {
    left:5%;
  }
  100% {
    left:8%;
  }
}
.topbar {
  animation-duration: 1s;
  animation-name: topbar;
  animation-fill-mode: forwards;
  animation-delay: 0s;
  animation-timing-function: cubic-bezier(0.48, 1.32, 1, 1);
  opacity: 0;
}
@keyframes topbar {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.landing {
    overflow-x: hidden;
	overflow-y: auto;
}
.landing__animation {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1000;
	    overflow-y: hidden;
}
.landing__title {
  width: 70%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 13%;
  font-family: "ProductSansM";
  animation-duration: 1s;
  animation-name: title;
  animation-fill-mode: forwards;
  animation-delay: 0s;
  animation-timing-function: ease;
  position: relative;
  left: -60px;
  opacity: 0;
}
@keyframes title {
  0% {
    left: -60px;
    opacity: 0;
  }
  100% {
    left: 0px;
    opacity: 1;
  }
}
h1 {
  font-size: 56px;
  color: #261d57;
  font-family: "ProductSansM";
  z-index: 10000;
}
.landing__animation__big__box {
  background-color: #6c63ff;
  width: 40%;
  height: 85vh;
  border-radius: 40px;
  transform: rotate(30deg);
  position: absolute;
  top: -0vh;
  right: -5vw;
  animation-duration: 1.2s;
  animation-name: bigbox;
  animation-fill-mode: forwards;
  animation-delay: 0s;
  animation-timing-function: ease;
  overflow: hidden !important;
}
.landing__animation__smail__box {
  background-color: #f8d547;
  width: 0%;
  height: 55vh;
  border-radius: 40px;
  transform: rotate(32deg);
  position: absolute;
  top: 32vh;
  right: 13vw;
  overflow: hidden;
  animation-duration: 0.5s;
  animation-name: smailbox;
  animation-fill-mode: forwards;
  animation-delay: 0.6s;
  animation-timing-function: cubic-bezier(0.48, 1.32, 1, 1);
}
.landing__button {
  width: 150px;
  height: 45px;
  border-radius: 30px;
  box-sizing: border-box;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "ProductSansM";
  background-color: #6c63ff;
  color: white;
  font-family: NanumSR;
  cursor: pointer;
}
.started__button{
  width: 180px;
  height: 47px;
  border-radius: 30px;
  box-sizing: border-box;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "NanumSB";
  background-color: #6c63ff;
  color: white;
  font-family: NanumSB;
  cursor: pointer;
	}
.landing__animation__phrase {
  position: absolute;
  width: 250px;
  height: 250px;
  background-color: #da166f;
  border-radius: 100%;
  bottom: -65px;
  left: -85px;
  animation-duration: 1s;
  animation-name: phrase;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}
.landing__animation__bar {
  position: absolute;
  width: 80px;
  height: 5px;
  background-color: gray;
  border-radius: 20px;
  left: 97px;
  bottom: 10px;
  animation-duration: 1s;
  animation-name: bar;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  animation-timing-function: cubic-bezier(0.48, 1.32, 1, 1);
}
@keyframes bigbox {
  0% {
    top: -80vh;
    right: -30vw;
  }
  100% {
    top: -20vh;
    right: -5vw;
  }
}
@keyframes smailbox {
  0% {
    width: 0%;
  }
  100% {
    width: 15%;
  }
}
@keyframes phrase {
  0% {
    bottom: -65px;
    left: -65px;
  }
  100% {
    bottom: 370px;
    left: 95px;
  }
}
</style>