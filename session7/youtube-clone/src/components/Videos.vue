<template>
    <div>
        <p>Recommended Videos</p>

        <div class="flex w-full flex-wrap">
            <Video v-for="video in videos" :key="video" :title="video" />
        </div>
    </div>
</template>

<script>
import Video from './Video.vue';

export default {
    data() {
        return {
            videos: [
                "video1",
                "video2",
                "video3",
                "video4",
                "video5",
                "video6",
                "video7",
                "video8",
                "video9",
                "video10",
            ]
        }
    },
    components: {
        Video
    }
}
</script>