<template>
  <div class="todo">
    <div class="todo__title">
		<div>Plans</div>
		<img @click="create()" alt="create" src="../../assets/playlist_add-24px.svg" width="42px" 
			 style="cursor: pointer;" />
	</div>
    <div class="todo__main">
		<div class="todo__box" v-for="(value,index) in todoData" :key=index>
			<div>D-DAY  {{day(value.endDay)}}</div>
			<div class="todo__box__title">{{value.title}}</div>
			<div class="todo__box__text"> {{value.text}}</div>
			<div class="todo__box__day">
				<div>
					시작일자 : {{value.startDay}}
				</div>
				<div>
					목표일 : {{value.endDay}}
				</div>
			</div>
		</div>
    </div>
	</div>
</template>

<script>

	
  export default {
    data(){
		return{
			todoData : [],
			valueDeterminate : 50,
		}
	}
    ,
    computed: {
		
    },
    mounted () {
    },
    methods: {
		day(endDay){
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
    		var diffDate_1 = today instanceof Date ? today : new Date(today);
    		var diffDate_2 = endDay instanceof Date ? endDay : new Date(endDay);

    		diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    		diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());

    		var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    		diff = Math.ceil(diff / (1000 * 3600 * 24));

			return diff;
		},
		create(){
			this.$router.push("/main/todocreate")
		},
		
	},
	 created(){
			this.$store
        			.dispatch("FIND__DATA", {
          				token: localStorage.getItem("token")
        			})
        			.then(response => {
						console.log(response);
						if(response.data.result == true){
							console.log("11");
							this.todoData = response.data.userdata.todo;
							console.log(this.todoData)
						}else{
						}
					}).catch(e=>{console.log(e);})
		}
  }
</script>
<style >
	* > *{
		overflow-y:hidden !imporatnt;
	}
.todo {
  width: 100%;
  	height:100%;
  background-color: #f1f3f5;
  padding: 30px;
	box-sizing:border-box;
	display:flex;
	flex-direction:column;
	  justify-content: flex-start;
}
.todo__title {
  font-size: 40px;
	min-height:60px;
  font-style: normal;
  font-family: ProductSansM;
  color: #000000;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 0;
  margin-bottom: 0;
  padding: 0;
  display:flex;
  justify-content:space-between;
	overflow-y:hidden;
}
	.todo__title > *{
		overflow-y:hidden !important;
		height:fit-content;
	}
.todo__box{
  width:100%;
  min-height:200px;
  margin:8px 0px;
  background-color:white;
  border-radius:30px;
  box-sizing:border-box;
  padding: 20px;
}
	.todo__box__title{
		font-size:28px;
			font-family: "ProductSansR", "NanumSRB";
	}
	.todo__box__text{
		font-size:20px;
		font-family: "ProductSansR", "NanumSRB";
	}
	.todo__box__day{
		width:100%;
		display:flex;
		justify-content:center;
		
		
	}

.todo__main {
}
</style>