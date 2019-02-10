<template>
    <v-layout row wrap style="margin-bottom: 1.8em">
        <v-hover>
            <v-card slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
            >
                <v-list>
                    <v-list-tile>
                        <div class="tile" v-html="title"></div>
                        <span class="timer" v-html="time"></span>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <div class="content" @click="show_text">
                        <a class="text" :style="{'-webkit-line-clamp': clamp}" v-html="detail">
                        </a>
                    </div>
                    <div class="link" v-if="show">
                            <a class="text_link" :href="link" v-html="link_title">
                            </a>
                            <span class="sitename" v-html="site"></span>
                            <span class="details">查看详情</span>
                    </div>
                </v-list>
            </v-card>
        </v-hover>
    </v-layout>
</template>

<script>
    export default {
        name: "Articles",
        props: {
            title : String,
            time : String,
            detail : String,
            link_title : String,
            link : String,
            site : String,
        },
        data:()=>({
            show:false,
            clamp:3
        }),
        methods:{
            show_text:function(){
                if(this.show){
                    this.clamp = 3;
                    this.show = false
                }else{
                    this.clamp = 11;
                    this.show = true
                }
            }
        },
        computed:{
            gettime(time){
                var now = Date.parse(new Date())/1000;

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .tile
        font-size 20px
        letter-spacing 1.2px
    .timer
        color #7a7a7a
        letter-spacing .6px
        margin-left 19px
        font-weight 400
        font-size 14px
    .content
        padding 10px 16px 10px 16px
        .text
            font-size 15px
            color #515151
            letter-spacing 2.8px
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 3
            -webkit-box-orient: vertical
        .text:hover
            color #000
    .link
        padding 14px 16px 16px 16px
        .text_link
            color rgba(0, 0, 0, 1)
            letter-spacing 1.3px
            font-size 13px
        .text_link:hover
            color #5e788f
        .sitename
            color #a9a9a9
            letter-spacing 1px
            margin-left 15px
            font-weight 400
            font-size 14px
        .details
            float right
            color #303030
            letter-spacing 1px
            margin-left 15px
            font-weight 400
            font-size 14px

</style>