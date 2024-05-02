<script setup>
import NavBar from "../components/NavBar.vue";
import NoteCard from "../components/NoteCard.vue";
import { RouterLink } from "vue-router";
import {onMounted, ref } from "vue";
import * as api from "../api/api.js";

const notes = ref();

onMounted(async () => {
    notes.value = await api.GetAllNotes();
    console.log(notes.value.data);
});
</script>

<template>
  <div>
    <NavBar />
    <nav class="flex flex-wrap items-center justify-between mx-auto p-10">
      <p class="font-semibold text-3xl text-white">List of the notes</p>
      <RouterLink to="/create" class="text-sky-500 no-underline hover:underline">Add new note</RouterLink>
    </nav>
    <!-- <p class="mx-auto text-xl p-10 text-white text-center">There are no notes currently. It's time to make your first one!</p> -->
    <div class="grid lg:grid-cols-4 md:grid-cols-1 gap-4 p-10">
      <NoteCard v-for="(item, index) in notes" :note="item.data" :key="index" />    
    </div>
  </div>
  
  
</template>
