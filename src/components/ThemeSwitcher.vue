<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        data() {
            return {
                theme: localStorage.getItem('theme') || 'light',
            };
        },
        methods: {
            toggleTheme() {
                if (this.theme === 'light') {
                    document.querySelector('html')!.classList.add('dark')
                    document.querySelector('html')!.classList.remove('light')
                    document.querySelector('html')!.classList.remove('default')
                    document.querySelector('html')!.classList.remove('auto')
                    localStorage.setItem('theme', 'dark');
                    this.theme = 'dark';
                } else {
                    document.querySelector('html')!.classList.add('light')
                    document.querySelector('html')!.classList.remove('dark')
                    document.querySelector('html')!.classList.remove('default')
                    document.querySelector('html')!.classList.remove('auto')
                    localStorage.setItem('theme', 'light');
                    this.theme = 'light';
                }
            },
        },
    });
</script>

<template>
    <button v-if="theme=='dark'" @click="toggleTheme()" type="button" class="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="dark">
        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    </button>
    <button v-if="theme=='light'" @click="toggleTheme()" type="button" class="hs-dark-mode-active:block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="light">
        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 8a2 2 0 1 0 4 4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
    </button>
</template>