<template>
    <div>
        <div v-for="(item ,index) in info"
             :key="index"
        >
            <v-subheader>
                <span class="date">{{day(item.publishDate)}}</span>
            </v-subheader>
            <articles

                      :title="item.jobTitle"
                      :num_list="item.jobsArray"
                      :cities="city(item.cities)"
                      :jobCount="item.jobCount"
                      :salaryLower="item.salaryLower"
                      :salaryUpper="item.salaryUpper"
                      :experienceLower="item.experienceLower"
                      :experienceUpper="item.experienceUpper"
            ></articles>
        </div>
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
            header:'',
            time:'',
            hidden:true,
            api_path:'/api/jobs',
            info:[],
            request: {
                lastCursor:'',
                pageSize:10,
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
            },
            city(obj) {
                let arr = [];
                for(let key in obj){
                    arr.push(key)
                }
                return arr
            },
            day(art_time) {
                let myDate = new Date();
                let y = myDate.getFullYear();
                let m = myDate.getMonth();
                let d = myDate.getDate();

                let this_time = new Date(art_time);
                let ty = this_time.getFullYear();
                let tm = this_time.getMonth();
                let td = this_time.getDate() + 1;

                let result = ty + '年' + (tm + 1) + '月' + td + '日';

                y === ty && m === tm && d === td && (result = '今天');
                y === ty && m === tm && d - 1 === td && (result = '昨天');

                return result
            },
            remix(data_json) {
                let result = {};
                let header;
                for (let i in data_json){
                    header = this.day(i.createdAt);
                    if (result.hasOwnProperty(header)){
                        result[header].add(i)
                    }else {
                        let name = header;
                        result[name] = {}
                    }
                };
                console.log(result)
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .loading
        text-align center
    .date
        font-size 23px
</style>
