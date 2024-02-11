import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import MoreInfo from "../pages/MoreInfo.vue";
import Donate from "../pages/Donate.vue";
import Faq from "../pages/FAQ.vue";
import Search from "../pages/Search.vue";
import Content from "../pages/Content.vue";
import Category from "../pages/Category.vue";

const DEFAULT_TITLE = 'しゃふすきーポータル'

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
    meta: { title: DEFAULT_TITLE+' | もっと！' }
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate,
    meta: { title: DEFAULT_TITLE+' | 寄付' }
  },
  {
    path: "/faq",
    name: "FaQ",
    component: Faq,
    meta: { title: DEFAULT_TITLE+' | FAQ' }
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: { title: DEFAULT_TITLE+' | 検索' }
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

router.afterEach((to, from) => {
  document.title = (to.meta.title as string) || DEFAULT_TITLE
})

export default router;