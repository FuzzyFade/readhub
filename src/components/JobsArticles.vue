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
                        <span class="text1" v-html="insr(post(num_list))"/>
                    </v-list-tile>
                    <v-list-tile>
                        <span class="text2" v-html="need(cities,jobCount,salaryLower,salaryUpper,experienceLower,experienceUpper)"/>
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
            num_list : Array,
            cities: Object,
            jobCount: Number,
            salaryLower: Number,
            salaryUpper: Number,
            experienceLower: Number,
            experienceUpper: Number
        },
        data:() => ({
            position:'',
            show:false,
        }),
        methods:{
            post (n){
                this.position = n[0].title + '·' + n[1].title + '·' + n[2].title + '·' + n[3].title
                return this.position
            },
            insr (str){
                let p1=/([A-Za-z_])([\u4e00-\u9fa5]+)/gi;
                let p2=/([\u4e00-\u9fa5]+)([A-Za-z_])/gi;
                return str.replace(p1, "$1 $2").replace(p2, "$1 $2")
            },
            need (cities,jobCount,salaryLower,salaryUpper,experienceLower,experienceUpper){
                let str = cities + '等地共更新了 ' + jobCount + ' 个职位，待遇集中在 ' + salaryLower + '-' + salaryUpper + 'k，一般要求 ' + experienceLower +'-' + experienceUpper +' 年工作经验';
                return str
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
    .text1
        font-size 15px
        color #676767
        letter-spacing 1.4px
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 1
        -webkit-box-orient: vertical
    .text2
        font-size 15px
        font-weight: 500
        color #434343
        letter-spacing 1px
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 1
        -webkit-box-orient: vertical

</style>