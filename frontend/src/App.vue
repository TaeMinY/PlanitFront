<template>
  <v-app id="inspire">
    <transition :name="$store.state.transtionStatus">
      <router-view class="router-view" />
    </transition>
  </v-app>
</template>
<script>
export default {
  created() {
	q
    if (
      !localStorage.getItem("token") &&
      window.location.pathname != "/" &&
      window.location.pathname != "/account/signin" &&
      window.location.pathname != "/account/signup"
    ){
      this.$router.push("/");
    }
    if (localStorage.getItem("token")) {
		console.log("토큰인증")
      this.$store
        .dispatch("token", {
         token :localStorage.getItem("token")
        })
        .then(response => {
          if (response.data.result) {
          }else{
			  this.$router.push("/");
		  }
        })
        .catch(e => {
          console.log("에러");
        });
    }
  }
};
</script>

<style lang="scss">
*::-webkit-scrollbar {
  background: white;
  width: 5px;
  border-radius: 30px;
  height: 3px;
}
*::-webkit-scrollbar-thumb {
  background: #6c63ff;
  border-radius: 30px;
}
#app {
  font-family: "NanumSR", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
}
html {
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
	
@font-face {
  font-family: "NanumSR";
  src: url("./assets/font/NanumSquareR.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSB";
  src: url("./assets/font/NanumSquareB.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSRB";
  src: url("./assets/font/NanumSquareRoundB.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "ProductSansM";
  src: url("./assets/font/ProductSans-Black.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "ProductSansR";
  src: url("./assets/font/ProductSans-Medium.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSEB";
  src: url("./assets/font/NanumSquareEB.ttf") format("truetype");
  font-display: swap;
}
.bottom-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1);
  overflow-y: hidden !important;
}
.bottom-enter {
  transform: translateY(100%);
}
.bottom-enter-to {
  top: 0;
  transform: translateY(0vh);
}
.bottom-leave {
  transform: translateY(0vh);
}
.bottom-leave-to {
  position: absolute;
  top: 0;
  transform: translateY(-100%);
}
.left-enter {
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0px);
}
.left-leave {
  transform: translateX(0px);
}
.left-leave-to {
  transform: translateX(-100%);
}
.right-enter {
  transform: translateX(-100%);
}
.right-enter-to {
  transform: translateX(0px);
}
.right-leave {
  transform: translateX(0px);
}
.right-leave-to {
  transform: translateX(100%);
}
.top-enter {
  transform: translateY(-100%);
}
.top-enter-to {
  transform: translateY(0px);
}
.top-leave {
  transform: translateY(0px);
}
.top-leave-to {
  transform: translateY(100%);
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
.router-view {
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1);
  // overflow-y:hidden !important;
  width: 100%;
  height: 100%;
}
</style>
