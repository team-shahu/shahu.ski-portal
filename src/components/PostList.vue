<script setup lang="ts">
    import { ref, onMounted, defineProps } from 'vue';
    import { client } from '../main.js';

    // props
    let props = defineProps({
        category_id: String,
        search_text: String,
    });

    // limit, offsetの設定
    let page = ref(1);
    let maxPage = ref(1);
    let limit: number = 50;
    let offset: number = (page.value - 1) * limit;

    // queries錬成
    let queries: any = {
            limit: limit,
            offset: offset,
            orders: '-createdAt',
        };
    // category_idがある場合
    if(props.category_id !== undefined){
        // filters: 'category[contains]'+props.category_id,を追加
        queries.filters = 'category[contains]'+props.category_id;
    }
    // search_textがある場合
    if(props.search_text !== undefined){
        // search_text: を追加
        queries.search_text = props.search_text;
    }

    console.log(queries);

    let isLoaded = ref(false);
    let contents: any = ref([]);

    // mounted
    onMounted(() => {
        client.get({
            endpoint: 'contents',
            queries: queries
        })
        .then((res) => {
            // 順次contentsへpush
            res.contents.forEach((content: any) => {
                contents.value.push(content);
            });
            // totalCountからmaxPageを算出
            maxPage.value = Math.ceil(res.totalCount / limit);
            isLoaded.value = true;
        })
        .catch((err) => console.log(err));
    });

</script>
<template>
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
    <!-- Post List -->
    <div v-if="isLoaded">
        <div class="grid grid-cols-3 gap-3 mb-10">
            <div v-for="content in contents" :key="content.id">
                <router-link :to="'/content/doc/'+content.id">
                    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img class="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description">
                        <div class="p-4 md:p-5">
                            <span v-for="category in content.category" :key="category.id">
                                <router-link :to="'/category/'+category.id" class="mr=1">
                                    <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                                        <span class="w-1.5 h-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                                        {{ category.name }}
                                    </span>
                                </router-link>
                            </span>
                            <h3 class="mt-2 text-lg font-bold text-gray-800 dark:text-white">
                            {{ content.title }}
                            </h3>
                            <p class="mt-1 text-gray-500 dark:text-gray-400">
                            {{ content.createdAt }}
                            </p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <nav class="mb-10 flex items-center gap-x-1" v-if="maxPage!=0">
        <!-- Previous -->
        <button v-if="page==1" type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" disabled>
            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <span>Previous</span>
        </button>
        
        <button v-if="page!=1" type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <span>Previous</span>
        </button>

        <!-- Page Number -->
        <div class="flex items-center gap-x-1">
            <button v-if="page!=1" type="button" class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">{{ page-1 }}</button>
            <button type="button" class="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:text-white dark:focus:bg-gray-500" aria-current="page">{{ page }}</button>
            <button v-if="maxPage<page" type="button" class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">{{ page+1 }}</button>
        </div>

        <!-- Next -->
        <button v-if="maxPage<=page" type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" disabled>
            <span>Next</span>
            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <button v-if="maxPage>page" type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
            <span>Next</span>
            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
    </nav>
    <div v-if="maxPage==0" class="mb-10">
        <p class="text-center text-gray-500 dark:text-gray-400">一致する投稿が見つかりませんでした。</p>
    </div>
</template>