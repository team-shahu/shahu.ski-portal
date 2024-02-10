<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from "vue-router";
    import { client } from '../main.js';
    import PostList from '../components/PostList.vue';

    const route = useRoute();

    const category_id: string = route.params?.category_id as string;
    let category_name = ref('');

    onMounted(() => {
        client.get({
            endpoint: 'categories',
            queries: {
                limit: 1,
                filters: 'id[equals]'+category_id,
            }
        })
        .then((res) => {
            category_name.value = res.contents[0].name;
        });
    });
    
</script>

<template>
    <div class="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{{ category_name }}</h1>
        <div class="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
            <PostList :category_id="category_id" />
        </div>
    </div>
</template>