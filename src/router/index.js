/*
 * @Author: Han
 * @Date: 2022-05-12 11:34:27
 * @LastEditors: Han
 * @LastEditTime: 2022-05-17 13:59:04
 * @FilePath: \newAdmin\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main/main",
  },
  {
    path: "/main",
    redirect: "/main/main",
  },
  {
    path: "/login",
    name: "LOGIN",
    component: () => import("@/views/LoginView/LoginView"),
    meta: {
      title: "Login Web - Han",
      keepAlive: false,
    },
  },
  {
    path: "/main",
    name: "HOMEMAIN",
    component: () => import("@/views/HomeView"),
    meta: {
      title: "后台管理",
      keepAlive: false,
    },
    children: [
      {
        path: "/main/main",
        name: "MAIN",
        component: () => import("@/views/MainView/MainView"),
        meta: { name: "主页", title: "后台管理", keepAlive: false, class: "el-icon-location" },
      },
      {
        path: "/main/api",
        name: "API",
        component: () => import("@/views/MainView/ApiView"),
        meta: { name: "API", title: "API接口管理", keepAlive: false, class: "el-icon-menu" },
      },
      {
        path: "/main/blog",
        name: "BLOG",
        component: () => import("@/views/MainView/BlogView"),
        meta: { name: "博客", title: "博客管理", keepAlive: false, class: "el-icon-document" },
      },
      {
        path: "/main/bing",
        name: "BING",
        component: () => import("@/views/MainView/BingView"),
        meta: { name: "大饼", title: "大饼管理", keepAlive: false, class: "el-icon-setting" },
      },
    ],
  },
  {
    path: "*",
    name: "NOTFOUND",
    component: () => import("@/views/NotFound"),
    meta: {
      title: "404 NotFound",
      keepAlive: false,
    },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 路由重复跳转时报错解决
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

//路由前置守卫；用来设置元信息
router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title);
  // 判断是否登陆
  if ('x') {
    if (to.name === "LOGIN") {
      next();
    } else {
      next({
        replace: true,
        name: "LOGIN",
      });
    }
  } else {
    if (to.name === "LOGIN") {
      next({
        replace: true,
        name: "MAIN",
      });
    } else {
      next();
    }
  }
});

export default router;
