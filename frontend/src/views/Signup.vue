<template>
  <div style="display:flex">
    <div class="input_div">
      <img
        src="../assets/arrow_back.svg"
        alt="화살표"
        width="25px"
        height="25px"
        class="arrow"
        @click="back()"
      />
      <!--<h1 class="signup_title">Get Started</h1>-->
      <label class="profile_container">
        <img
          id="image_section"
          src="../assets/undraw_social_ideas_e8rj.svg"
          alt
          width="100px"
          height="100px"
		  style="object-fit:cover"	 
        />
        <div class="overlay">Edit Profile</div>
        <input
          type="file"
          ref="profile"
          id="bin"
          accept="image/*"
          @change="myImage(this)"
          style="display:none"
        />
      </label>

      <div class="signup_text">
        <input
          type="text"
          class="input-username"
          placeholder="Username"
          v-model="username"
          v-on:keyup.enter="submit"
        />
        <input
          type="email"
          class="input-email"
          placeholder="Email"
          v-model="email"
          v-on:keyup.enter="submit"
        />
        <input
          type="password"
          class="input-password"
          placeholder="Password"
          v-model="password"
          v-on:keyup.enter="submit"
        />
        <input
          type="password"
          class="input-password"
          placeholder="Confirm Password"
          v-model="password2"
          v-on:keyup.enter="submit"
        />
        <div class="errorMes">{{errorMes}}</div>
        <input type="submit" class="input-login" value="Sign Up" @click="submit()" />
		 
      </div>
    </div>
    <div class="image_div">
      <img src="../assets/undraw_post_online_dkuk.svg" alt="로고" class="logo-2" />
    </div>
  </div>
</template>
<style lang="css">
#image_section {
  border-radius: 100%;
  background-color: #eaf3fe;
  cursor: pointer;
}
.errorMes {
  font-size: 14px;
  color: red;
  margin: 5px 0px;
  background-color: white;
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
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.signup_text > * {
  box-sizing: content-box !important;
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
  position: relative;
}
.signup_title {
  font-family: "ProductSansM";
  color: black;
  text-align: center;
  margin-top: 3%;
  font-size: 36px;
}
.input-username {
  border-radius: 3px;
  min-width: 300px;
  width: 330px;
  height: 30px;
  margin: 5px auto;
  border: 1px solid #adb5bd;
  padding: 5px 10px;
  font-family: "ProductSansR", "NanumSRB";
}
.input-username::placeholder {
  color: #adb5bd;
  font-size: 14px;
  font-family: "ProductSansR";
}
.input-email {
  border-radius: 3px;
  min-width: 300px;
  width: 330px;
  height: 30px;
  margin: 5px auto;
  border: 1px solid #adb5bd;
  padding: 5px 10px;
  font-family: "ProductSansR", "NanumSRB";
}
.input-email::placeholder {
  color: #adb5bd;
  font-size: 14px;
  font-family: "ProductSansR";
}
.input-password {
  border-radius: 3px;
  min-width: 300px;
  width: 330px;
  height: 30px;
  margin: 5px auto;
  border: 1px solid #adb5bd;
  padding: 5px 10px;
  font-family: "ProductSansR";
}
.input-password::placeholder {
  color: #adb5bd;
  font-size: 14px;
  font-family: "ProductSansR";
}
.input-login {
  border-radius: 3px;
  font-family: "ProductSansR";
  cursor: pointer;
  height: 30px;
  margin: 5px auto;
  border: 0;
  text-align: center;
  font-size: 14px;
  padding: 5px 10px;
  color: #ffffff;
  background-color: #6c63ff;
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
  width: 70%;
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
.arrow {
  padding: 8px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  left: 30px;
  box-sizing: content-box;
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
.profile_container:hover .overlay {
  opacity: 1;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 12px;
  font-family: "ProductSansR";
  padding: 4px;
  text-align: center;
}
</style>
<script>
export default {
  name: "signup",
  methods: {
    myImage(input) {
      if (document.getElementById("bin").files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          document.getElementById("image_section").src = e.target.result;
        };
        reader.readAsDataURL(document.getElementById("bin").files[0]);
      }
    },
    signupgo() {
      this.$router.push("/account/signup");
    },
    back() {
      this.$store.state.transtionStatus = "bottom";
      this.$router.push("/account/signin");
    },
	 
    submit() {
      if (document.getElementById("bin").files[0]) {
        this.$store
          .dispatch("signup", {
            email: this.email,
            password: this.password,
            password2: this.password2,
            profile_image: this.profile_image,
            username: this.username
          })
          .then(response => {
            if (response.data.result) {
              const fd = new FormData();
              fd.append("name", this.email);
              fd.append("bin", document.getElementById("bin").files[0]);
              this.$store.dispatch("profile", fd).then(response => {
                //받기
                if (response.data.result == true) {
                  console.log("프로필 받음");
                  (this.email = ""),
                    (this.password = ""),
                    (this.password2 = ""),
                    (this.username = ""),
                    (this.errorMes = ""),
                    (this.profile_image = "ss");
                  this.$store.state.transtionStatus = "bottom";
                  this.$router.push("/account/signin");
                } else {
                  this.errorMes = response.data.mes;
                }
              });
            } else {
              this.errorMes = response.data.mes;
            }
          })
          .catch(e => {
            console.log("에러");
          });
      } else {
        this.errorMes = "프로필 이미지를 선택해 주세요.";
      }
    }
  },
  data() {
    return {
      email: "",
      password: "",
      errorMes: " ",
      username: "",
      password2: ""
    };
  }
};
</script>
