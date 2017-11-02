<template>

    <div class="portfolio">
        <navigation></navigation>

        <div class="project" v-for="project in projects" @click="show = true; currentProject = project">

            <div class="project-overlay"></div>
            <div class="project-image"  v-bind:style="{ backgroundImage: 'url(' + project.images[0] + ')' }">

            </div>

            <div class="text"> <strong> {{ project.name }} </strong></div>
               
        </div>

        <transition name="project-info">
            <project-info v-if="show" @close="show=false" :project="currentProject"></project-info>
        </transition>
    </div>

</template>

<script>

    import Navigation from '../navigation/navigation.vue'
    import ProjectInfo from '../project-info/project-info.vue';

    export default {
        components: {
            Navigation,
            ProjectInfo
        },
        data: () => ({
            show: false,
            currentProject : {},
            projects: [
                {
                    name: "Stanbena kukja - Partizanska",
                    description: "Project 1 Description",
                    images: [
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_valokuvaupotus.jpg',

                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_julkisivu-helsingintielle.jpg'

                    ]
                },
                {
                    name: "Skolska menza - JBT",
                    description: "Project 2 Description",
                    images: [
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_valokuvaupotus.jpg',
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_lintuperspektiivi.jpg',
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_julkisivu-helsingintielle.jpg'

                    ]
                },{
                    name: "Project 1",
                    description: "Project 1 Description",
                    images: [
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_lintuperspektiivi.jpg',
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_lintuperspektiivi.jpg',
                        ''

                    ]
                },
                {
                    name: "Project 2",
                    description: "Project 2 Description",
                    images: [
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_julkisivu-helsingintielle.jpg',
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_lintuperspektiivi.jpg',
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_julkisivu-helsingintielle.jpg'

                    ]
                },{
                    name: "Project 1",
                    description: "Project 1 Description",
                    images: [
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_julkisivu-helsingintielle.jpg',
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_lintuperspektiivi.jpg',
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_julkisivu-helsingintielle.jpg'

                    ]
                },
                {
                    name: "Project 2",
                    description: "Project 2 Description",
                    images: [
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_valokuvaupotus.jpg',
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_lintuperspektiivi.jpg',
                        'https://ukiark.fi/wp-content/uploads/2014/09/JUST_julkisivu-helsingintielle.jpg'

                    ]
                },

            ],
        })
    }

</script>

<style lang="scss">
    @import 'portfolio';
</style>