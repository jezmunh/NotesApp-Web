<script setup>
import NavBar from "../components/NavBar.vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import {ref, onBeforeMount} from 'vue';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

let form = ref({
  title: "",
  content: ""
});

console.log(route.params.noteID);

onBeforeMount(async() => {
    axios.get(`http://localhost:3000/api/v1/notes/${route.params.noteID}`, {

    }).then(function (response) {
        console.log(response.data.data);
        form.value.title = response.data.data.title;
        form.value.content = response.data.data.content;
    }).catch(function (error) {
        console.log(error);
    })
});

function editNoteClient () {
  console.log(form.value.title);
  console.log(form.value.content);
  axios.patch(`http://localhost:3000/api/v1/notes/${route.params.noteID}`, {
    title: form.value.title,
    content: form.value.content
  }).then(function (response) {
    router.go();
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
        <button @click="editNoteClient" class="text-white bg-sky-600 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-slate-800">Create a note</button>
      </form>
  </div>
  
  
</template>
