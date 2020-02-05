<template>
	<div class="memo">
		<div class="memo__title">
      <div>Memo</div>
      <img
        @click="create()"
        alt="create"
        src="../../assets/plus.svg"
        width="30px"
        style="cursor: pointer;"
      />
    </div>
	<div class="memo__main">
		<div v-for="(v,i) in memodata" class="memo__box">
			<img class="memo__setting" src="../../assets/more_vert-24px.svg" @click="modal(i)" />
			{{v}}
		</div>
	</div>
		<v-dialog v-model="dialog" max-width="600px" style="z-index:100000">
      
      <v-card>
        <v-card-title>
          <span class="headline">Memo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <textarea class="textarea"  rows="10" v-model="text"></textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteMemo()">Delete</v-btn>
          <v-btn color="blue darken-1" text @click="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
		
	</div>
</template>
<script>
export default {
	data(){
		return{
			memodata:[],
			dialog: false,
			progress: 0,
			text:""
		}
	},
	created() {
	  	this.$store.state.status.plans = false;
		this.$store.state.status.calendar = false;
	  	this.$store.state.status.memo = true;
		this.progress = 0;
		this.$store
        .dispatch("token", {
          token: localStorage.getItem("token")
        })
        .then(response => {
          if (response.data.result) {
		  		this.memodata = response.data.userdata.userdata.memo
          } else {
          }
        })
        .catch(e => {
          console.log("에러");
        });
	},
	beforeDestory(){
  		this.$store.state.status.plans = false;
		this.$store.state.status.calendar = false;
	  	this.$store.state.status.memo = false;
	},
	methods:{
		create(){
			this.memodata.push("")
			this.modal(this.memodata.length-1)
		},
		modal(i){
			this.progress = i;
			this.dialog = !this.dialog
		},
		deleteMemo(){
			this.memodata = [
          		...this.memodata.slice(0, this.progress),
          		...this.memodata.slice(this.progress + 1)
        	]
			//this.memodata를 보내줘서 저장하면 끝
			this.$store
        .dispatch("MEMO__DELETE", {
          token: localStorage.getItem("token"),
		  memo: this.memodata
        })
        .then(response => {
          if (response.data.result) {
          } else {
          }
        })
        .catch(e => {
          console.log("에러");
        });
			this.dialog = false
			this.text =""
		},
		save(){
			this.memodata[this.progress] = this.text
			//this.memodata를 보내줘서 저장하면 끝
this.$store
        .dispatch("MEMO__SAVE", {
          token: localStorage.getItem("token"),
		  memo: this.memodata
        })
        .then(response => {
          if (response.data.result) {
          } else {
          }
        })
        .catch(e => {
          console.log("에러");
        });
			this.dialog = false
			this.text =""
		}
	}
}
</script>
<style scoped>
	.memo{
	  width: 100%;
  height: 100%;
  background-color: #f1f3f5;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
	.memo__main{
	margin-top:16px;
	max-height:100%;
	overflow-y:auto;
		display:flex;
		flex-wrap:wrap;
	}
	.memo__box{
		width:200px;
		min-width:200px;
		min-height:200px;
		background-color:#36afff;
		opacity:0.7;
		border-radius:20px;
		margin: 15px;
		position:relative;
	}
	.memo__setting{
		position:absolute;
		top:5px;
		right:5px;
		width:30px;
		height:30px;
		z-index:100;
	}
	.memo__title {
  font-size: 40px;
  min-height: 60px;
  font-style: normal;
  font-family: ProductSansM;
  color: #000000;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 0;
  margin-bottom: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
}
	.memoed{
		height:100%;
		display:flex;
		justify-content:center;
		align-items:center;
		flex-direction:column;
		overflow-x: hidden;
  		margin: 8px 0px;
  		background-color: white;
  		border-radius: 30px;
		position:relative;
	}
	.textarea{
		width:100%;
		color:black;
		border:1px solid black;
	}
	.v-card__text{
		padding: 0px !important;
		font-family: "NanumSR";
	}
</style>