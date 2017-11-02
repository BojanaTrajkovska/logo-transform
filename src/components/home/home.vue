<template>

    <div>
        <!--<logo v-if="!showProjectList"></logo>-->
        <project-list v-if="showProjectList" :projects="projects"></project-list>
        <!--<logo-cilinder></logo-cilinder>-->
    </div>
</template>

<script>

    import Logo from '../logo/logo.vue';
    import ProjectList from '../project-list/project-list.vue';
    import LogoCilinder from '../logo-cilinder/logo-cilinder.vue';

    export default {
        components: {
            Logo,
            ProjectList,
            LogoCilinder
        },
        data: function () {
            return {
                projects: [
                    {
                        name: "Project 1",
                        description: "Project 1 Description",
                        images: [
                            'https://ukiark.fi/wp-content/uploads/2014/09/JUST_valokuvaupotus.jpg',
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
                    }

                ],
                showProjectList: false
            }
        },
        created() {
//            setTimeout(() => {
                this.showProjectList = true;
//            }, 12000);
        }
    }

</script>