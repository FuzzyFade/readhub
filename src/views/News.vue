<template>
    <div>
        <articles :title="item.title"
                  :time="get_time(item.publishDate)"
                  :detail="item.summary"
                  :link="item.url"
                  :author_message="item.siteName +' '+ item.authorName"
                  v-for="item in info"
                  :key="item.id"
        ></articles>
    </div>
</template>

<script>
    import axios from 'axios'
    import { format } from 'timeago.js'
    import Articles from '@/components/NewsArticles'
    export default {
        name: 'Topic',
        components: {
            Articles,
        },
        data:() => ({
            api_path:'/api/news',
            info:[],
            request: {
                lastCursor:'',
                pageSize:20,
            },
        }),
        mounted () {
            this.get_article_info();
            window.addEventListener('scroll', this.get_scroll);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.get_scroll);
        },
        methods:{
            get_scroll() {
                let scroll_top = document.documentElement.scrollTop || document.body.scrollTop;
                let height = document.documentElement.clientHeight || document.body.clientHeight;
                let scroll_height = document.documentElement.scrollHeight || document.body.scrollHeight;
                scroll_top + height === scroll_height && this.get_article_info()
            },
            get_article_info() {
                axios
                    .get(this.api_path + '?' + 'pageSize=' + this.request.pageSize + '&lastCursor=' + this.request.lastCursor)
                    .then(this.get_data)
                    .catch(error => console.log(error))
            },
            get_data(res) {
                (res.status === 200)
                && (this.info = this.info.concat(res.data.data))
                && (this.request.lastCursor = (new Date(res.data.data[this.request.pageSize - 1].publishDate)).getTime())
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