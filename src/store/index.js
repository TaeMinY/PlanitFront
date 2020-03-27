import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  transtionStatus: "bottom",
	  userdata:{},
	  wrap : 'left',
	  status : {
		  planner:true,
		  community:false,
		  plans:true,
		  calendar:false,
		  memo:false,
	  },
  },
  mutations: {
  },
  actions: {
	 CHECK({ commit, state },data) {
		return new Promise((resolve, reject) => {
			console.log(data)
				axios
					.post("http://taemin.dev/planit/account/passwordfind", data)
					.then(value => {
						resolve(value);
					})
					.catch(err => {
						reject(err);
					});
			});
		},
	 signin({ commit, state },data) {
		return new Promise((resolve, reject) => {
			console.log(data)
				axios
					.post("http://taemin.dev/planit/account/signin", data)
					.then(value => {
						console.log(value);
						resolve(value);
					})
					.catch(err => {
						reject(err);
					});
			});
		},
	signup({ commit, state },data) {
		return new Promise((resolve, reject) => {
			console.log(data)
				axios
					.post("http://taemin.dev/planit/account/signup", data)
					.then(value => {
						console.log(value);
						resolve(value);
					})
					.catch(err => {
						reject(err);
					});
			});
		},
	 token({ commit, state },data) {
		return new Promise((resolve, reject) => {
			console.log(data)
				axios
					.post("http://taemin.dev/planit/account/token", data)
					.then(value => {
						console.log(value);
						resolve(value);
					})
					.catch(err => {
						reject(err);
					});
			});
		},
	  profile({ commit, state },data) {
		return new Promise((resolve, reject) => {
			console.log("a",data)
				axios
					.post("http://taemin.dev/planit/account/profile", data)
					.then(value => {
						console.log(value);
						resolve(value);
					})
					.catch(err => {
						reject(err);
					});
			});
		},
	  TODO__CREATE({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios
				  .post("http://taemin.dev/planit/account/todocreate",data)
				  .then(value=>{
				  	console.log(value);
				  	resolve(value);
			  	  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  TODO__DELETE({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios
				  .post("http://taemin.dev/planit/account/tododelete",data)
				  .then(value=>{
				  	console.log(value);
				  	resolve(value);
			  	  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	   TODO__COMPLETE({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios
				  .post("http://taemin.dev/planit/account/todocomplete",data)
				  .then(value=>{
				  	console.log(value);
				  	resolve(value);
			  	  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	   FIND__DATA({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios.post("http://taemin.dev/planit/account/DataFind",data).then(value=>{
				  console.log(value);
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	   POST__CREATE({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios.post("http://taemin.dev/planit/post/postcreate",data).then(value=>{
				  console.log(value);
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  FIND__POST({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios.post("http://taemin.dev/planit/post/postfind",data).then(value=>{
				  console.log("요청들어옴");
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  FIND__MY__POST({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios.post("http://taemin.dev/planit/post/findmypost",data).then(value=>{
				  console.log("요청들어옴");
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  FIND__COMMENT({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios.post("http://taemin.dev/planit/post/commentfind",data).then(value=>{
				  console.log("요청들어옴");
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  CREATE__COMMENT({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios.post("http://taemin.dev/planit/post/commentcreate",data).then(value=>{
				  console.log("요청들어옴");
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  FIND__COMMENT__ALL({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios.post("http://taemin.dev/planit/post/commentfindall",data).then(value=>{
				  console.log("요청들어옴");
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  DELETE__COMMENT({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios.post("http://taemin.dev/planit/post/deletecomment",data).then(value=>{
				  console.log("요청들어옴");
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  POST__LIKE({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  axios.post("http://taemin.dev/planit/post/postlike",data).then(value=>{
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  CHANGE__PASSWORD({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  axios.post("http://taemin.dev/planit/account/changepassword",data).then(value=>{
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  TODO__COMPLETE__TIME({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  axios.post("http://taemin.dev/planit/account/todocompletetime",data).then(value=>{
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  MEMO__SAVE({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  axios.post("http://taemin.dev/planit/account/memosave",data).then(value=>{
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  MEMO__DELETE({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  axios.post("http://taemin.dev/planit/account/memodelete",data).then(value=>{
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  POST__DELETE({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  axios.post("http://taemin.dev/planit/post/postdelete",data).then(value=>{
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  MY__PROFILE__SAVE({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  axios.post("http://taemin.dev/planit/account/profilesave",data).then(value=>{
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	  END({commit,state},data){
		  return new Promise((resolve,reject)=>{
			  axios.post("http://taemin.dev/planit/account/end",data).then(value=>{
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
  },
  modules: {
  }
})
