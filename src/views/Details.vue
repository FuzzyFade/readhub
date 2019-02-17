<template>
    <div>
        <div class="loading" v-show="false">
            <v-progress-circular indeterminate color="primary"/>
        </div>
        <div>
            <v-list>
                <v-list-tile>
                    {{insr(info.title)}}
                </v-list-tile>
                <v-list-tile>
                    {{get_time(info.createdAt)}}
                </v-list-tile>
            </v-list>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { format } from 'timeago.js'
    export default {
        name: "Details",

        data:() => ({
            hidden : false,
            api_path:'/api' + window.location.pathname,
            info :''
        }),
        mounted () {
            this.get_article_info();
        },
        methods: {
            change_title(id){
                document.title = id
            },
            get_article_info() {
                this.hidden = false;
                axios
                    .get(this.api_path)
                    .then(this.get_data)
                    .catch(error => console.log(error))
            },
            get_data(res) {
                (res.status === 200)
                && (this.info = res.data)
                && this.change_title(this.info.title)
                && (this.hidden = true)
            },
            get_time(time) {
                let d = new Date(time);
                time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                return format(time,'zh_CN');
            },
            insr (str){
                let p1=/([A-Za-z_])([\u4e00-\u9fa5]+)/gi;
                let p2=/([\u4e00-\u9fa5]+)([A-Za-z_])/gi;
                return str.replace(p1, "$1 $2").replace(p2, "$1 $2")
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .loading
        text-align center
</style>