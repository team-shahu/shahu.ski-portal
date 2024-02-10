<script setup lang="ts">
    import PostList from '../components/PostList.vue';
</script>

<template>
    <section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div class="flex w-full mx-auto text-left">
        <div class="relative inline-flex items-center mx-auto align-middle">
            <div class="text-center">
            <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 dark:text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                Welcome to <br class="hidden lg:block">
                shahu.ski
            </h1>
            <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">ようこそしゃふすきーへ！<br>ここには利用規約を始めとした様々なドキュメントがあります</p>
            <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div class="mt-3 rounded-lg sm:mt-0">
                <button class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Go shahu.ski</button>
                </div>
                <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <button class="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white bg-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">ドキュメントページ</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        <section id="intro">
        <div class="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
            <!--img class="object-cover object-center w-full rounded-xl" alt="hero" src="/assets/images/placeholders/hero.webp"-->
        </div>
        </section>
        <section id="posts">
            <div class="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
                <PostList />
            </div>
        </section>
    </div>
    </section>
</template>