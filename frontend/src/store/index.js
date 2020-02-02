import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  transtionStatus: "bottom",
	  userdata:{},
	  wrap : 'left'
  },
  mutations: {
  },
  actions: {
	 signin({ commit, state },data) {
		return new Promise((resolve, reject) => {
			console.log(data)
				axios
					.post("http://nulllove-rgobq.run.goorm.io/api/account/signin", data)
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
					.post("http://nulllove-rgobq.run.goorm.io/api/account/signup", data)
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
					.post("http://nulllove-rgobq.run.goorm.io/api/account/token", data)
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
			console.log(data)
				axios
					.post("http://nulllove-rgobq.run.goorm.io/api/account/profile", data)
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
				  .post("http://nulllove-rgobq.run.goorm.io/api/account/todocreate",data)
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
				  .post("http://nulllove-rgobq.run.goorm.io/api/account/tododelete",data)
				  .then(value=>{
				  	console.log(value);
				  	resolve(value);
			  	  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  },
	   FIND__DATA({ctodocreateommit,state},data){
		  return new Promise((resolve,reject)=>{
			  console.log(data);
			  axios.post("http://nulllove-rgobq.run.goorm.io/api/account/DataFind",data).then(value=>{
				  console.log(value);
				  resolve(value);
			  })
			  .catch(err=>{
				  reject(err);
			  })
		  })
	  }
  },
  modules: {
  }
})
