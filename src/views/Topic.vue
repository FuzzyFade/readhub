<template>
    <v-app>
        <toolbar></toolbar>
        <v-container fluid grid-list-lg>
            <div style="height: 60px"></div>
            <articles :title="item.title"
                      :time="'时间'"
                      :detail="item.summary"
                      :link_title="item.newsArray[0].title"
                      :link="item.newsArray[0].url"
                      :site="item.newsArray[0].siteName"
                      v-for="item in info.data"
                      :key="item.id"
            ></articles>
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
            info:''
        }),
        mounted() {
            this.getArticleInfo()
        },
        methods:{
            getArticleInfo() {
                axios
                    .get('/api/topic')
                    .then(this.ArtInfoSucc)
            },
            ArtInfoSucc(res) {
                if (res){
                    this.info = res.data
                }else{

                }
            }
        },
    }
</script>

<style lang="stylus" scoped>
</style>
