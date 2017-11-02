<template>

    <div class="project-container" >

        <navigation></navigation>
        <div class="background" ></div>

        <div class="the-project" v-for="( project, key) in projects">
            <transition name="fade">
                <project :project="project" v-if="key==currentProjectIndex"></project>
            </transition>
        </div>
    </div>

</template>

<script>

    import * as _ from 'lodash';
    import Project from '../project/project.vue';
    import Navigation from '../navigation/navigation.vue';
    export default {

        components: {
            Project,
            Navigation
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
                if( this.currentProjectIndex === this.projects.length -1 ){
                    this.currentProjectIndex = 0;
                }else {
                    this.currentProjectIndex++;
                }
            }
        },
        created() {
            document.addEventListener('wheel', _.throttle(this.onMouseWheel, 6000))
        }

    }

</script>


<style lang="scss">
    @import "project-list";
</style>