<template>
    <div>
        <div class="loading" v-show="false">
            <v-progress-circular indeterminate color="primary"/>
        </div>
        <div>{{info}}</div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { format } from 'timeago.js'
    export default {
        name: "Details",
        props: {
            id : String,
        },
        beforeCreated() {
            this.change_title(this.id)
        },
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
                && (this.hidden = true)
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