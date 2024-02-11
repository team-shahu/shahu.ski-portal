<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { client } from "../main.js";

    let contents: any = ref([]);
    let isLoaded = ref(false);

    onMounted(() => {
        client.get({
        endpoint: 'faq',
        queries: { limit: 100, orders: '-createdAt' }
      })
      .then((res) => {
        console.log(res);
        res.contents.forEach((content: any) => {
          console.log(content);
          contents.value.push(content);
        });
        isLoaded.value = true;
      });
    });
</script>

<template>
    <main id="content" role="main" class="max-w-[85rem] mx-auto bg-white py-10 px-4 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div class="pb-10">
        <!-- Page Heading -->
        <div class="max-w-3xl mb-10">
            <p class="mb-2 text-sm font-semibold text-blue-600">FAQ</p>
            <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">よくありそうな質問</h1>
            <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">なさそうでありそう、でも知っていると役に立つかもしれない質問集</p>
        <!-- End Page Heading -->
        </div>
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
        <!-- Content -->
        <div v-if="isLoaded">
            <div class="space-y-5 md:space-y-8 mb-10" v-for="content in contents" :key="content.id">
                <div class="space-y-3">
                    <h2 class="text-1xl font-bold md:text-2xl dark:text-white">{{ content.question }}</h2>

                    <p class="text-lg ml-5 text-gray-800 dark:text-gray-200" v-html="content.answer"></p>
                </div>

                <div class="mt-2 mb-3 ml-5 bg-blue-50 border border-blue-500 text-sm text-gray-500 rounded-lg p-5 dark:bg-blue-600/[.15]" v-if="content.description">
                    <div class="flex">
                        <svg class="flex-shrink-0 h-4 w-4 text-blue-600 mt-0.5 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                        </svg>
                        <div class="ms-3">
                            <h3 class="text-blue-600 font-semibold dark:font-medium dark:text-white">
                                備考
                            </h3>
                            <p class="mt-2 text-gray-800 dark:text-slate-400">
                                {{ content.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>