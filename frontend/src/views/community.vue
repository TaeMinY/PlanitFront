<template>
  <div class="community">
    <div class="community__wrap">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  created() {},
  methods: {}
};
</script>
<style scoped>
.community {
  width: 100%;
  height: 100%;
}
.community__wrap {
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f1f3f5;
  position: relative;
  flex: 1 1;
}
.community__title {
  font-size: 40px;
  width: 100%;
  height: 60px;
  font-style: normal;
  font-family: ProductSansM;
  color: #000000;
  text-align: left;
  padding: 0;
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
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