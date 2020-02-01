<template>
	<div class="memo">
		<h1>Sticker Memo Test</h1>
		<div class="memo__title">Sticker Memo</div>
	</div>
	<div class="memo_main">
		<div class="memo">
			test
		</div>
	</div>
<script>
export default {

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
.memo {
	background-color: #6C63FF;		
}
</style>