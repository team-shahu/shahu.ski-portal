<script setup lang="ts">
  import ThemeSwitcher from './components/ThemeSwitcher.vue';

</script>
<template>
  <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
    <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
      <div class="flex items-center justify-between">
        <router-link to="/">
          <a class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
            <img class="w-10 h-auto" width="100" height="100" src="/icon.png" alt="しゃふすきー" />
            shahu.ski
          </a>
        </router-link>
        <div class="sm:hidden">
          <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>
      <div id="navbar-image-and-text-1" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <router-link to="/">
            <a class="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-current="page">はじめに</a>
          </router-link>
          <router-link to="/donate">
            <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">寄付</a>
          </router-link>
          <router-link to="/faq">
            <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">FAQ</a>
          </router-link>
          
          <router-link to="/more-info">
            <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">もっと！</a>
          </router-link>
          <!-- Dark mode toggle -->
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  </header>
  
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
