import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import PersonalCard from "../views/PersonalCard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/personal-card",
    name: "personal-card",
    component: PersonalCard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
