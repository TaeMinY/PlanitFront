<template>
  <div class="profile">
    <div class="profile__title">
      <div>Profile</div>
    </div>
    <div class="profile__box">
      <img src="../../assets/arrow_back.svg" alt width="25px" class="arrow" @click="arrow_back"  />
	<img :src="'http://nulllove-rgobq.run.goorm.io/api/' + $store.state.userdata.email + '.png'" class="profile__image" style="object-fit: cover;"/>
	  <div class="profile__hello">안녕하세요, {{$store.state.userdata.username}}님!</div>
	  <div class="profile__email">{{$store.state.userdata.email}}</div>
	  <img src="../../assets/undraw_2020.svg" alt="2020" style="width:20%;margin-top:36px;"/>
		
		<div v-for="(value,index) in postdata" :key="index">
			<div class="profile__article__box">
				{{value.data.title}}
			</div>
	</div>
		
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
	  postdata: []
    };
  },
  components: {},
  created() {
    
	  this.$store
      .dispatch("FIND__MY__POST", {
        token: localStorage.getItem("token")
      })
      .then(response => {
        console.log("요청을 보냄");
        if (response.data.result == true) {
          this.postdata = response.data.userdata;
        } else {
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    arrow_back() {
      this.$store.state.wrap = "right";

      this.$router.push("/wrap/main");
    }
  }
};
</script>
<style scoped>
	.profile__image{
		width:120px;
		height:120px;
		border-radius:100%;
	}
.profile {
  padding: 1.5% 3.5%;
  width: 100%;
  height: 100%;
  flex: 1;
}
.profile__title {
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
.profile__box {
  display: flex;
	justify-content:center;
	align-items:center;
  flex-direction: column;
  width: 100%;
height:85%;
  min-height: 200px;
  margin-top: 24px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 40px;
  position: relative;
}
.arrow {
cursor:pointer;
  position: absolute;
  top: 35px;
  left: 30px;
}
.profile__hello{
	margin-top: 24px;
	font-family: "ProductSansM", "NanumSB";
	font-size: 28px;
}
.profile__email{
	font-family: "NanumSR";
	font-size: 18px;
}
</style>