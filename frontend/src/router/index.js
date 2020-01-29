import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
Vue.use(VueRouter)

const routes = [
  	{
    	path: '/',
    	name: 'Landing',
    	component: Landing
  	},
	{
		path: '/signin',
		name: 'Signin',
		component: Signin
	},
	{
		path: '/signup',
		name: 'Signup',
		component: Signup
	}
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
