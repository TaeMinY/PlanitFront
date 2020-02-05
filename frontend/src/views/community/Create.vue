<template>
  <div class="create">
    <div class="create__title">
      <div>Share Plans</div>
    </div>
    <div class="create__text">
				<img src="../../assets/arrow_back.svg" alt="" width="25px" class="arrow" @click="arrow_back"/>
      <img src="../../assets/undraw_upload.svg" alt="새로운 목표" width="200px" />

      <div class="create__section">공유할 목표 선택</div>
      <select class="create__input" name id="selectBox">
        <option v-for="(value,index) in todoData" :key="index" :value="value.id">{{ value.title }}</option>
      </select>
      <div class="create__section">게시물 내용</div>
      <textarea
        name="text"
        class="create__input"
        style="font-size:14px;height:60px"
        rows="5"
        v-model="textMes"
      />
      <div class="errorMes">{{ errorM }}</div>
      <input type="submit" value="Share My Plan" class="create__submit" @click="submit()" />
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      todoData: [],
      goal: {},
      textMes: "",
      errorM: ""
    };
  },
  components: {},
  created() {
    this.$store
      .dispatch("FIND__DATA", {
        token: localStorage.getItem("token")
      })
      .then(response => {
        if (response.data.result == true) {
          this.todoData = response.data.userdata.todo;
        } else {
        }
      })
      .catch(e => {
      });
  },
  methods: {
	arrow_back(){
		this.$router.push("/wrap/community");	
	},
    submit() {
      var target = document.getElementById("selectBox");
      var Array = this.todoData.filter(
        e => target.options[target.selectedIndex].value == e.id
      );
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
      if (Array[0]) {
        this.$store
          .dispatch("POST__CREATE", {
            token: localStorage.getItem("token"),
            data: Array[0],
            text: this.textMes,
            time: nowDate
          })
          .then(response => {
            if (response.data.result == true) {
              this.$router.push("/wrap/community");
            } else {
              this.errorM = response.data.mes;
            }
          })
          .catch(e => {
            this.errorM = "서버에 저장하지 못하였습니다";
          });
      } else {
        this.errorM = "먼저 목표를 추가하고 올려주세요";
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
.create {
  width: 100%;
  height: 100%;
  padding: 1.5% 3.5%;
}
.create__title {
  font-size: 40px;
  width: 100%;
  height: 60px;
  font-style: normal;
  font-family: ProductSansM;
  color: #000000;
  text-align: left;
  padding: 0;
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
}
.create {
  width: 100%;
  height: 100%;
  background-color: #f1f3f5;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.errorMes {
  font-size: 14px;
  color: red;
  margin: 5px 0px;
  background-color: white;
}
.create__title {
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
.create__text {
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  height: 85%;
  position:relative;
}
.create__main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;
  overflow-x: hidden;
  margin: 8px 0px;
  background-color: white;
  border-radius: 30px;
}
.errorMes {
  font-size: 14px;
  color: red;
  margin: 5px 0px;
  background-color: white;
}
.create__input {
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
.create__input::placeholder {
  font-size: 14px;
  font-family: "ProductSansR", "NanumSR";
  color: #adb5bd;
}
.create__submit {
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
.create__section {
  min-width: 300px;
  width: 51%;
  margin-top: 24px;
  font-size: 18px;
  font-family: "NanumSB";
  color: black;
  text-align: left;
  margin: 0 auto;
}
</style>