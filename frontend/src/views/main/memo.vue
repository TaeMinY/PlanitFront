<template>
	<div class="memo">
		<div class="memo_top">
			<h1 class="memo_title">Sticker Memo</h1>
			<button class="button_plus"><img class="plus_button_image" src="../../assets/plus.svg" /> Add Memo</button>	
		</div>
		<div class="memo__text"></div>
	</div>
</template>
<script>
	export default {
	}
</script>
<style scoped>
	.memo{
		width: 100%;
		height: 100%;
	}
	.memo_top{
		width: 100%;
		height: 20%;
	}
	.memo_title{
		width: 290px;
		height: 50px;
		float: left;
		margin: 40px auto;
		padding: 0;

	}
</style>