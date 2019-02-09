<template>
    <v-app>
        <toolbar></toolbar>
        <v-container fluid grid-list-lg>
            <div style="height: 61px"></div>
            <articles></articles>
            <articles></articles>
            <articles></articles>
            <articles></articles>
            <articles></articles>
            <articles></articles>
            <articles></articles>
            <articles></articles>
        </v-container>
    </v-app>
</template>

<script>
    import Toolbar from '@/components/Toolbar.vue'
    import Articles from '@/components/Articles.vue'
    import axios from 'axios'
    export default {
        name: 'Topic',
        components: {
            Toolbar,
            Articles
        },
        methods:{

        }
    }
</script>

<style lang="stylus" scoped>
</style>
