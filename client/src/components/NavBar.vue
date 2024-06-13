<script setup>
import { RouterLink } from 'vue-router';
import LanguageSwitcher from "../components/LanguageSwitcher.vue";

</script>
<template>  
    <header class="mx-auto">
        <nav class="bg-slate-800 text-white w-dvw flex flex-wrap items-center justify-between mx-auto p-4">
            <span class="font-bold text-2xl">NotesApp</span>
            <LanguageSwitcher></LanguageSwitcher>        
            <!-- <RouterLink to="/" class="hover:underline decoration-dashed">Section 1</RouterLink>
            <RouterLink to="/" class="hover:underline decoration-dashed">Section 2</RouterLink>
            <RouterLink to="/" class="hover:underline decoration-dashed">Section 3</RouterLink>             -->
        </nav>
    </header>
</template>