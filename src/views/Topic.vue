<template>
    <v-app>
        <toolbar></toolbar>
        <v-container fluid grid-list-lg>
            <div style="height: 61px"></div>
            <articles></articles>
        </v-container>
    </v-app>
</template>

<script>
    import axios from 'axios'
    import Toolbar from '@/components/Toolbar.vue'
    import Articles from '@/components/Articles.vue'
    export default {
        name: 'Topic',
        components: {
            Toolbar,
            Articles
        },
        data:()=>({
        }),
        mounted () {
            this.getArticleInfo()
        },
        methods:{
            getArticleInfo() {
                axios
                    .get('/api/topic')
                    .then(this.ArtInfoSucc)
            },
            ArtInfoSucc(res) {
                console.log(res)
            }
        }
    }
</script>

<style lang="stylus" scoped>
</style>
