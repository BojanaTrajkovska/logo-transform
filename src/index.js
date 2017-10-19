require('./index.scss');

import Vue from 'vue';
import Logo from './components/logo/logo.vue';
import ProjectList from './components/project-list/project-list.vue';

new Vue({
    components: {
        Logo,
        ProjectList
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
        setTimeout(() => {
            this.showProjectList = true;
        }, 12000);
    }
}).$mount('#r-boot');
