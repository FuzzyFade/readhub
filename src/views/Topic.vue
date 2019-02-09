<template>
    <v-app>
        <toolbar></toolbar>
        <v-container fluid grid-list-lg>
            <articles></articles>
        </v-container>
    </v-app>
</template>

<script>
    import Toolbar from '@/components/Toolbar.vue'
    import Articles from '@/components/Articles.vue'
    import axios from 'axios'
    export default {
        name: 'Topic',
        components: {
            Toolbar,
            Articles
        }
    }
</script>
