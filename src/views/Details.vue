<template>
    <div>
        <div>
            <v-list>
                <v-list-tile>
                    <span class="title" v-html="insr(info.title)"></span>
                </v-list-tile>
                <div class="time_block">
                    <span class="time" v-html="get_time(info.createdAt)"></span>
                </div>
                <div class="content">
                    <span class ="text" v-html="insr(info.summary)"></span>
                </div>
                <div class="media">
                    <div class="media_title">
                        <v-icon>chat</v-icon>
                        <span style="margin-left: 7px">媒体报道</span>
                    </div>
                    <v-divider/>
                    <div class="media_content">
                        <div v-for="(item, index) in info.newsArray"
                             :key="index"
                        >
                            <div class="content_row">
                                <v-icon>arrow_right</v-icon>
                                <a class="content_text" :href="item.url" target="_blank" v-html="insr(item.title)"></a>
                                <span class="content_site" v-html="item.siteName"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="event">
                    <div class="event_title">
                        <v-icon>history</v-icon>
                        <span style="margin-left: 7px">事件跟踪</span>
                    </div>
                    <div>
                        <div class="table">
                            <v-timeline dense>
                                <div v-for="item in info.timeline.topics"
                                     :key="item.id"
                                     style="margin: 22px 0"
                                >
                                    <v-timeline-item small>
                                        <v-layout>
                                            <v-flex xs2>
                                                <span class="timeline_time" v-html="time_format(item.createdAt)"></span>
                                            </v-flex>
                                            <v-flex xs7>
                                                <a class="timeline_text"
                                                   :href="'/topic/' + item.id"
                                                   target="_blank"
                                                   v-html="item.title"
                                                ></a>
                                            </v-flex>
                                        </v-layout>
                                    </v-timeline-item>
                                </div>
                            </v-timeline>
                        </div>
                    </div>
                </div>
            </v-list>
        </div>
        <div class="loading" v-show="false">
            <v-progress-circular indeterminate color="primary"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { format } from 'timeago.js'
    export default {
        name: "Details",

        data:() => ({
            hidden : true,
            api_path :'/api' + window.location.pathname,
            info :''
        }),

        mounted () {
            this.get_article_info();
        },

        methods: {
            change_title(id) {
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
            insr(str) {
                let p1=/([A-Za-z0-9])([\u4e00-\u9fa5]+)/gi;
                let p2=/([\u4e00-\u9fa5]+)([A-Za-z0-9])/gi;
                return str.replace(p1, "$1 $2").replace(p2, "$1 $2")
            },
            time_format(createdAt) {
                let time = new Date(createdAt);
                time = time.getFullYear() + '年' + (time.getMonth() + 1) + '月' + time.getDate() + '日'
                return time
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .loading
        text-align center
    .content
        padding 21px 16px 100px 16px
        .text
            font-size 16px
            line-height 2em
            color #383838
            letter-spacing .02em
    .time_block
        padding 5px 16px 11px 16px
        .time
            font-size 15px
            color #757575
    .title
        color #2e2e2e
        max-width 100%
        overflow: hidden
        text-overflow:ellipsis
        white-space: nowrap;
        font-size 20px
        letter-spacing 1.2px
    .media
        padding 0 16px 0 16px
        .media_title
            font-size 17px
            letter-spacing .02em
            font-weight 500
            margin-bottom 14px
        .media_content
            font-size 17px
            letter-spacing .02em
            margin-top 20px
            .content_row
                margin-bottom 12px
                .content_text
                    font-size 16px
                    color #2e2e2e
                    text-decoration none
                .content_text:hover
                    color #626262
                .content_site
                    margin-left 14px
                    font-size 14px
                    color #757575
    .event
        padding  34px 16px 0 16px
        .event_title
            font-size 17px
            letter-spacing .02em
            font-weight 500
            margin-bottom 14px
        .table
            .timeline_time
                font-size 15px
                color #5c5c5c
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-line-clamp: 1
                -webkit-box-orient: vertical
            .timeline_text
                font-size 17px
                font-weight 500
                color #4c4c4c
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-line-clamp: 1
                -webkit-box-orient: vertical
                text-decoration none
            .timeline_text:hover
                color #7d7d7d
</style>