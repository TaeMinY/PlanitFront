<template>
  <div class="signin">
    <div class="background">
      <div class="background__left"></div>
      <div class="background__right"></div>
    </div>
    <div class="main">
      <div class="account__container">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<style lang="css">
.main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.account {
  width: 100%;
  height: 100vh;
}
.background {
  width: 100%;
  height: 100%;
  display: flex;
}
.background__left {
  flex: 1;
  background-color: #eaf3fe;
}
.background__right {
  flex: 1;
  background-color: #eaf3fe; /*#323565;*/
}
.signup,
.find-password {
  font-size: 15px;
  color: #ffffff;
  text-decoration: none;
  text-decoration-line: none;
  text-align: left;
}
.signup {
  margin-top: 100px;
  color: black;
  margin: 0px 3px;
}
.forgot__password {
  text-decoration: none;
  color: black;
  margin: 0px 3px;
}
.account__container {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 16px 0.2px #868e96;
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  name: "signin",
  logo: "https://kr.vuejs.org/images/logo.png"
};
</script>
