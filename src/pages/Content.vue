<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { client } from '../main.js';
    import { useRoute } from "vue-router";
    const route = useRoute();

    // propsからidを取得
    let content_id: string = route.params?.content_id as string;
    console.log(content_id);
    let content: any = ref([]);

    onMounted(() => {
        // データの取得
        client.get({
        endpoint: 'contents',
        contentId: content_id,
      })
      .then((res) => {
        content.value = res;
        console.log(content);
      });
    });
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="mt-3 xl:hidden">
        <a class="inline-flex items-center gap-x-1 mb-5 text-sm text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-500" href="#" onclick="window.history.back();">
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          前のページへ戻る
        </a>
    </div>
    <div class="mb-5 dark:border-gray-700">
      <span class="mb-1 text-sm font-semibold text-blue-600 pr-3" v-for="category in content.category" :key="category.id">{{ category.name }}</span>
      <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">投稿者:&nbsp;<span class="pr-3" v-for="auther in content.auther" :key="auther.id">{{ auther.name }}</span></p>
      <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">{{ content.title }}</h1>
    </div>

    <div class="dark:text-white" v-html="content.content"></div>
  </div>
</template>

<style scoped>
  img {
    width: 50vw;
    height: auto;
  }
</style>