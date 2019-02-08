<template>
  <v-toolbar>
    <v-toolbar-title @click="change('/')">
      <img src="https://cdn.readhub.cn/static/assets/png/readhub_logo@2x.e5b95388.png">
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat
             v-for="item of topic_kinds"
             :key="item.id"
             v-html="item.content"
             @click="change(item.position)"
      >
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'HelloWorld',

  data:() => ({
    topic_kinds:[{
      id:"01",
      content:"热门话题",
      position:"/topic",
      if_now:true
    },{
      id:"02",
      content:"科技动态",
      position:"/topic",
      if_now:false
    },{
      id:"03",
      content:"开发者资讯",
      position:"/topic",
      if_now:false
    },{
      id:"04",
      content:"区块链快讯",
      position:"/topic",
      if_now:false
    },{
      id:"05",
      content:"招聘行情",
      position:"/topic",
      if_now:false
    }]
  }),

  methods: {
    change(n) {
      this.$router.push({path:n})
    },
    button_color(n) {
      if (n){
        return "#2e2e2e"
      }else {
        return "white"
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~vuetify/src/stylus/main'
  img
    width 150px
</style>
