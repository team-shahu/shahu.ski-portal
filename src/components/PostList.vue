<script setup lang="ts">
    import { ref, onMounted, defineProps } from 'vue';
    import { client } from '../main.js';

    // props
    let props = defineProps({
        page: Number,
        category_id: String,
    });

    // limit, offsetの設定
    let limit: number = 50;
    let offset: number = (props.page ?? 1 - 1) * limit;

    // queries錬成
    let queries: any;
    if(props.category_id === undefined){
        // category指定がない
        queries = {
            limit: limit,
            offset: offset,
            orders: '-createdAt',
        };
    }else{
        // category指定がある
        queries = {
            limit: limit,
            offset: offset,
            orders: '-createdAt',
            filters: 'category[contains]'+props.category_id,
        };
    }

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
            console.log(contents);
        })
        .catch((err) => console.log(err));
    });

</script>
<template>
    <div class="grid grid-cols-3 gap-3">
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
</template>