<script setup>
import NavBar from "../components/NavBar.vue";
import NoteCard from "../components/NoteCard.vue";
import { RouterLink } from "vue-router";
import {onMounted, onBeforeMount, ref} from "vue";
import axios from 'axios';


const notes = ref();

// onMounted(async () => {
//     notes.value = await api.GetAllNotes();
//     console.log(notes.value.data);
// });
onBeforeMount(async() => {    
    // notes.value = await api.GetAllNotes();    
    axios.get('http://localhost:3000/api/v1/notes', {
    
    }).then(function (response) {
      console.log(response.data.data);
      notes.value = response.data.data;

    })
    console.log(notes.value);
});


console.log(JSON.stringify(notes.value));




</script>

<template>
  <div>
    <NavBar />
    <nav class="flex flex-wrap items-center justify-between mx-auto p-10">
      <p class="font-semibold text-3xl text-white">{{ $t("home.header")}}</p>
      <RouterLink to="/create" class="text-sky-500 no-underline hover:underline">{{ $t("home.add_note")}}</RouterLink>
    </nav>
    <div v-if="notes.length <= 0">
    <p class="mx-auto text-xl p-10 text-white text-center">{{ $t("home.note_absence")}}</p> <!--No notes yet. It's time to make your first one!-->
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-1 gap-4 p-10">
      <NoteCard v-for="(item, index) in notes" :note="item" :key="index" />    
    </div>
  </div>
  
  
</template>
