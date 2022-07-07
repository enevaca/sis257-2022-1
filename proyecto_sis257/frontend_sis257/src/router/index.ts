import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/index";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import { getTokenFromLocalStorage } from "@/helpers";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/login", name: "login", component: LoginView },
    {
      path: "/interpretes",
      name: "interpretes",
      component: () => import("../views/Interprete.vue")
    },
    {
      path: "/interpretes/crear",
      name: "interpretesCrear",
      component: () => import("../components/interprete/InterpreteCreate.vue")
    },
    {
      path: "/interpretes/editar/:id",
      name: "interpretesEditar",
      component: () => import("../components/interprete/InterpreteEdit.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    }
  ]
});

router.beforeEach(async to => {
  const publicPages = ["/", "/login"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout();
    authStore.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router;
