import VueRouter from "vue-router";

import TheOrder from "@/pages/TheOrder";

const routes = [
  {
    path: "/",
    redirect: "/order",
  },
  {
    path: "/order",
    component: TheOrder,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
