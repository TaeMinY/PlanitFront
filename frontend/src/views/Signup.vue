<template>
  <div style="display:flex">
    <div class="input_div">
		<img src="../assets/arrow_back.svg" alt="화살표" width="25px" height="25px" class="arrow" @click="back()"/>
      <img src="../assets/logo.svg" alt="로고" class="title_logo" />
      <h1 class="signup_title">Get Started</h1>
      <div class="signup_text">
		<input type="text" class="input-username" placeholder="Username" v-model="username" v-on:keyup.enter="submit()"/>
        <input type="email" class="input-email" placeholder="Email" v-model="email" v-on:keyup.enter="submit()"/>
        <input type="password" class="input-password" placeholder="Password" v-model="password" v-on:keyup.enter="submit()" />
        <input type="password" class="input-password" placeholder="Confirm Password" v-model="password2" v-on:keyup.enter="submit()"/>
		                          <div class="error">{{error}}</div>
		<input type="submit" class="input-login" value="Signup" @click="submit()" />
      </div>
    </div>
    <div class="image_div">
      <img src="../assets/undraw_post_online_dkuk.svg" alt="로고" class="logo-2" />
    </div>
  </div>
</template>
<style lang="css">
.error{
		font-size:14px;
		color:red;
		margin:5px 0px;
}
.signup {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.background {
  width: 100%;
  height: 100%;
  display: flex;
}
.background-2 {
  background-color: #ffffff;
}
.background__left {
  flex: 1;
  background-color: #a1c8fe;
}
.background__right {
  flex: 1;
  background-color: #323565;
}
.signup__main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itmes: center;
}
.input_div {
  background-color: white;
  width: 40vw;
  height: 80vh;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px 0px 0px 30px;
	position:relative;
}
.signup_title {
  font-family: "ProductSansM";
  color: black;
  text-align: center;
  margin-top: 3%;
  font-size: 36px;
}
.input-username {
  min-width: 300px;
  width: 330px;
  height: 30px;
  border: 1px solid black;
  margin: 5px auto;
  padding: 5px 10px;
}
.input-username::placeholder {
  font-size: 14px;
}
.input-email {
  min-width: 300px;
  width: 330px;
  height: 30px;
  border: 1px solid black;
  margin: 5px auto;
  padding: 5px 10px;
}
.input-email::placeholder {
  font-size: 14px;
}
.input-password {
  min-width: 300px;
  width: 330px;
  height: 30px;
  margin: 5px auto;
  border: 1px solid black;
  padding: 5px 10px;
}
.input-password::placeholder {
  font-size: 14px;
}
.input-login {
  height: 30px;
  margin: 5px auto;
  border: 0;
  text-align: center;
  font-size: 14px;
  padding: 5px 10px;
  color: #ffffff;
  background-color: blue;
  min-width: 300px;
  width: 330px;
  box-sizing: content-box;
}
.image_div {
  width: 40vw;
  height: 80vh;
  background-color: #a1c8fe;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 30px 30px 0px;
}
.title_logo {
  width: 100px;
  height: 100px;
  text-align: center;
}
.logo-2 {
  text-align: center;
  width: 94%;
  height: 94%;
  min-width: 300px;
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
.arrow{
	padding: 8px;
	cursor: pointer;
	position:absolute;
	top:30px;
	left:30px;
}
.forgot__password {
  text-decoration: none;
  color: black;
  margin: 0px 3px;
  width: fit-content;
}
.signup__container {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 16px 0.2px #868e96;
  border-radius: 30px;
}
</style>
<script>
export default {
  name: "signup",
  logo: "https://kr.vuejs.org/images/logo.png",
  methods: {
    signupgo() {
      this.$router.push("/account/signup");
    },
	  back(){
			this.$store.state.transtionStatus ="bottom";
			this.$router.push("/account/signin");
		},
    submit() {
      this.$store
        .dispatch("signup", { email: this.email, password: this.password,password2:this.password2,profile_image:this.profile_image,username:this.username })
        .then(response => {
          if (response) {
            console.log(response);
            if(response.data.result == true){
				this.email = "",
				this.password = "",
				this.password2 = "",
				this.username = "",
									this.error ="",
				this.profile_image = "ss"
				this.$store.state.transtionStatus ="bottom";
				this.$router.push("/account/signin");
			}else{
				this.error = response.data.mes
			}
          }
        })
        .catch(e => {
          console.log("에러");
        });
    }
  },
  data() {
    return {
      email: "",
      password: "",
	  error:"",
	  username:"",
		password2:"",
		profile_image:"ss",
    };
  },
 
};
</script>
