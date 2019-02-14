<template>
    <v-layout row wrap style="margin-bottom: 1.8em">
        <v-hover>
            <v-card slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    min-width="100%"
            >
                <v-list>
                    <v-list-tile>
                        <span class="tile" v-html="insr(title)"/>
                    </v-list-tile>
                    <v-list-tile>
                        <span class="text" v-html="insr(post(need_list))"/>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-hover>
    </v-layout>
</template>

<script>
    export default {
        name: "JobsArticles",
        props: {
            title : String,
            need_list : Array,
        },
        data:() => ({
            position:'',
            show:false,
        }),
        methods:{
            show_text (){
                this.show ?
                (this.clamp = 3) && (this.show = false)
                : (this.clamp = 11) && (this.show = true)
            },
            post (n){
                this.position = n[0].title + '·' + n[1].title + '·' + n[2].title + '·' + n[3].title
                return this.position
            },
            insr (str){
                let p1=/([A-Za-z_])([\u4e00-\u9fa5]+)/gi;
                let p2=/([\u4e00-\u9fa5]+)([A-Za-z_])/gi;
                return str.replace(p1, "$1 $2").replace(p2, "$1 $2")
            }
        },
    }
</script>

<style lang="stylus" scoped>
    a
        text-decoration none
    .tile
        width 100%
        color #2e2e2e
        font-size 17px
        letter-spacing 1.2px
        font-weight: 500
        overflow: hidden
        text-overflow:ellipsis
        white-space: nowrap;
    .text
        font-size 15px
        color #6c6c6c
        letter-spacing 2px
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical

</style>