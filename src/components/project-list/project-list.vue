<template>


    <div class="project-container" >
        <div class="background" style="position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f2f2f2;
    transform: scale(0.7, 1);"></div>
        <div v-for="( project, key) in projects">
            <transition name="fade">
                <project :project="project" v-if="key==currentProjectIndex"></project>
            </transition>
        </div>
    </div>

</template>

<script>


    import Project from '../project/project.vue';

    export default {

        components: {
            Project
        },
        props: {
            projects: Array
        },
        data: function () {
            return {
                currentProjectIndex: 0
            }
        },
        methods: {
            onMouseWheel(e) {
                if( this.currentProjectIndex == this.projects.length -1 ){
                    this.currentProjectIndex = 0;
                }else {
                    this.currentProjectIndex++;
                }
            }
        },
        created() {
            document.addEventListener('mousewheel', this.onMouseWheel)
        }

    }

</script>


<style lang="scss">
    @import "project-list";
</style>