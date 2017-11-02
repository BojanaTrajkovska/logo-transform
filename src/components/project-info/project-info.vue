<template>

    <div class="project-info">
        <div class="close-action" @click="$emit('close')">
            <i class="fa fa-close"></i>
        </div>
        <div class="project-content">
            <h1 class="title">{{ project.name }}</h1>
            <h2 class="sub-title">The sub title bla bla</h2>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum
            </p>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum
            </p>
        </div>


        <div class="project-images">

            <div class="image-container" v-for="image in project.images">
                <div class="project-image" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></div>
            </div>

        </div>
    </div>


</template>


<script>

    export default {

        props: {
            project: {},
            show: Boolean
        }

    }

</script>


<style lang="scss">
    @import "project-info";
</style>