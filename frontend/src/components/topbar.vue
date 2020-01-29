<<template>
  <div class="topbar">
	<div class="topbar__logo">
		<div>
			Logo
		</div>
		<div class="topbar__logo__title">
			Planit
		</div>
	</div>
	<div class="topbar__nav">
		<div class="nonecolor" @click="signup()">회원가입</div>
		<div class="nonecolor" @click="signin()">로그인</div>
	</div>
  </div>
</template>
<script>
export default {
  name: 'topbar',
  methods:{
	  signup(){
		this.$store.state.transtionStatus = "bottom";
		this.$router.push("/signup")
	  },
	  signin(){
		this.$store.state.transtionStatus = "bottom";
		this.$router.push("/signin")
	  }
  }
}
</script>
<style lang="scss">
	.nonecolor{
		    text-decoration: none;
		color:white;
	}
	.topbar{
		width:100%;
		height: 80px;
		background-color: transparent;
		z-index:99999;
		position:absolute;
		top:0;
		left:0;
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding:0 5%;
		box-sizing:border-box;
		
	}
	
	.topbar__nav{
		display:flex;
		font-family: "NanumSR";
	}
	.topbar__nav > .nonecolor{
		margin: 0 5px;
		color:white;
	}
	.topbar__logo{
		display:flex;
		font-family: "ProductSansM";
	}
	.topbar__logo > div{
		margin: auto 5px;
	}
	.topbar__logo__title{
		font-size:32px;
	}
</style>
