<template>
  <div id="app">
   <transition  :name="$store.state.transtionStatus">
    <router-view class="router-view"/>
   </transition >
  </div>
</template>

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
  font-family: 'NanumSR', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   width:100vw;
	 height:100vh;
	overflow-y:hidden;
}
	html{
	}
	body{
		margin: 0;
		padding: 0;
		box-sizing:border-box;
	}
@font-face {
    font-family: 'NanumSR';
    src: url('./assets/font/NanumSquareR.ttf') format('truetype');
	font-display: swap;
}
@font-face {
    font-family: 'NanumSRB';
    src: url('./assets/font/NanumSquareRoundB.ttf') format('truetype');
	font-display: swap;
}
@font-face {
    font-family: 'ProductSansM';
    src: url('./assets/font/ProductSans-Black.ttf') format('truetype');
	font-display: swap;
}
.bottom-leave-active {
	position: absolute;
	top: 0;
	left: 0;
	transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1);
	overflow-y:hidden !important;

}
.bottom-enter {  transform: translateY(100%);
}
.bottom-enter-to {
  top:0;
  transform: translateY(0vh);
}
.bottom-leave {
  transform: translateY(0vh);
}
.bottom-leave-to {
  position: absolute;
  top:0;
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
.router-view {
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1);
	// overflow-y:hidden !important;
	width: 100%;
	height: 100%;
}
</style>
