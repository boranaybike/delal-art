import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/on-sale",
    name: "onSale",
    component: () => import("../views/OnSaleView.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/PortfolioView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
