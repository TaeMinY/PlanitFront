<template>
	<div class="memo">
		<div class="memo__title">Sticker Memo</div>
		<div class="memo__main">
			<div class="memo_plus">
				<button class="plus_button" @click="handle_toggle">메모 추가하기</button>	
			</div>
		</div>
	</div>
</template>
<script>
export default {
}
</script>
<style scoped>
.memo {
  width: 100%;
  height:100%;
  background-color: #f1f3f5;
  padding: 30px;
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
}
.memo__title {
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
.memo__main {
	height : 80%;
	overflow-x:hidden;
}
.memo_plus{
	width: 150px;
	height: 100px;
}
.plus_button{
	width: 300px;
	height: 200px;
	border: 1px solid #6C63FF;
	border-radius: 8px;
	background-color: #6C63FF;
	font-size: 20px;
	text-align: center;
	color: #f8f9fa;
	
}
</style>