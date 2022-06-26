import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/interpretes",
      name: "interpretes",
      component: () => import("../views/Interprete.vue"),
    },
    {
      path: "/interpretes/crear",
      name: "interpretesCrear",
      component: () => import("../components/interprete/InterpreteCreate.vue"),
    },
    {
      path: "/interpretes/editar/:id",
      name: "interpretesEditar",
      component: () => import("../components/interprete/InterpreteEdit.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
