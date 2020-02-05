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
            name: "todo",
            component: () => import("../views/main/todo.vue")
          },
		  {
            path: "todocreate",
            name: "todocreate",
            component: () => import("../views/main/todocreate.vue")
          },
          {
            path: "calendar",
            name: "calendar",
            component: () => import("../views/main/calendar.vue")
          },
          
          {
            path: "memo",
            name: "memo",
            component: () => import("../views/main/memo.vue")
          }
        ]
      },
	  {
    path: "profile",
    name: "profile",
    component: () => import("../views/profile.vue"),
    children: [
      {
        path: "",
        name: "",
        component: () => import("../views/profile/profile.vue")
      },
      {
        path: "edit",
        name: "edit",
        component: () => import("../views/profile/editprofile.vue")
      }
    ]
  },  
	  {
		  path: 'community',
		  name: 'community',
		  component:()=>import("../views/community.vue"),
		  children: [
          {
            path: "",
            name: "see",
            component: () => import("../views/community/See.vue")
          },
          {
            path: "create",
            name: "create",
            component: () => import("../views/community/Create.vue")
          },
        ]
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
      },
		{
        path: "find",
        name: "find",
        component: () => import("../views/FindPassword.vue")
      },
		{
        path: "changepwd/:_id",
        name: "changepwd",
        component: () => import("../views/changepwd.vue")
      },
    ]
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
