<template>
    <div class="not_found">
        <div class="main">
            <div class="icon_text">
                <div class="text1">404</div>
            </div>
            <div class="text2">这个页面不存在哦 ╮(╯_╰)╭</div>
            <router-link to="/topic" class="text3">返回首页</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Error"
    }
</script>

<style lang="stylus" scoped>
    .not_found
        height 100%
        .main
            text-align center
            .icon_text
                margin-top 150px
                .text1
                    color: #5e788f
                    font-size 28px
                    font-weight 500
                    margin: 0 auto
                    line-height 120px
                    border-radius 50%
                    width 120px
                    height 120px
                    border 3px solid #5e788f
            .text2
                font-size 20px
                font-weight 430
                color #747474
                margin-top 40px
                margin-bottom 60px
            .text3
                font-size 16px
                font-weight 600
                color #161616
                margin-top 40px
                margin-bottom 60px
                text-decoration none
</style>