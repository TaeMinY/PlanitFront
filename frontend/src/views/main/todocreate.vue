<template>
  <div class="todocreate">
    <div class="todocreate__title">Add Plan</div>
    <div class="todocreate__main">
		<img src="../../assets/arrow_back.svg" alt="" width="25px" class="arrow" @click="arrow_back"/>
      <img src="../../assets/undraw_scrum_board_cesn.svg" alt="새로운 목표" width="15%" />

      <div class="todocreate__section">목표 설정</div>
      <input type="text" placeholder="목표 이름" class="todocreate__input" v-model="title" />
      <input type="text" placeholder="세부 실천 내용" class="todocreate__input" v-model="text" />
      <div class="todocreate__section">달성 기간</div>
      <input
        type="date"
        value="2020-12-31"
        class="todocreate__input"
        style="font-size:14px"
        v-model="endDay"
      />
      <div class="errorMes">{{ errorM }}</div>
      <input type="submit" value="Add to Plan" class="todocreate__submit" @click="submit()" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      endDay,
      title,
      text,
      errorM: "",
      send: false
    };
  },
  created(){
	this.$store.state.status.plans = true;
	this.$store.state.status.calendar = false;
	this.$store.state.status.memo = false;  
  },
	beforeDestory(){
  		this.$store.state.status.plans = false;
		this.$store.state.status.calendar = false;
	  	this.$store.state.status.memo = false;
	},
  computed: {},
  mounted() {},
  methods: {
	arrow_back(){
		this.$router.push("/wrap/main");	
	},
    dateDiff(_date1, _date2) {
      var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
      var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);

      diffDate_1 = new Date(
        diffDate_1.getFullYear(),
        diffDate_1.getMonth() + 1,
        diffDate_1.getDate()
      );
      diffDate_2 = new Date(
        diffDate_2.getFullYear(),
        diffDate_2.getMonth() + 1,
        diffDate_2.getDate()
      );

      var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
      diff = Math.ceil(diff / (1000 * 3600 * 24));

      return diff;
    },
    submit() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      today = yyyy + "-" + mm + "-" + dd;
      var endDay = this.endDay.split("-");

      if (endDay[0] > yyyy) {
        //성공
        this.send = true;
      } else if (endDay[0] == yyyy) {
        if (endDay[1] > mm) {
          //성공
          this.send = true;
        } else if (endDay[1] == mm) {
          if (endDay[2] > dd) {
            //성공
            this.send = true;
          } else {
            //실패
            this.send = false;
            this.errorM = "기간을 다시 정해주세요";
          }
        } else {
          //실패
          this.send = false;
          this.errorM = "기간을 다시 정해주세요";
        }
      } else {
        //실패
        this.send = false;
        this.errorM = "기간을 다시 정해주세요";
        console.log("Dd");
      }

      if (this.send == true) {
        this.$store
          .dispatch("TODO__CREATE", {
            title: this.title,
            text: this.text,
            startDay: today,
            endDay: this.endDay,
            progress: this.dateDiff(today, this.endDay),
            token: localStorage.getItem("token")
          })
          .then(response => {
            if (response.data.result == true) {
              this.title = "";
              this.text = "";
              this.startDay = "";
              this.endDay = "";
				this.$store
      .dispatch("token", {
        token: localStorage.getItem("token")
      })
      .then(response => {
        if (response.data.result == true) {
			console.log(response)
			this.$store.state.userdata = response.data.userdata;
        } else {
        }
      })
      .catch(e => {
        console.log(e);
      });
				
				
				
              this.$router.push("/wrap/main");
            } else {
              this.errorM = response.data.mes;
            }
          })
          .catch(e => {
            console.log(e);
            this.errorM = "서버에 저장하지 못하였습니다";
          });
        this.send = false;
      }
    }
  }
};
</script>
<style scoped>
	.arrow{
		cursor:pointer;
		position:absolute;
		top:35px;
		left:30px;
	}
.todocreate {
  width: 100%;
  height: 100%;
  background-color: #f1f3f5;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.todocreate__title {
  font-size: 40px;
  font-style: normal;
  font-family: ProductSansM;
  color: #000000;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 0;
  margin-bottom: 0;
  padding: 0;
}
.todocreate__main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;
  overflow-x: hidden;
  margin: 8px 0px;
  background-color: white;
  border-radius: 30px;
	position:relative;
}
.errorMes {
  font-size: 14px;
  color: red;
  margin: 5px 0px;
  background-color: white;
}
.todocreate__input {
  box-sizing: content-box;
  border-radius: 3px;
  min-width: 300px;
  width: 50%;
  height: 30px;
  border: 1px solid #adb5bd;
  margin: 5px auto;
  padding: 5px 10px;
  font-family: "ProductSansR", "NanumSR";
}
.todocreate__input::placeholder {
  font-size: 14px;
  font-family: "ProductSansR", "NanumSR";
  color: #adb5bd;
}
.todocreate__submit {
  margin-top: 16px;
  border-radius: 3px;
  font-family: "ProductSansR";
  cursor: pointer;
  height: 30px;

  border: 0;
  text-align: center;
  font-size: 14px;
  padding: 5px 10px;
  color: #ffffff;
  background-color: #6c63ff;
  min-width: 300px;
  width: 50%;
  box-sizing: content-box;
}
.todocreate__section {
  min-width: 300px;
  width: 51%;
  margin-top: 24px;
  font-size: 18px;
  font-family: "NanumSB";
  color: black;
  text-align: left;
}
</style>