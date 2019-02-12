<template>
    <v-app>
        <toolbar></toolbar>
        <v-container fluid grid-list-lg>
            <div style="height: 60px"></div>
            <div>
                <articles :title="item.title"
                          :time="get_time(item.createdAt)"
                          :detail="item.summary"
                          :site_list="item.newsArray"
                          v-for="item in info.data"
                          :key="item.id"
                ></articles>
            </div>
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
            info:'',
            request: {
                lastCursor:'',
                pageSize:20,
            }
        }),
        created (){
            window.addEventListener('scroll', this.get_scroll);
        },
        mounted() {
            this.getArticleInfo();
        },
        methods:{
            getArticleInfo() {
                axios
                    .get('/api/topic?pageSize=' + this.request.pageSize + '&lastCursor=' + this.request.lastCursor)
                    .then(this.ArtInfoSucc)
            },
            get_scroll() {
                let scroll = document.documentElement.scrollTop || document.body.scrollTop;
                let height = document.documentElement.clientHeight ||document.body.clientHeight;

            },
            lazyload() {
                let last_id = this.info.data[0].order;
                axios
                    .get('/api/topic?pageSize=' + this.request.pageSize + '&lastCursor=' + last_id)

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
