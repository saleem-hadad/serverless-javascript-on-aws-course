<template>
    <div class="p-4">
        <p>Recommended Videos</p>

        <div class="w-full grid grid-cols-3 gap-4">
            <Video v-for="video in videos" :key="video" :video="video" />
        </div>
    </div>
</template>

<script>
import Video from './Video.vue';
import config from '../config'

export default {
    data() {
        return {
            videos: []
        }
    },
    mounted() {
        fetch(config.domains.api + '/videos')
            .then(response => response.json())
            .then(response => {
                this.videos = response.videos
            })
    },
    components: {
        Video
    }
}
</script>