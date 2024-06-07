<script setup>
import {RouterLink} from 'vue-router';

defineProps({
    note: {
        type: Object,
        default: {
            id: 1,
            title: "Note",
            createdAt: "01.01.2000",           
        },
    },
});
</script>
<template>
    <RouterLink :to="{name: 'note', params: {noteID: note.id}}" class="block lg:max-w-sm md:max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-slate-800 dark:border-gray-700 dark:hover:bg-slate-700">
        <h5 class="mb-2 font-semibold text-3xl tracking-tight text-gray-900 dark:text-white text-ellipsis overflow-hidden">{{ note.title }}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Created at: {{ note.createdAt }}</p>
    </RouterLink>
</template>