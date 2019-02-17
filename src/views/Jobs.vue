<template>
    <div>
        <div style="display: flex;">
            <div style="width:100%;">
                <div v-for="(ele,index) in remix(info)"
                     :key="index"
                >
                    <div class="date">
                        <span v-html="ele.time"></span>
                    </div>
                    <articles v-for="(item,index) in ele.data"
                              :key="index"

                              :title="item.jobTitle"
                              :num_list="item.jobsArray"
                              :cities="city(item.cities)"
                              :jobCount="item.jobCount"
                              :salaryLower="item.salaryLower"
                              :salaryUpper="item.salaryUpper"
                              :experienceLower="item.experienceLower"
                              :experienceUpper="item.experienceUpper"
                              :jobsArray="item.jobsArray"
                    ></articles>
                </div>
            </div>
            <brief
            >
            </brief>
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
    import Brief from  '@/components/Brief'
    export default {
        name: 'Topic',
        components: {
            Articles,
            Brief
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
        created () {
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
            remix(info) {
                let arr = [];
                for (let i=0;i<info.length;i++){
                    arr.push({
                        time:this.day(info[i].publishDate),
                        data:info[i]
                    })
                }
                const map = function(arr) {
                    let newArr = [];
                    arr.forEach((address , i) => {
                        let index = -1;
                        let alreadyExists = newArr.some((newAddress,j) => {
                            if (address.time === newAddress.time) {
                                index = j;
                                return true;
                            }
                        });
                        if (!alreadyExists){
                            newArr.push({
                                time:address.time,
                                data:[address.data]
                            });
                        }else {
                            newArr[index].data.push(address.data)
                        }
                    });
                    return newArr;
                };
                return map(arr)
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .loading
        text-align center
    .date
        font-size 26px
        font-weight 500
        color #757575
        padding-bottom 10px
</style>
