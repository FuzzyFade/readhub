<template>
    <v-layout row wrap style="margin-bottom: 1.8em">
        <v-hover>
            <v-card slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    min-width="100%"
            >
                <v-list>
                    <v-list-tile>
                        <div class="tile" v-html="title"></div>
                        <span class="timer" v-html="time"></span>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <div class="content" @click="show_text">
                        <a class="text" :style="{'-webkit-line-clamp': clamp}" v-html="detail"></a>
                    </div>
                    <div class="link" v-if="show">
                        <div class="little_title"
                             v-for="item of site_list"
                             :key="item.id"
                        >
                            <a class="text_link" :href="item.url" target="view_window" v-html="'· '+item.title"></a>
                            <span class="sitename" v-html="item.siteName"></span>
                        </div>
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
            site_list : Array,
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
    }
</script>

<style lang="stylus" scoped>
    a
        text-decoration none
    .tile
        max-width 100%
        overflow: hidden
        text-overflow:ellipsis
        white-space: nowrap;
        font-size 20px
        letter-spacing 1.2px
    .timer
        width:100px;
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
            letter-spacing 2.1px
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 3
            -webkit-box-orient: vertical
        .text:hover
            color #000
    .link
        padding 14px 16px 16px 16px
        .little_title
            overflow hidden
            max-width 100%
            margin-bottom  8px
            .text_link
                color rgba(0, 0, 0, 1)
                letter-spacing 1.3px
                font-size 14px
            .text_link:hover
                color #5e788f
            .sitename
                display inline-block
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
            margin-bottom 12px
            font-weight 400
            font-size 14px

</style>