<template>
  <div class="profile">
    <div class="profile__title">
      <div>Profile</div>
    </div>
    <div class="profile__box">
      <img
        src="../../assets/arrow_back.svg"
        alt="back"
        width="25px"
        class="arrow"
        @click="arrow_back"
      />
      <img
        :src="'http://nulllove-rgobq.run.goorm.io/api/' + $store.state.userdata.email + '.png'"
        class="profile__image"
        style="object-fit: cover;"
      />
      <div class="profile__hello">
        안녕하세요, {{$store.state.userdata.username}}님!
      </div>
      <div class="profile__email">{{$store.state.userdata.email}}</div>

      <div class="profile__edit" @click="edit()">Edit Profile</div>
      <!-- <img
        src="../../assets/undraw_2020.svg"
        alt="2020"
        style="width:20%;margin-top:36px;"
      /> -->

      
    </div>
	  
	  <div class="profile__box" v-if="postdata && postdata.length">
		  <div class="profile__myarticle">My Article</div>
      <div v-for="(value,index) in postdata" :key="index" style="width:80%">
        <div class="profile__article__box">
          <div class="profile__article__left">
            <div class="profile__article__profile">
              <div style="display:flex; align-items:center">
                <img
                  class="profile__article__image"
                  :src="'http://nulllove-rgobq.run.goorm.io/api/'+value.email+'.png'"
                  alt="profile"
                  width="42px"
                  height="42px"
                  style="object-fit:cover"
                />
                <div class="profile__article__name">
                  {{postdata[index].name}}
                </div>
              </div>
              <div
                class="profile__article__delete"
                @click="deletePost(value._id)"
              >
                삭제하기
              </div>
            </div>

            <div class="profile__article__title">
              {{postdata[index].data.title}}
            </div>
            <div class="profile__article__subtitle">
              {{postdata[index].data.text}}
            </div>

            <div class="profile__article__date">
              {{postdata[index].data.startDay}} ~
              {{postdata[index].data.endDay}}
            </div>

            <div class="profile__article__text">
              {{postdata[index].text}}
            </div>
          </div>
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
      },
      edit() {
        this.$router.push("/wrap/profile/edit");
      },
      deletePost(e) {
        console.log(e);
        this.$store
          .dispatch("POST__DELETE", {
            token: localStorage.getItem("token"),
            _id: e
          })
          .then(response => {
            console.log("요청을 보냄");
            if (response.data.result == true) {
              console.log(response.data.userdata);
              this.postdata = response.data.userdata;
            } else {
            }
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  };
</script>
<style scoped>
  .profile__image {
    width: 120px;
    height: 120px;
    border-radius: 100%;
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
    align-items: center;
    flex-direction: column;
    width: 100%;
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
  .profile__hello {
    margin-top: 24px;
    font-family: "ProductSansM", "NanumSB";
    font-size: 28px;
  }
  .profile__email {
    font-family: "NanumSR";
    font-size: 18px;
  }
  .profile__article__box {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 4px;
    margin-bottom: 44px;
    border-radius: 30px;
    padding: 45px;
    position: relative;
  }
  .profile__article__left {
    width: 100%;
  }
  .profile__article__profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .profile__article__image {
    border-radius: 100%;
    background-color: #eaf3fe;
    cursor: pointer;
    width: 42px;
  }
  .profile__article__name {
    margin-left: 8px;
    font-family: "ProductSansR", "NanumSB";
    font-size: 18px;
  }
  .profile__article__title {
    word-break: break-all;
    color: black;
    margin-top: 16px;
    text-align: left;
    font-family: "ProductSansM", "NanumSB";
    font-size: 28px;
  }
  .profile__article__subtitle {
    word-break: break-all;
    color: #868e96;
    text-align: left;
    font-family: "ProductSansR", "NanumSR";
    font-size: 16px;
  }
  .profile__article__date {
    color: #868e96;
    text-align: left;
    font-family: "NanumSR";
    font-size: 12px;
  }
  .profile__article__text {
    word-break: break-all;
    border-radius: 4px;
    padding: 6px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 8px;
    background-color: #f5f4ff;
    color: black;
    text-align: left;
    font-family: "ProductSansR", "NanumSR";
    font-size: 16px;
  }
  .profile__article__delete {
    font-family: "ProductSansR", "NanumSB";
    cursor: pointer;
    border: 1px solid #f03434;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    font-size: 14px;
    padding: 2px 8px;
    color: #f03434;
    box-sizing: content-box;
  }
  .profile__article__delete:hover {
    transition: 0.3s;
    color: white;
    background-color: #f03434;
  }
  .profile__edit {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-family: "ProductSansR";
    cursor: pointer;
    height: 30px;
    margin-top: 24px;
    border: 0;
    text-align: center;
    font-size: 14px;
    padding: 20px;
    color: #ffffff;
    background-color: #6c63ff;
  }
  .profile__myarticle {
    margin-top: 36px;
    font-size: 24px;
    font-family: "ProductSansM";
    width: 75%;
    text-align: left;
  }
</style>
