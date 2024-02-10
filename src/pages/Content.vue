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
        <a class="inline-flex items-center gap-x-1 mb-5 text-sm text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-500" href="#" onclick="window.history.back();">
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          前のページへ戻る
        </a>
    </div>
    <!-- Loading -->
    <div v-if="!isLoaded" class="min-h-[15rem] flex flex-col">
        <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <div class="flex justify-center">
            <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
            </div>
            </div>
        </div>
    </div>
    <!-- Post -->
    <div v-if="isLoaded">
      <div class="mb-5 dark:border-gray-700">
        <span v-for="category in content.category" :key="category.id">
            <router-link :to="'/category/'+category.id" class="mr=1">
                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                    <span class="w-1.5 h-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                    {{ category.name }}
                </span>
            </router-link>
        </span>
        <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">投稿者:&nbsp;<span class="pr-3" v-for="auther in content.auther" :key="auther.id">{{ auther.name }}</span></p>
        <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">{{ content.title }}</h1>
      </div>

      <div class="dark:text-white" v-html="content.content"></div>
    </div>
  </div>
</template>

<style scoped>
  img {
    width: 50vw;
    height: auto;
  }
</style>