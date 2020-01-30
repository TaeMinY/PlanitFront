<template>
       <div style="display:flex">
                <div class="input_div">
						<img src="../assets/arrow_back.svg" alt="화살표" width="25px" height="25px" class="arrow" @click="back()"/>
                    <img src="../assets/logo.svg" alt="로고" class="title_logo" />
                    <h1 class="signin_title">Sign In</h1>
                    <div class="signin_text">
						
						
                        <input type="email" class="input-email" placeholder="Email" v-model="email"  />
                        <input type="password" class="input-password" placeholder="Password" v-model="password"/>
                        <div class="error">{{error}}</div>
                        <input type="submit" class="input-login" value="Login" @click="submit()"/>
                    </div>
					<div style=" display:flex; width:100%; margin: 10px auto 0px auto; justify-content:center">
                    	<div @click="signupgo()">Sign Up</div>
						<div class="forgot__password" style="margin-top: 16px;">Forgot password?</div>
					</div>
                </div>
                <div class="image_div">
                    <img src="../assets/undraw_authentication_fsn5.svg" alt="로고" class="logo-2" />
                </div>
	</div>
</template>
<script>
export default {
    name: 'signin',
	data(){
		return{
			email:'',
			password:'',
			error:''
		}
	},
	 methods:{
	  	signupgo(){
			this.$router.push("/account/signup")
	  	},
		back(){
			this.$store.state.transtionStatus ="bottom";
			this.$router.push("/");
		},
		submit(){
			 this.$store
				.dispatch("signin", {email:this.email,password:this.password})
				.then(response => {
					   if(response.data.result == true){
						   console.log("ddd");
				localStorage.setItem('token',  response.data.token);
				this.$store.state.userdata = response.data.userdata;
				this.email = "",
				this.password = "",
				this.error ="",
				this.$store.state.transtionStatus ="bottom";
				this.$router.push("/main");
				
			}else{
				this.error = response.data.mes
			}
				})
				.catch(err => {
					console.log(err);
				});
		}
  },
};
</script>

<style lang="css" scoped>
	.error{
		font-size:14px;
		color:red;
		margin:5px 0px;
	}
.signin {
    width: 100%;
    height: 100%;
	display:flex;
	justify-content:center;
	align-items:center;
}
.arrow{
	padding: 8px;
	cursor: pointer;
	position:absolute;
	top:30px;
	left:30px;
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
.signin__main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
	
.signin_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.input_div {
    background-color: white;
    width: 40vw;
    height: 80vh;
    vertical-align: middle;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
	border-radius: 30px 0px 0px 30px;
	position:relative;
}
.signin_title {
	font-family: "ProductSansM";
    color: black;
    text-align: center;
    margin-top: 3%;
    font-size: 36px;
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
	display:flex;
	justify-content:center;
	align-items:center;
	border-radius: 0px 30px 30px 0px;
}
.title_logo {
    width: 100px;
    height: 100px;
    text-align: center;
}
.logo-2 {
    width: 100%;
    height: 100%;
	min-width:300px;
    text-align: center;
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
	color:black;
	margin: 0px 3px;

}
.forgot__password{
	text-decoration:none;
	color:black;
	margin: 0px 3px;
	width:fit-content;
}
.signin__container {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 16px 0.2px #868E96;
    border-radius: 30px;
}
</style>
