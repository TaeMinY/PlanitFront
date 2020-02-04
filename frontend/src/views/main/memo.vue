<template>
	<div class="memo">
		<div class="memo_top">
			<h1 class="memo_title">Sticker Memo</h1>
			<input type="button" class="plus_button" @onclick="addMemo()" value="+" placeholder="+">
		</div> 
		<div class="memo_text" id="memo_text">
			<div class="memo_main" id="memo_main">
				<textarea class="memo_textarea" v-mobel="content"></textarea>
			</div>
			<div class="memo_text_plus" id="memo_text_plus">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return{
				content: ''
			}
		},
		methods: {
			addMemo(){
            	var plus_div = document.createElement('div');
            	plus_div.innerHTML = document.getElementById('memo_text');
            	document.getElementById('memo_text_plus').appendChild(plus_div);
        	},
        	delMemo(obj){
            	document.getElementById('memo_main').removeChild(obj.parentNode);
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

	.plus_button_image{
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
		width: 93%;
		height: auto;
		text-align: left;
	}
	.memo_textarea{
		background-color: #ced4da;
		width: 200px;
		height: 200px;
		border: 0;
		border-radius: 20px;
		resize: none;
		text-align: left;
		margin-top: 20px;
		padding-top: 8px;
		padding-left: 6px;
		padding-bottom: 8px;
		padding-right: 6px;
		float: left;
		vertical-align: middle;
	}
</style>