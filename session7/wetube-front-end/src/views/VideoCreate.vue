<template>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div class="text-center">
      <h1 class="font-bold">Create new video</h1>
    </div>
    <form class="mt-8" @submit.prevent="submit">
      <div class="rounded-md shadow-sm">
        <div>
          <input v-model="title" aria-label="title" name="title" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Video title">
        </div>
        <div class="-mt-px">
          <input v-model="description" aria-label="Description" name="description" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Info about the video">
        </div>
        <div>
          <input v-model="photo" aria-label="Photo" name="photo" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Video photo thump.">
        </div>
      </div>

      <div class="mt-6">
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          Create new video
        </button>
      </div>
    </form>
  </div>
</div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: '',
            description: '',
            photo: ''
        }
    },
    methods: {
        submit() {
            axios.post('http://localhost:3000/videos', {
                title: this.title,
                description: this.description,
                photo: this.photo
            }).then(() => {
                this.$router.push({ path: '/' })
            })
        }
    },
}
</script>