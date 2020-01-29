<template>
    <div class="signin">
        <div class="background">
            <div class="background__left"></div>
            <div class="background__right"></div>
        </div>
        <div class="signin__main">
			<div class="signin__container">
			
                <div class="input_div">
                    <img src="https://kr.vuejs.org/images/logo.png" alt="로고" class="title_logo" />
                    <h1 class="signin_title">Welcome to Planit</h1>
                    <div class="signin_text">
                        <input type="email" class="input-email" placeholder="Email" />
                        <input type="password" class="input-password" placeholder="Password" />
                        <router-link class="find-password" to="">Find Password</router-link>
                        <input type="submit" class="input-login" value="Login" />
                    </div>
					<div style="margin-top: 10px;">
                    <router-link class="signup" to="/signup">Sign Up</router-link>
					<router-link class="forgot__password" to="">Forgot password</router-link>
					</div>
                </div>
                <div class="image_div">
                    <img src="../assets/undraw_authentication_fsn5.svg" alt="로고" class="logo-2" />
                </div>
			</div>
        </div>
    </div>
</template>
<style lang="css">
.signin {
    width: 100%;
    height: 100vh;
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
    align-itmes: center;
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
    width: 580px;
    height: 580px;
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
}
.signin__container {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 16px 0.2px #868E96;
    border-radius: 30px;
}
</style>
<script>
export default {
    name: 'signin',
    logo: 'https://kr.vuejs.org/images/logo.png'
};
</script>
