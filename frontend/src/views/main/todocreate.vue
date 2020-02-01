<template>
  <div class="todocreate">
    <div class="todocreate__title">Add Plan</div>
    <div class="todocreate__main">
		
		<img src="../../assets/undraw_scrum_board_cesn.svg" alt="새로운 목표" width="200px"/>
		
		<div class="todocreate__section">목표 설정</div>
		<input type="text" placeholder="목표 이름" class="todocreate__input" v-model="title" />
		<input type="text" placeholder="세부 실천 내용" class="todocreate__input" v-model="text" />
		<div class="todocreate__section">달성 기간</div>
		<input type="date" value="2020-12-31" class="todocreate__input" style="font-size:14px" v-model="endDay"/>
		<div>{{errorMes}}</div>
		<input type="submit" value="Add to Plan" class="todocreate__submit" @click="submit()"/>
		
    </div>
	</div>
</template>

<script>
  export default {
    data(){
		return{
			endDay,
			title,
			text,
			errorMes:"",
			send:false,
		}
	},
    computed: {
    },
    mounted () {
    },
    methods: {
		submit(){
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();

			if(dd<10) {
  			  dd='0'+dd
			} 

			if(mm<10) {
   			  mm='0'+mm
			} 

			today = yyyy + '-' + mm+'-'+dd;
			var endDay = this.endDay.split('-');
			
			if(endDay[0] > yyyy){
				//성공
				this.send = true;
			}else if(endDay[0] == yyyy){
				if(endDay[1] > mm){
					//성공
					this.send = true;
				}else if(endDay[1] == mm){
					if(endDay[2] > dd){
						//성공
						this.send = true;
					}else{
						//실패
						this.send = false;
					}
				}else{
					//실패
					this.send = false;
				}
			}else{
				//실패
				this.send = false;
			}
			
			if(this.send == true){
				
				
				
				
				this.send = false;
			}
			
			console.log(this.title,this.text,today,this.endDay)
		}
		
	}
  }
</script>
<style scoped>
.todocreate {
  width: 100%;
  	height:100%;
  background-color: #f1f3f5;
  padding: 30px;
	box-sizing:border-box;
	display:flex;
	flex-direction:column;
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
  height : 85%;
  overflow-x:hidden;
  margin:8px 0px;
  background-color:white;
  border-radius:30px;
}
.todocreate__input {
  box-sizing: content-box;
  border-radius: 3px;
  min-width: 300px;
  width: 500px;
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
  width: 500px;
  box-sizing: content-box;
}
.todocreate__section{
  min-width:300px;
  width:510px;
  margin-top: 24px;
  font-size: 18px;
  font-family: "NanumSB";
  color: black;
  text-align:left;
}
	
</style>