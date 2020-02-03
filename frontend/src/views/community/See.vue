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
              v-on:keyup.enter="submit(value._id)"
			  :id="value._id"
            />
            <input type="submit" value="등록" class="see__article__comment__submit" @click="submit(value._id)" />
          </div>
		  <div @click="status(index)" v-if="(value.status != true)">댓글보기</div>
			<div @click="status(index)" v-else>댓글닫기</div>
			<div v-if="(value.status == true)">
          <div v-for="(d,index) in commentData" :key="index" v-if="(d.post_id == value._id)">
		   <div class="see__comment">
			<div class="see__article__name">{{d.name}}</div>
			<div> : </div>
			<div>{{d.text}}</div>
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
	  commentStatus : []
    };
  },
  components: {},
  created() {
    console.log("create see");
    this.$store
      .dispatch("FIND__POST", {
        token: localStorage.getItem("token")
      })
      .then(response => {
        console.log("요청을 보냄");
        if (response.data.result == true) {
			var fal = {status : false}
			this.data = response.data.userdata.map(v => Object.assign(v, fal))
        } else {
        }
      })
      .catch(e => {
        console.log(e);
      });
	this.$store
      .dispatch("FIND__COMMENT__ALL", {
      })
      .then(response => {
        console.log("요청을 보냄");
        if (response.data.result == true) {
		  this.commentData = response.data.userdata;
        } else {
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
	 status(e){
		 console.log(e)
		 this.data[e].status = !this.data[e].status
	 },
    create() {
      this.$router.push("/wrap/community/create");
    },
    submit(e) {
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
        		.dispatch("FIND__COMMENT__ALL", {
          			
        		})
        		.then(response => {
          			if (response.data.result == true) {
            		 	 this.commentData = response.data.userdata;
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
  margin-top: 24px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 40px;
  position: relative;
}
.see__left {
  width: 65%;
}
.see__article__profile {
  display: flex;
	justify-content:space-between;
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
  color: black;
  margin-top: 16px;
  text-align: left;
  font-family: "ProductSansM", "NanumSB";
  font-size: 28px;
}
.see__article__subtitle {
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
  border-radius: 4px;
  padding: 6px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 36px;
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
  margin: 5px;
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
.see__article__like:hover{
	transition: 0.3s;
	color: white;
	background-color: #6c63ff;
}
.see__article__like__count{
	margin-left: 4px;
}
.see__comment{
	display: flex;
	align-items:center;
	padding:12px;
	background-color: #f5f4ff;
	border-radius: 8px;
	margin: 8px 0px;
	font-family: "NanumSR";
}
</style>