<template>

    <div class="slider">

        <div class="slider-arrows slider-prev">
            <i class="fa fa-angle-left" @click="prevSlide()"></i>
        </div>

        <div class="slider-arrows slider-next" >
            <i class="fa fa-angle-right" @click="nextSlide()"></i>
        </div>

        <div class="slide "
             v-for="(slide, key) in slides"
             v-bind:class="{'show' : key== index}"
             v-bind:style="{ 'backgroundImage': 'url(' + slide + ')' }"></div>
    </div>

</template>


<script>

    export default {

        props: {
            slides: Array
        },
        data: function () {
            return {
                index: 0
            }
        },
        created() {

            setInterval(() => {
               this.nextSlide();
            }, 5000);
        },
        methods:{
            nextSlide(){
                if (this.index == this.slides.length) {
                    this.index = 0;
                } else {
                    this.index++;
                }
            },
            prevSlide(){
                if (this.index == 0) {
                    this.index = this.slides.length;
                } else {
                    this.index--;
                }
            }
        }
    }


</script>


<style lang="scss">
    @import "slider";
</style>