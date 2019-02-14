<template>
    <div id="app">
        <v-app>
            <router-view name="toolbar"/>
            <v-container fluid grid-list-lg>
                <div style="height: 60px"></div>
                <router-view/>
                <backtop/>
            </v-container>
        </v-app>
    </div>
</template>

<script>
    import Toolbar from "@/components/Toolbar"
    import Backtop from "@/components/Backtop";
    export default {
        name: 'App',
        components: {Backtop, Toolbar},
        component:{
            Toolbar,
            Backtop
        }
    }
</script>

<style lang="stylus" scoped>
    #app
        font-family 'PingFang SC', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        /*text-align: center;*/
        color #2c3e50
</style>