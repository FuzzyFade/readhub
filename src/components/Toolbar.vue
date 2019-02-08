<template>
  <div class="tool">
    <a class="logo" @click="change('/topic')">
      <img src="https://cdn.readhub.cn/static/assets/png/readhub_logo@2x.e5b95388.png">
    </a>
    <div class="text">
      <span>233333</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    change(n) {
      this.$router.push({path:n})
    },
  }
}
</script>

<style lang="stylus" scoped>
  .logo
    float left
    margin 5px 7px 11px 11px
    img
      width 150px
  .tool
    width 100%
    height 55px
    background-color #fafafa
    box-shadow darkgrey 0 0 17px
</style>
