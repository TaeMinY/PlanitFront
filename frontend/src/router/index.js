import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../views/Landing.vue")
  },
  {
    path: "/wrap",
    name: "wrap",
    component: () => import("../views/wrap.vue"),
    children: [
      {
        path: "main",
        name: "main",
        component: () => import("../views/Main.vue"),
        children: [
          {
            path: "",
            name: "calendar",
            component: () => import("../views/main/calendar.vue")
          },
          {
            path: "todo",
            name: "todo",
            component: () => import("../views/main/todo.vue")
          },
          {
            path: "todocreate",
            name: "todocreate",
            component: () => import("../views/main/todocreate.vue")
          },
          {
            path: "memo",
            name: "meno",
            component: () => import("../views/main/memo.vue")
          }
        ]
      },
	  {
		  path: 'community',
		  name: 'community',
		  component:()=>import("../views/community.vue")
		  
	  }	  
    ]
  },
  {
    path: "/account/",
    name: "Account",
    component: () => import("../views/account.vue"),
    children: [
      {
        path: "signin",
        name: "signin",
        component: () => import("../views/Signin.vue")
      },
      {
        path: "signup",
        name: "signup",
        component: () => import("../views/Signup.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
