<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { client } from '../main.js';
    import { useRoute } from "vue-router";
    const route = useRoute();

    // propsからidを取得
    let content_id: string = route.params?.content_id as string;
    let content: any = ref([]);

    let isLoaded = ref(false);

    onMounted(() => {
        // データの取得
        client.get({
        endpoint: 'contents',
        contentId: content_id,
      })
      .then((res) => {
        content.value = res;
        isLoaded.value = true;
      });
    });
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="mt-3 xl:hidden">
        <a class="inline-flex items-center gap-x-1 mb-5 text-sm text-gray-800 hover:text-rose-400 dark:text-gray-200 dark:hover:text-rose-500" href="#" onclick="window.history.back();">
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          前のページへ戻る
        </a>
    </div>
    <!-- Loading -->
    <div v-if="!isLoaded" class="min-h-[15rem] flex flex-col">
        <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <div class="flex justify-center">
            <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-rose-400 rounded-full dark:text-rose-500" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
            </div>
            </div>
        </div>
    </div>
    <!-- Post -->
    <div v-if="isLoaded">
      <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto mb-5 dark:border-gray-700">
        <span v-for="category in content.category" :key="category.id">
            <router-link :to="'/category/'+category.id" class="mr=1">
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-800/30 dark:text-rose-500">
                    <span class="w-1.5 h-1.5 inline-block rounded-full bg-rose-800 dark:bg-rose-500"></span>
                    {{ category.name }}
                </span>
            </router-link>
        </span>
        <h1 class="mt-2 block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">{{ content.title }}</h1>
      </div>

      <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto micro-cms pb-20" v-html="content.content"></div>
    </div>
  </div>
</template>

<style>
  .micro-cms {
      @apply dark:text-white;
      overflow-x: auto;
  }
  .micro-cms table {
      @apply w-full border-collapse border-2 border-gray-200 dark:border-gray-700;
  }
  .micro-cms img {
      @apply dark:text-white w-full min-w-[30vw] bg-white dark:bg-gray-800 pl-0 pr-0 ml-0 mr-0 rounded-lg;
  }
  /* タブレット */
  @media (min-width: 640px) {
      .micro-cms img {
          @apply max-w-[50vw];
      }
  }
  /* PC */
  @media (min-width: 1024px) {
      .micro-cms img {
          @apply max-w-[50vw];
      }
  }

  /* 画像を左寄せ */
  .micro-cms figure {
      @apply text-left;
  }
  .micro-cms h1 {
      @apply mt-5 mb-5 block text-2xl;
  }
  .micro-cms h2 {
      @apply mt-5 mb-5 font-bold md:text-2xl;
  }
  .micro-cms h3 {
      @apply mt-5 mb-5 text-rose-400 font-semibold;
  }
  .micro-cms p {
      @apply text-lg ml-5 pb-3;
  }
  .micro-cms a {
      @apply text-rose-400 hover:underline dark:text-rose-500 dark:hover:text-rose-400;
  }
  .micro-cms ul {
      @apply list-disc list-inside;
  }
  .micro-cms ol {
      @apply list-decimal list-inside;
  }
  .micro-cms blockquote {
      @apply border-l-4 border-rose-500 text-gray-500 dark:border-rose-500 dark:text-rose-500 pl-2;
  }
  .micro-cms blockquote p {
      @apply pl-3;
  }
  .micro-cms pre {
      @apply p-4 bg-gray-100 dark:bg-gray-800;
  }
  .micro-cms li {
      @apply mb-1;
  }
</style>