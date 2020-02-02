<template>
  <div class="memo">
    <div class="memo__title">Sticker Memo</div>
    <div class="memo__main">
      <div class="memo_plus">
        <img src="../../assets/plus.svg" alt="추가하기" class="memo_plus_image" @cl />
      </div>
      <div class="memo_input">
        <textarea class="memo_input_text" placeholder="오늘은 무슨 일이 일어나고 무슨 생각을 할까요?"></textarea>
        <input type="button" class="memo_save" placeholder="Save" value="Save" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.memo {
  width: 100%;
  height: 100%;
  background-color: #f1f3f5;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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
  height: 80%;
  overflow-x: hidden;
}
.memo_input {
  width: 250px;
  height: 260px;
  background-color: #6c63ff;
}
.memo_input_text {
  width: 250px;
  height: 230px;
  border: 0;
  border-radius: 5px;
  text-align: left;
  float: left;
  resize: none;
  color: #f8f9fa;
}
.memo_input_text::placeholder {
  font-size: 17px;
  font-style: normal;
  padding-left: 3px;
  padding-top: 3px;
  color: #f8f9fa;
}
.memo_plus {
  width: 25px;
  height: 25px;
  text-align: right;
  float: right;
}
.memo_plus_image {
  width: 25px;
  height: 25px;
  text-align: right;
  float: right;
}
.memo_save {
  width: 250px;
  height: 30px;
  color: #f8f9fa;
  border-top: 1px solid #f8f9fa;
}
</style>