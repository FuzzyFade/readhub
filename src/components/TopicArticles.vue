<template>
    <v-layout row wrap style="margin-bottom: 1.8em">
        <v-hover>
            <v-card slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    min-width="100%"
            >
                <v-list>
                    <v-list-tile>
                        <a target="_black"
                           :href="'/topic/'+ detail_page"
                           class="tile"
                           v-html="insr(title)"
                        ></a>
                        <span class="timer" v-html="time"></span>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <div class="content"
                         @click="show_text">
                        <a class="text"
                           :style="{'-webkit-line-clamp': clamp}"
                           v-html="insr(detail)"
                        ></a>
                    </div>
                    <div class="link" v-if="show">
                        <div class="little_title"
                             v-for="item of site_list"
                             :key="item.id"
                        >
                            <a class="text_link"
                               :href="item.url"
                               target="view_window"
                               v-html="'· '+insr(item.title)"
                            ></a>
                            <span class="sitename" v-html="item.siteName"></span>
                        </div>
                        <a :to="detail_page"
                           :href="'/topic/'+ detail_page"
                           class="details"
                           target="_black">
                            查看详情
                            <v-icon class="right">keyboard_arrow_right</v-icon>
                        </a>
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
            detail_page : String
        },
        data:()=>({
            show:false,
            clamp:3
        }),
        methods:{
            show_text (){
                this.show ?
                    (this.clamp = 3) && (this.show = false)
                    : (this.clamp = 11) && (this.show = true)
            },
            insr (str){
                let p1=/([A-Za-z0-9])([\u4e00-\u9fa5]+)/gi;
                let p2=/([\u4e00-\u9fa5]+)([A-Za-z0-9])/gi;
                return str.replace(p1, "$1 $2").replace(p2, "$1 $2")
            },
        },
    }
</script>

<style lang="stylus" scoped>
    a
        text-decoration none
    .tile
        color #2e2e2e
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
            .right
                font-size 20px

</style>