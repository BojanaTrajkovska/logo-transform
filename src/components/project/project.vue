<template>

    <div class="project">
        <slider :slides="project.images"></slider>

        <div class="basic-info-container">
            <div class="title-container">
                <h2 class="city">{{ project.name }}</h2>
                <h1 class="title">{{ project.description }}</h1>
            </div>
            <div class="show-more" @click="show = true">
                <span>More</span></div>
        </div>

        <project-info :show="show"></project-info>
    </div>

</template>

<script>
    import Slider from '../slider/slider.vue';
    import ProjectInfo from '../project-info/project-info.vue';

    export default {

        components: {
            Slider,
            ProjectInfo,
        },

        props: {
            project: Object
        },
        data: function () {
            return {
                show: false
            }
        }

    }

</script>

<style lang="scss">
    @import "project";
</style>