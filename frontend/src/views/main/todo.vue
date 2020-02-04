<template>
  <div class="todo">
    <div class="todo__title">
      <div>Plans</div>
      <img
        @click="create()"
        alt="create"
        src="../../assets/playlist_add-24px.svg"
        width="42px"
        style="cursor: pointer;"
      />
    </div>
    <div class="todo__main" v-if="(todoData.length != 0)">
      <div class="todo__box" v-for="(value,index) in todoData" :key="index">
		  
		<div class="todo__box__article">
			<div class="todo__box__dday" v-if="day(value.endDay)<=0">Complete!</div>
			<div class="todo__box__dday" v-else>D - {{day(value.endDay)}}</div>
        	<div class="todo__box__title">{{value.title}}</div>
        	<div class="todo__box__text">{{value.text}}</div> 
		</div>
        

        <div class="todo__box__day">
          <div class="todo__box__startday">{{value.startDay}}</div>
          <div class="todo__box__endday">{{value.endDay}}</div>
        </div>
        <progress
          :value="dayBetween(value.startDay, value.endDay)-day(value.endDay)"
          :max="dayBetween(value.startDay, value.endDay)"
          class="todo__box__progress"
        />
        <div class="todo__delete" @click="remove(value)">×</div>
      </div>
    </div>
	<div v-else class="todoed">
		<div class="todoed__title">새로운 목표를 추가해보세요</div>
		<img src="../../assets/undraw__todo.svg" alt="사진" width="350px" height="350px" />
		<div class="todoed__button" @click="add()"><span>추가하기</span></div>
		
	</div>
	</div>
</template>

<script>
export default {
	data() {
    return {
      todoData: [],
      valueDeterminate: 50
    };
  },
  computed: {},
  mounted() {},
  methods: {
    remove(value) {
      this.$store
        .dispatch("TODO__DELETE", {
          id: value.id,
          token: localStorage.getItem("token")
        })
        .then(response => {
          this.$store
            .dispatch("FIND__DATA", {
              token: localStorage.getItem("token")
            })
            .then(response => {
              console.log(response);
              if (response.data.result == true) {
                console.log("11");
                this.todoData = response.data.userdata.todo;
                console.log(this.todoData);
              } else {
              }
            })
            .catch(e => {
              console.log(e);
            });
        })
        .catch(e => console.log(e));
    },
    day(endDay) {
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
      var diffDate_1 = today instanceof Date ? today : new Date(today);
      var diffDate_2 = endDay instanceof Date ? endDay : new Date(endDay);

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
    dayBetween(startDay, endDay) {
      var today = new Date(startDay);

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
      var diffDate_1 = today instanceof Date ? today : new Date(today);
      var diffDate_2 = endDay instanceof Date ? endDay : new Date(endDay);

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
	  add(){
		this.$router.push("/wrap/main/todocreate")  
	  },
    create() {
      this.$router.push("/wrap/main/todocreate");
    }
  },
  created() {
    this.$store
      .dispatch("FIND__DATA", {
        token: localStorage.getItem("token")
      })
      .then(response => {
        console.log(response);
        if (response.data.result == true) {
          console.log("11");
          this.todoData = response.data.userdata.todo;
          console.log(this.todoData);
        } else {
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
<style>
	
	.todoed__title{
		font-size:36px;
		font-family:"NanumSB";
		color:black;
	}
	.todoed__button{
		cursor:pointer;
		font-family:"NanumSR";
		background-color:#6c63ff;
		color:white;
		width:180px;
		height:45px;
		display:flex;
		justify-content:center;
		align-items:center;
		border-radius:30px;
		
	}
	.todoed{
		height:100%;
		display:flex;
		justify-content:center;
		align-items:center;
		flex-direction:column;
		overflow-x: hidden;
  		margin: 8px 0px;
  		background-color: white;
  		border-radius: 30px;
		position:relative;
	}
	.todoed > *{
		margin:10px;
	}
.todo__delete {
  cursor:pointer;
  padding: 4px;
  font-size: 24px;
  position: absolute;
  top: 10%;
  right: 5%;
  font-family: "ProductSansR";
  color: #f03434;
}

.todo {
  width: 100%;
  height: 100%;
  background-color: #f1f3f5;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.todo__main{
	margin-top:16px;
	max-height:100%;
	overflow-y:auto;
}
.todo__title {
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
.todo__title > * {
  overflow-y: hidden !important;
  height: fit-content;
}
.todo__box {
  width: 100%;
  min-height: 200px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 64px 18px;
  position: relative;
}
.todo__box__title {
  margin-top: 22px;
  font-size: 28px;
  font-family: "ProductSansR", "NanumSB";
}
.todo__box__text {
  font-size: 18px;
  font-family: "ProductSansR", "NanumSR";
  margin-bottom: 16px;
}
.todo__box__day {
  font-family: "ProductSansR";
  width: 90%;
  display: flex;
  justify-content: center;
  margin: auto;
}
.todo__box__startday {
  width: 50%;
  text-align: left;
}
.todo__box__endday {
  width: 50%;
  text-align: right;
}
.todo__box__progress {
  width: 90%;
  -webkit-appearance: none;
  appearance: none;
}
.todo__box__dday {
  width: 80%;
  display:inline;
  padding: 8px 15px;
  border-radius: 14px;
  color: white;
  font-family: "ProductSansR";
  font-size: 16px;
  background: rgb(52, 148, 230);
  background: linear-gradient(
    130deg,
    rgba(52, 148, 230, 1) 0%,
    rgba(236, 110, 173, 1) 100%
  );
}
progress::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 4px;
}
progress::-webkit-progress-value {
  background-image: -webkit-linear-gradient(
      -45deg,
      transparent 33%,
      rgba(0, 0, 0, 0.1) 33%,
      rgba(0, 0, 0, 0.1) 66%,
      transparent 66%
    ),
    -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
    -webkit-linear-gradient(left, rgba(52, 148, 230, 1), rgba(236, 110, 173, 1));

  border-radius: 4px;
  background-size: 35px 20px, 100% 100%, 100% 100%;
}
</style>