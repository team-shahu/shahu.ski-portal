import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import Content from "../pages/Content.vue";

export const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/content/doc/:content_id",
    name: "Content",
    component: Content,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;