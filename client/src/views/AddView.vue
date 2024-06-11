<script setup>
import NavBar from "../components/NavBar.vue";
import { RouterLink, useRouter} from "vue-router";
import {ref} from 'vue';
import axios from 'axios';

const router = useRouter();

let form = ref({
  title: "",
  content: ""
})

function newNoteClient () {
  console.log(form.value.title);
  console.log(form.value.content);
  axios.post('http://localhost:3000/api/v1/notes', {
    title: form.value.title,
    content: form.value.content
  }).then(function (response) {
    console.log(response);
    router.push({ name: 'home'});
  }).catch(function (error) {
    console.log(error);
  });
  
}
</script>

<template>
  <div class="flex flex-col min-h-screen min-w-screen">
    <NavBar />
    <nav class="flex flex-wrap items-center justify-between mx-auto p-10 w-dvw">
      <p class="font-semibold text-3xl text-white">Note creation</p>
      <RouterLink to="/" class="text-sky-500 no-underline hover:underline">< Back to all notes</RouterLink>
    </nav>

    <form @submit.prevent class="lg:max-w-lg md:max-w-sm mx-auto p-10 w-dvw">
        <div class="mb-5">
          <label for="title_note" class="block mb-2 lg:text-2xl md:text-sm font-medium text-gray-900 dark:text-white">Heading for note</label>
          <input type="text" v-model="form.title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the note heading here..." required />
        </div>
        <div class="mb-5">
            <label for="note_text" class="block mb-2 lg:text-2xl md:text-sm font-medium text-gray-900 dark:text-white">Your note</label>
            <textarea id="note_text" v-model="form.content" rows="9" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Enter the note context..."></textarea>
        </div>
        <div class="flex items-start mb-5">
        </div>
        <button @click="newNoteClient" class="text-white bg-sky-600 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-slate-800">Create a note</button>
      </form>
  </div>
  
  
</template>
