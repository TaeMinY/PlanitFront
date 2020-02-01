<template>
  <div class="todo">
    <div class="todo__title">
		<div>Plans</div>
		<img @click="create()" alt="create" src="../../assets/playlist_add-24px.svg" width="42px" 
			 style="cursor: pointer;" />
	</div>
    <div class="todo__main">
		<div class="todo__box" v-for="(value,index) in [1,2,3,4,5,6,7]" :key=index></div>
			
    </div>
	</div>
</template>

<script>
  export default {
    data: () => ({
    }),
    computed: {
    },
    mounted () {
    },
    methods: {
		create(){
			this.$router.push("/main/todocreate")
		}
		
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
}
.todo__main {
}
</style>