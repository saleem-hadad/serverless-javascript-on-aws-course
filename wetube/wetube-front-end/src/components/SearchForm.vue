<template>
    <div class="w-full p-4 flex justify-center">
        <input v-model="search" class="border p-3" type="text" placeholder="Search...">
        <button @click="submit" class="bg-red-500 text-white p-3">Submit</button>
    </div>

    <p v-if="showErrorMessage" class="text-orange-500 text-center block">We don't have the video that you're looking for!</p>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            showErrorMessage: false
        }
    },
    methods: {
        submit() {
            this.showErrorMessage = true
        }
    }
}
</script>