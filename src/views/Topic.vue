<template>
  <toolbar></toolbar>
  <articles></articles>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import Articles from '@/components/Articles.vue'

export default {
  name: 'Topic',
  components: {
    Toolbar,
    Articles
  }
}
</script>
