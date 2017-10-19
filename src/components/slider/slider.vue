<template>

    <div class="slider">

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
                if (this.index == this.slides.length - 1) {
                    this.index = 0;
                } else {
                    this.index++;
                }
            }, 5000);
        },
    }


</script>


<style lang="scss">
    @import "slider";
</style>