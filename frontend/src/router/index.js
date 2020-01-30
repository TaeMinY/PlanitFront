import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  	{
    	path: '/',
    	name: 'Landing',
    	component: () => import("../views/Landing.vue"),
  	},
	{
    	path: '/main',
    	name: 'Main',
    	component: () => import("../views/Main.vue"),
  	},
	{
    path: "/account",
    name: "Account",
    component: () => import("../views/account.vue"),
    children: [
      { path: "signin", name: "signin", component: () => import("../views/Signin.vue") },
      { path: "signup", name: "signup", component: () => import("../views/Signup.vue") },
    ]
  },
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
