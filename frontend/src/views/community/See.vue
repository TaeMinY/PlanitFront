<template>
  <div class="see">
    <div class="see__title">
      <div>Community</div>
      <img
        @click="create()"
        alt="create"
        src="../../assets/playlist_add-24px.svg"
        width="42px"
        style="cursor: pointer;"
      />
    </div>
    <div class="see__text"></div>
  </div>
</template>

<script>
export default {
  name: "communityCreate",
  components: {},
  created() {},
  methods: {
    create() {
      this.$router.push("/wrap/community/create");
    }
  }
};
</script>
<style scoped>
.see {
  padding: 1.5% 3.5%;
  width: 100%;
  height: 100%;
	flex:1;
}
.see_text {
  width: 100%;
}
.see__title {
  font-size: 40px;
  min-height: 60px;
  font-style: normal;
  font-family: ProductSansM;
  color: #000000;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 0;
  margin-bottom: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
}
</style>