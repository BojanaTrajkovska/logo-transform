<template>

    <div class="navigation">
        <i class="fa fa-bars menu-icon" @click="openMenu = !openMenu"></i>


        <div class="nav-menu" v-bind:class="{'open' : openMenu }">
            <div><router-link to="/">Home</router-link></div>
            <div><router-link to="/portfolio">Projects</router-link></div>
            <div><router-link to="/portfolio">Contact</router-link></div>
        </div>

    </div>

</template>

<script>

    export default {
        data : () => ({
            openMenu : false
        })
    }

</script>

<style lang="scss">
    @import "navigation";
</style>