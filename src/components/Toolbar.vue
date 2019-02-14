<template>
    <v-toolbar color="#fff" style="position: fixed;z-index:1"
    >
        <v-toolbar-title @click="change('/')">
            <img src="https://cdn.readhub.cn/static/assets/png/readhub_logo@2x.e5b95388.png">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat
                   v-for="item of topic_kinds"
                   :key="item.id"
                   :color="btn_color(item.path)"
                   v-html="item.content"
                   @click="change(item.path)"
            >
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'Toolbar',

        data:() => ({
            picked : window.location.pathname ,
            topic_kinds:[{
                id:"01",
                content:"热门话题",
                path:"/topic",
            },{
                id:"02",
                content:"科技动态",
                path:"/news",
            },{
                id:"03",
                content:"开发者资讯",
                path:"/tech",
            },{
                id:"04",
                content:"区块链快讯",
                path:"/blockchain",
            },{
                id:"05",
                content:"招聘行情",
                path:"/jobs",
            }]
        }),
        methods: {
            change (n) {
                this.$router.push(n);
                this.picked = n
            },
            btn_color (n) {
                 if (this.picked === n){return 'primary'}
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~vuetify/src/stylus/main'
    img
        width 140px
</style>