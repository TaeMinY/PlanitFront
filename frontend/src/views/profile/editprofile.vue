<template>
  <div class="edit">
    <div class="edit__title">
      <div>Edit Profile</div>
    </div>
    <div class="edit__box">
      <img
        src="../../assets/arrow_back.svg"
        alt
        width="25px"
        class="arrow"
        @click="arrow_back"
      />
      <img
        :src="'http://nulllove-rgobq.run.goorm.io/api/' + $store.state.userdata.email + '.png'"
        class="edit__image"
        style="object-fit: cover;"
      />
      <!-- <div class="profile__hello">
        안녕하세요, {{$store.state.userdata.username}}님!
      </div>
      <div class="profile__email">{{$store.state.userdata.email}}</div> -->
      <div class="edit__input">
        <div class="edit__input__title">
          Email
        </div>
        <div class="edit__input__email">{{$store.state.userdata.email}}</div>
      </div>
      <div class="edit__input">
        <div class="edit__input__title">
          Name
        </div>
        <input class="edit__input__username" v-model="username" type="text" />
		  		 <div>{{errorMes}}</div>

        <div class="edit__changepw" @click="change()">비밀번호 변경</div>
        <div class="edit__save" @click="save()">저장</div>
		          <div class="edit__delete" @click="end()">회원탈퇴</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "profile",
    data() {
      return {
		  errorMes: "",
        postdata: [],
        username: "",
        userdata: []
      };
    },
    components: {},
    created() {
      this.$store
        .dispatch("FIND__MY__POST", {
          token: localStorage.getItem("token")
        })
        .then(response => {
          if (response.data.result == true) {
            this.postdata = response.data.userdata;
            this.$store
              .dispatch("token", {
                token: localStorage.getItem("token")
              })
              .then(response => {
                this.userdata = response.data.userdata;
                this.username = response.data.userdata.username;
              });
          } else {
          }
        })
        .catch(e => {
        });
      this.start();
    },
    methods: {
	change(){
		if(!this.$cookie.get('passwordfind')){
			this.$cookie.set('passwordfind', true, { expires: "5m" });
      this.$store
        .dispatch("CHECK", { email: this.$store.state.userdata.email })
        .then(response => {
		  					localStorage.removeItem('token');
		  if(response.data.result == true){
			  this.errorMes = "이메일을 확인해주세요."
		  }
        })
        .catch(err => {
        });
    	}else{
			 this.errorMes = "연속적으로 보낼 수 없습니다 5분을 기다려주세요."
		}
	},
	save(){
	this.$store
        .dispatch("MY__PROFILE__SAVE", {
          token: localStorage.getItem("token"),
		  username : this.username
        })
        .then(response => {
				if(response.data.result == true){
					this.errorMes =response.data.mes;
					this.$store
      .dispatch("token", {
        token: localStorage.getItem("token")
      })
      .then(response => {
        if (response.data.result == true) {
			this.$store.state.userdata = response.data.userdata;
        } else {
        }
      })
      .catch(e => {
      });
				}
		})
	},
	end(){
		let st = confirm("회원탈퇴를 하시겠습니까?");
		if(st){
		this.$store
        .dispatch("END", {
          token: localStorage.getItem("token"),
        })
        .then(response => {
				if(response.data.result == true){
					this.errorMes = "";
					localStorage.removeItem('token');
					this.$store.state.userdata = {},
					this.$router.push("/");
					
				}
		})
		}
	},
      arrow_back() {
        this.$store.state.wrap = "right";

        this.$router.push("/wrap/profile");
      },
      start() {
        this.username = this.userdata.username;
      }
    }
  };
</script>
<style scoped>
  .edit__image {
    width: 120px;
    height: 120px;
    border-radius: 100%;
  }
  .edit {
    padding: 1.5% 3.5%;
    width: 100%;
    height: 100%;
    flex: 1;
  }
  .edit__title {
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
  .edit__box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 85%;
    min-height: 200px;
    margin-top: 24px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 30px;
    padding: 40px;
    position: relative;
  }
  .arrow {
    cursor: pointer;
    position: absolute;
    top: 35px;
    left: 30px;
  }
  .edit__input {
    min-width: 300px;
    width: 30%;
    text-align: left;
  }
  .edit__input__title {
    color: black;
    margin-top: 18px;
    font-size: 24px;
    font-family: "ProductSansM";
    width: 75%;
    text-align: left;
  }
  .edit__changepw {
    margin-bottom: 8px;
    margin-top: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 4px;
    font-family: "NanumSR";
    cursor: pointer;
    height: 40px;
    border: 1px solid #6c63ff;
    text-align: center;
    font-size: 14px;
    padding: 5px 10px;
    color: #6c63ff;
  }
  .edit__save {
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 4px;
    font-family: "NanumSR";
    cursor: pointer;
    height: 40px;
    border: 1px solid #6c63ff;
    background-color: #6c63ff;
    text-align: center;
    font-size: 14px;
    padding: 5px 10px;
    color: white;
  }
	.edit__delete {
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-family: "NanumSR";
    cursor: pointer;
    height: 40px;
    border: 1px solid #f03434;
    background-color: #f03434;
    text-align: center;
    font-size: 14px;
    padding: 5px 10px;
    color: white;
  }
  .edit__input__email {
    border-radius: 3px;
    width: 100%;
    height: 40px;
    border: 1px solid #adb5bd;
    margin: 5px auto;
    padding: 5px 10px;
    font-family: "ProductSansR", "NanumSRB";
  }
  .edit__input__username {
    border-radius: 3px;
    width: 100%;
    height: 40px;
    border: 1px solid #adb5bd;
    margin: 5px auto;
    padding: 5px 10px;
    font-family: "ProductSansR", "NanumSRB";
  }
</style>