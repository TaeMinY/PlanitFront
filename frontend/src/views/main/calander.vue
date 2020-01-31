<template>
  <div class="calander">
	<p class="calander_title">Calander</p>
		<div class="calander_main"> 
		</div>
  </div>
</template>

<script>
export default {
  name: "calander",
  components: {
  },
  created(){
  },
  methods:{
  }
};
</script>
<style scoped>
	.calander{
		width:100%;
		height:100%;
		background-color:#f1f3f5;
		padding:30px;
	}
	.calander_title{
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
</style>