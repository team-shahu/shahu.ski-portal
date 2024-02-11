import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import MoreInfo from "../pages/MoreInfo.vue";
import Donate from "../pages/Donate.vue";
import Faq from "../pages/FAQ.vue";
import Search from "../pages/Search.vue";
import Content from "../pages/Content.vue";
import Category from "../pages/Category.vue";

export const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/more-info",
    name: "MoreInfo",
    component: MoreInfo,
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate,
  },
  {
    path: "/faq",
    name: "FaQ",
    component: Faq,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/content/doc/:content_id",
    name: "Content",
    component: Content,
    props: true,
  },
  {
    path: "/category/:category_id",
    name: "Category",
    component: Category,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;