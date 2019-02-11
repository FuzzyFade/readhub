<template>
    <v-app>
        <toolbar></toolbar>
        <v-container fluid grid-list-lg>
            <div style="height: 60px"></div>
            <articles :title="item.title"
                      :time="get_time(item.updatedAt)"
                      :detail="item.summary"
                      :site_list="item.newsArray"
                      v-for="item in info.data"
                      :key="item.id"
            ></articles>
            <backtop></backtop>
        </v-container>
    </v-app>
</template>

<script>
    import axios from 'axios'
    import { format } from 'timeago.js'
    import Toolbar from '@/components/Toolbar.vue'
    import Articles from '@/components/Articles.vue'
    import Backtop from '@/components/Backtop.vue'
    export default {
        name: 'Topic',
        components: {
            Toolbar,
            Articles,
            Backtop
        },
        data:()=>({
            info:''
        }),
        mounted() {
            this.getArticleInfo();
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
                    console.log(404)
                }
            },
            get_time(time) {
                let d = new Date(time);
                time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                return format(time,'zh_CN');
            }
        },
    }
</script>

<style lang="stylus" scoped>
</style>
