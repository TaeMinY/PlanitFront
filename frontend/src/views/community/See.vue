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

    <div v-for="(value,index) in data" :key="index">
      <div class="see__box">
        <div style="display:flex;align-items:center;">
          <div class="see__left">
            <div class="see__article__profile">
              <div style="display:flex; align-items:center">
                <img
                  class="see__article__image"
                  :src="'http://nulllove-rgobq.run.goorm.io/api/'+value.email+'.png'"
                  alt="profile"
                  width="42px"
                  height="42px"
                  style="object-fit:cover"
                />
                <div class="see__article__name">{{value.name}}</div>
              </div>
              <div
                class="see__article__unlike"
                @click="like(value)"
                v-if="checkLike(value)"
              >응원중 {{value.like}}</div>
              <div class="see__article__like" @click="like(value)" v-else>응원해요 {{value.like}}</div>
            </div>

            <div class="see__article__title">{{value.data.title}}</div>
            <div class="see__article__subtitle">{{value.data.text}}</div>

            <div class="see__article__date">{{value.data.startDay}} ~ {{value.data.endDay}}</div>

            <div class="see__article__text">{{value.text}}</div>

            <div class="see__article__comment">
              <input
                type="text"
                placeholder="댓글 달기"
                class="see__article__comment__input"
                v-on:keyup.enter="submit(value._id,index)"
                :id="value._id"
              />
              <input
                type="submit"
                value="등록"
                class="see__article__comment__submit"
                @click="submit(value._id,index)"
              />
            </div>
          </div>

          <div class="see__right">
            <img
              class="see__article__undraw"
              :src="require(`@/assets/article_images/undraw_article_${(index%4+1)}.svg`)"
              alt="article image"
            />
          </div>
        </div>

        <div class="see__left">
          <div v-if="statusif(value._id)">
            <div
              class="see__article__comment__enable"
              @click="status(index)"
              v-if="(value.status != true)"
            >▼ Show Comments</div>
            <div class="see__article__comment__enable" @click="status(index)" v-else>▲ Hide Comments</div>
          </div>
          <div v-if="(value.status == true)">
            <div v-for="(d,index) in commentData" :key="index" v-if="(d.post_id == value._id)">
              <div class="see__comment">
                <div style="display:flex;align-items:center;">
                  <img
                    class="see__comment__image"
                    :src="'http://nulllove-rgobq.run.goorm.io/api/'+d.email+'.png'"
                    alt="comment profile"
                  />
                  <div class="see__comment__name">{{d.name}}</div>
                  <div class="see__comment__text">{{d.text}}</div>
                </div>
                <div style="display:flex;align-items:center;">
                  <div class="see__comment__time">{{d.time}}</div>
                  <div
                    class="see__comment__delete"
                    @click="deletecomment(d)"
                    v-if="d.email == userdata.email"
                  >×</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "community",
  data() {
    return {
      data: [],
      commentData: [],
      commentStatus: [],
      userdata: {},
      enter: false
    };
  },
  computed: {},
  components: {},
  created() {
    this.$store
      .dispatch("token", {
        token: localStorage.getItem("token")
      })
      .then(response => {
        if (response.data.result == true) {
          this.userdata = response.data.userdata;
        } else {
        }
      })
      .catch(e => {});
    this.$store
      .dispatch("FIND__POST", {
        token: localStorage.getItem("token")
      })
      .then(response => {
        if (response.data.result == true) {
          var fal = { status: true };
          this.data = response.data.userdata.map(v => Object.assign(v, fal));
        } else {
        }
      })
      .catch(e => {});
    this.$store
      .dispatch("FIND__COMMENT__ALL", {})
      .then(response => {
        if (response.data.result == true) {
          this.commentData = response.data.userdata;
        } else {
        }
      })
      .catch(e => {});
  },
  methods: {
    deletecomment(e) {
      this.$store
        .dispatch("DELETE__COMMENT", {
          token: localStorage.getItem("token"),
          _id: e._id
        })
        .then(response => {
          this.$store
            .dispatch("FIND__COMMENT__ALL", {})
            .then(response => {
              if (response.data.result == true) {
                this.commentData = response.data.userdata;
              } else {
              }
            })
            .catch(e => {});
        });
    },
    checkLike(e) {
      for (let i = 0; i < e.like_users.length; i++) {
        if (e.like_users[i] == this.userdata.email) {
          return true;
        }
      }
      return false;
    },
    like(e) {
      this.$store
        .dispatch("POST__LIKE", {
          token: localStorage.getItem("token"),
          _id: e._id
        })
        .then(response => {
          this.$store
            .dispatch("FIND__POST", {
              token: localStorage.getItem("token")
            })
            .then(response => {
              if (response.data.result == true) {
                var fal = { status: true };
                this.data = response.data.userdata.map(v =>
                  Object.assign(v, fal)
                );
              } else {
              }
            })
            .catch(e => {});
        });
    },
    statusif(e) {
      var Sa = false;
      for (let i = 0; i < this.commentData.length; i++) {
        if (this.commentData[i].post_id == e) {
          Sa = true;
        }
      }
      if (Sa == true) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    },
    status(e) {
      console.log(e);
      this.data[e].status = !this.data[e].status;
    },
    create() {
      this.$router.push("/wrap/community/create");
    },
    submit(e, index) {
      if (this.enter == false) {
        this.enter = true;
        var d = new Date();
        var nowDate =
          d.getFullYear() +
          "-" +
          (d.getMonth() + 1) +
          "-" +
          d.getDate() +
          "-" +
          d.getHours() +
          "-" +
          d.getMinutes() +
          "-" +
          d.getSeconds();
        this.$store
          .dispatch("CREATE__COMMENT", {
            token: localStorage.getItem("token"),
            _id: e,
            text: document.getElementById(e).value,
            time: nowDate
          })
          .then(response => {
            if (response.data.result == true) {
              console.log("요청확인");
              this.$store
                .dispatch("FIND__COMMENT__ALL", {})
                .then(response => {
                  if (response.data.result == true) {
                    this.commentData = response.data.userdata;
                    document.getElementById(e).value = "";
                    this.data[index].status = true;
                    this.enter = false;
                  } else {
                  }
                })
                .catch(e => {
                  console.log(e);
                });
            } else {
            }
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>
<style scoped>
.see {
  padding: 1.5% 3.5%;
  width: 100%;
  height: 100%;
  flex: 1;
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
.see__box {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  margin-top: 28px;
  margin-bottom: 24px;
  background-color: white;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 50px;
  position: relative;
}
.see__left {
  width: 65%;
}
.see__right {
  display: flex;
  align-items: top;
  justify-content: center;
  width: 35%;
}
.see__article__profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.see__article__image {
  border-radius: 100%;
  background-color: #eaf3fe;
  cursor: pointer;
  width: 42px;
}
.see__article__name {
  margin-left: 8px;
  font-family: "ProductSansR", "NanumSB";
  font-size: 18px;
}
.see__article__title {
  word-break: break-all;
  color: black;
  margin-top: 16px;
  text-align: left;
  font-family: "ProductSansM", "NanumSB";
  font-size: 28px;
}
.see__article__subtitle {
  word-break: break-all;
  color: #868e96;
  text-align: left;
  font-family: "ProductSansR", "NanumSR";
  font-size: 16px;
}
.see__article__date {
  color: #868e96;
  text-align: left;
  font-family: "NanumSR";
  font-size: 12px;
}
.see__article__text {
  word-break: break-all;
  white-space: normal;
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
.see__article__comment {
  display: flex;
  width: 100%;
  align-items: center;
}
.see__article__comment__input {
  width: 100%;
  font-size: 14px;
  border-radius: 3px;
  height: 30px;
  border: 1px solid #adb5bd;
  padding: 5px 10px;
  font-family: "ProductSansR", "NanumSRB";
  box-sizing: content-box;
}
.see__article__comment__submit {
  border-radius: 3px;
  font-family: "ProductSansR";
  cursor: pointer;
  height: 30px;
  margin: 5px 0px 5px 5px;
  border: 0;
  text-align: center;
  font-size: 14px;
  padding: 5px 10px;
  color: #ffffff;
  background-color: #6c63ff;
  box-sizing: content-box;
}
.see__article__like {
  font-family: "ProductSansR", "NanumSB";
  cursor: pointer;
  border: 1px solid #6c63ff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 14px;
  padding: 2px 8px;
  color: #6c63ff;
  background-color: #ffffff;
  box-sizing: content-box;
}
.see__article__like:hover {
  transition: 0.3s;
  color: white;
  background-color: #6c63ff;
}
.see__article__unlike {
  transition: 0.3s;
  color: white;
  background-color: #6c63ff;
  font-family: "ProductSansR", "NanumSB";
  cursor: pointer;
  border: 1px solid #6c63ff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 14px;
  padding: 2px 8px;
  box-sizing: content-box;
}
.see__article__like__count {
  margin-left: 4px;
}
.see__comment {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: #f5f4ff;
  border-radius: 8px;
  margin: 8px 0px;
  font-family: "ProductSansR";
}
.see__comment__name {
  white-space: nowrap;
  margin-left: 8px;
  font-size: 18px;
  font-family: "NanumSB";
}
.see__comment__text {
  text-align: left;
  white-space: normal;
  word-break: break-all;
  margin-left: 6px;
  font-size: 16px;
  font-family: "NanumSR";
}
.see__comment__time {
  margin-left: 6px;
  white-space: nowrap;
  color: #adb5bd;
  font-size: 14px;
  font-family: "NanumSR";
}
.see__comment__delete {
  cursor: pointer;
  margin-left: 8px;
  color: #f03434;
  font-size: 14px;
  font-family: "ProductSansR";
}
.see__article__comment__enable {
  cursor: pointer;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 14px;
  border-radius: 3px;
  height: 25px;
  /* border: 1px solid #6c63ff; */
  color: #6c63ff;
  padding: 5px 10px;
  font-family: "ProductSansR", "NanumSRB";
  box-sizing: content-box;
}
.see__article__comment__enable:hover {
  transition: 0.3s;
  color: white;
  background-color: #6c63ff;
}
.see__comment__image {
  border-radius: 100%;
  background-color: #eaf3fe;
  cursor: pointer;
  width: 36px;
  height: 36px;
  object-fit: cover;
}
.see__article__undraw {
  margin-left: 10%;
  width: 50%;
  height: 50%;
}
</style>
