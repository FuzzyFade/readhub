<template>
    <div>
        <articles :title="item.jobTitle"
                  :num_list="item.jobsArray"
                  :cities="item.cities"
                  :jobCount="item.jobCount"
                  :salaryLower="item.salaryLower"
                  :salaryUpper="item.salaryUpper"
                  :experienceLower="item.experienceLower"
                  :experienceUpper="item.experienceUpper"
                  v-for="item in info"
                  :key="item.id"
        ></articles>
        <div class="loading" v-show="!hidden">
            <v-progress-circular indeterminate color="primary"/>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import { format } from 'timeago.js'
    import Articles from '@/components/JobsArticles'
    export default {
        name: 'Topic',
        components: {
            Articles,
        },
        data:() => ({
            hidden:true,
            api_path:'/api/jobs',
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
                this.hidden = false;
                axios
                    .get(this.api_path + '?' + 'pageSize=' + this.request.pageSize + '&lastCursor=' + this.request.lastCursor)
                    .then(this.get_data)
                    .catch(error => console.log(error))
            },
            get_data(res) {
                (res.status === 200)
                && (this.info = this.info.concat(res.data.data))
                && (this.request.lastCursor = (new Date(res.data.data[this.request.pageSize - 1].publishDate)).getTime())
                && (this.hidden = true)
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
    .loading
        text-align center
</style>
