<template>
    <v-layout row wrap style="margin-bottom: 1.8em">
        <v-hover>
            <v-card slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
            >
                <v-list>
                    <v-list-tile>
                        <div class="tile">
                            马化腾出席“数字中国” 腾讯众创空间助力“数字福建”建设
                        </div>
                        <span class="timer">2小时以前</span>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <div class="content" @click="show_text">
                        <a class="text" :style="{'-webkit-line-clamp': clamp}">
                            4月22日，首届数字中国建设峰会在福州举行，腾讯董事会主席兼首席执行官马化腾在峰会上表示，腾讯希望发扬精细的“数字工匠精神”，为各行各业提供最有效的“数字接口”和最完备的“数字工具箱”，成为大家最好的“数字化助手” ... 其中，腾讯众创空间(海峡两岸•福州)于2016年9月落地，开放面积10000平方米，专注于扶持VR、游戏、互联网大健康、工具类等泛娱乐、互联网领域的创业项目，2017年挂牌腾讯文创基地 ... 作为国内覆盖地域最广的线下创业者孵化器，腾讯众创空间通过线下实体空间、线上创业服务平台、腾讯“双百计划”、青腾大学、腾讯全球合作伙伴大会五大引擎的服务能力，全方位扶持数字创新。
                        </a>
                    </div>
                    <div class="link" v-if="show">
                            <a class="text_link" href="http://tech.sina.com.cn/digi/2019-02-09/doc-ihrfqzka4501673.shtml">
                                LinkedIn网站揭示：微软正重构Windows组件以支持下一代产品
                            </a>
                            <span class="sitename">新浪科技</span>
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
            letter-spacing 3px
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