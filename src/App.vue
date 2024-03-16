<script setup lang="ts">
  import Header from './components/Header.vue';

</script>
<template>
  <Header />
  
  <div class="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
    <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
      <div class="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
        <div class="text-center md:text-start">
          <p class="text-xs text-white/[.8] uppercase tracking-wider">
            重要なお知らせ
          </p>
          <p class="mt-1 text-white font-medium">
            スマートフォンでしゃふすきーをご利用の方へ
          </p>
        </div>

        <div class="mt-3 text-center md:text-start md:flex md:justify-end md:items-center">
          <router-link class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/content/doc/ktlgo8h43jzc">
            Read more
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <router-view class="mt-5"></router-view>
</template>
