<template>
    <div class="bg-gray-800 flex justify-between items-center">
        <div class="flex p-2 text-white">
            <p>
                <router-link to="/">WeTube</router-link>
            </p>
            <ul class="flex px-4">
                <li class="px-2">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="px-2">
                    <router-link to="/about">About</router-link>
                </li>
                <li class="px-2">
                    <router-link to="/videos">Public videos</router-link>
                </li>
            </ul>
        </div>

        <div class="p-2">
            <router-link to="/register" class="px-2 py-1 rounded bg-green-500 text-white">Sign up</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>