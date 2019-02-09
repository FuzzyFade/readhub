<template>
    <v-layout row wrap>
        <v-card>
            <v-list>
                <v-list-tile>
                    <div class="headline">
                        马化腾出席“数字中国” 腾讯众创空间助力“数字福建”建设
                    </div>
                    <span class="timer">2小时以前</span>
                </v-list-tile>
                <div class="content" @click="">
                    <div class="text">
                        4月22日，首届数字中国建设峰会在福州举行，腾讯董事会主席兼首席执行官马化腾在峰会上表示，腾讯希望发扬精细的“数字工匠精神”，为各行各业提供最有效的“数字接口”和最完备的“数字工具箱”，成为大家最好的“数字化助手” ... 其中，腾讯众创空间(海峡两岸•福州)于2016年9月落地，开放面积10000平方米，专注于扶持VR、游戏、互联网大健康、工具类等泛娱乐、互联网领域的创业项目，2017年挂牌腾讯文创基地 ... 作为国内覆盖地域最广的线下创业者孵化器，腾讯众创空间通过线下实体空间、线上创业服务平台、腾讯“双百计划”、青腾大学、腾讯全球合作伙伴大会五大引擎的服务能力，全方位扶持数字创新。
                    </div>
                </div>
            </v-list>
        </v-card>
    </v-layout>
</template>

<script>
    export default {
        name: "Articles"

    }
</script>

<style lang="stylus" scoped>
    .timer
        color #7a7a7a
        letter-spacing 2px
        margin-left 15px
        font-weight 400
        font-size 14px
    .content
        padding 0 16px 11px 16px
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
</style>