<template>
  <div class="wrap">
    <Topbar></Topbar>
    <div class="wrap__wrap">
      <transition :name="$store.state.wrap">
        <router-view class="router__transtion"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/topbar2.vue";
export default {
  name: "Wrap",
  components: {
    Topbar
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.router__transtion {
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1);
}

.wrap {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f1f3f5;
}
.wrap__wrap {
  display: flex;
  width: 100%;
  height: 90%;
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
.right-leave-active,
.left-leave-active {
  position: absolute;
  top: 80px;
  left: 0;
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1);
  overflow-y: hidden !important;
}
</style>