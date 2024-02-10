<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { client } from '../main.js';

    let contents: any = ref([]);

    // mounted
    onMounted(() => {
        client.get({
        endpoint: 'blogs',
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
        <div v-for="content in contents" :key="content.id" :to="'/content/doc/'+content.id">
            <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img class="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description">
                <div class="p-4 md:p-5">
                    <span v-for="category in content.category" :key="category.id">
                        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                            <span class="w-1.5 h-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                            {{ category.name }}
                        </span>&nbsp;
                    </span>
                    <h3 class="mt-2 text-lg font-bold text-gray-800 dark:text-white">
                    {{ content.title }}
                    </h3>
                    <p class="mt-1 text-gray-500 dark:text-gray-400">
                    {{ content.createdAt }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>