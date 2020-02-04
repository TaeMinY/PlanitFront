<template>
	<div class="memo">
		<div class="memo_top">
			<h1 class="memo_title">Sticker Memo</h1>
			<img src="../../assets/plus.svg" class="plus_image" @click="add" alt="메모 추가하기"> 
		</div>
		<div class="memo_text" id="memo_text">
			<div class="memo_main" id="memo_main">
				<component v-for="item in buttons" :is="item"></component><br>
			</div>
		</div>
	</div>
</template>
<script>
	component('my-button2', {
		template: `<button @click="nice_fun()">개수확인</button>`
		,methods:{
			nice_fun:function(){
				app2.nice = '버튼추가 개수:'+app2.buttons.length;
			}
		}
	})
	export default {
		template: `<button @click="nice_fun()">개수확인</button>`,
		 data: {
			buttons: [],
			 nice: ''
		},
		methods: {
			add() {
				this.buttons.push('my-button2')
			}
		}
	}
</script>
<style scoped>
	.memo{
		width: 100%;
		height: 100%;
	}
	.memo_top{
		width: 100%;
		height: 13%;
	}
	.memo_title{
		width: 290px;
		height: 50px;
		float: left;
		margin: 40px auto;
		padding: 0;
		text-align: left;
		float: left;
	}

	.plus_image{
		float: right;
		width: 25px;
		height: 25px; 
		text-align: right;
		vertical-align: middle;
		margin-top: 45px;
		margin-right: 10%;
	}
	.memo_text{
		width: 93%;
		height: 80%;
		background-color: #ffffff;
		text-align: center;
		border: 0;
		border-radius: 20px;
	}
	.memo_main{
		width: 200px;
		height: auto;
		text-align: left;
		margin-left: 20px;
		margin-top: 15px;
		right: 30%;
	}
	.memo_textarea{
		background-color: #ced4da;
		width: 200px;
		height: 200px;
		border: 0;
		border-radius: 20px;
		resize: none;
		text-align: left;
		padding-top: 10px;
		padding-left: 10px;
		padding-bottom: 8px;
		padding-right: 6px;
		float: left;
		vertical-align: middle;
	}
	.button_save{
		font-size: 15px;
		font-style: normal;
		width: 200px;
		height: 25px;
		border: 1px solid #6C63FF;
		border-radius: 8px;
		background-color: #6C63FF;
		color: #ffffff;
		margin-top: 5px;
	}
</style>