<template>
    <div style="margin-left: 20px;max-width: 50%">
        <div>
            <div class="title" v-if="!hidden">
                <span>行情简报</span>
            </div>
            <div style="max-width: 50%">
                <div v-for="(item, index) in info"
                     :key="index"
                >
                    <v-card>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Brief",
        data:() => ({
            api_path:'/api/jobs/brief',
            info:[],
            hidden :true,
        }),
        created () {
            this.get_article_info();
        },
        methods: {
            get_article_info() {
                this.hidden = true;
                axios
                    .get(this.api_path)
                    .then(this.get_data)
                    .catch(error => console.log(error))
            },
            get_data(res) {
                (res.status === 200)
                && (this.info = res.data.data)
                && (this.hidden = false)
            },
            get_time(time) {
                let d = new Date(time);
                time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                return format(time, 'zh_CN');
            },
        },
    }
</script>

<style lang="stylus" scoped>
    .title
        font-size 18px
        color #757575
</style>