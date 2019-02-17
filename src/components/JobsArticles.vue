<template>
    <v-layout row wrap style="margin-bottom: 1.8em">
        <v-hover>
            <v-card slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    min-width="100%"
                    style="border-radius: 11px;cursor:pointer"
            >
                <v-list>
                    <div @click="look">
                        <v-list-tile>
                            <span class="tile" v-html="insr(title)"/>
                        </v-list-tile>
                        <v-list-tile>
                            <span class="text1" v-html="insr(post(num_list))"/>
                        </v-list-tile>
                        <v-list-tile>
                            <span class="text2" v-html="need(cities,jobCount,salaryLower,salaryUpper,experienceLower,experienceUpper)"/>
                        </v-list-tile>
                    </div>
                </v-list>
                <div v-if="flag">
                    <v-divider/>
                    <div v-for="item in jobsArray"
                                 :key="item.id"
                    >
                        <div class="tip" v-ripple>
                            <a :href="item.url" target="_blank">
                            <div class="tip_row1">
                                <span v-html="insr(item.title)"></span>
                                <span class="member" v-html="' · '+ item.company"></span>
                            </div>
                            <div class="tip_row2">
                                <span class="t1" v-html="salary(item.salaryLower,item.salaryUpper)"></span>
                                <span class="t2" v-html="experience(item.experienceLower,item.experienceUpper)"></span>
                                <span class="t3" v-html="item.city"></span>
                                <span class="t4" v-html="item.siteName"></span>
                            </div>
                            </a>
                        </div>
                        <v-divider/>
                    </div>
                    <div class="more">
                        <span v-html="'查看全部 ' + jobCount +' 个职位 · 敬请期待'"></span>
                    </div>
                </div>
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
            cities: Array,
            jobCount: Number,
            salaryLower: Number,
            salaryUpper: Number,
            experienceLower: Number,
            experienceUpper: Number,
            jobsArray: Array,
        },
        data:() => ({
            flag : false,
            position:'',
            show:false,
        }),
        methods:{
            post (n){
                this.position = n[0].title + '·' + n[1].title + '·' + n[2].title + '·' + n[3].title;
                return this.position
            },
            insr (str){
                let result;
                let p1=/([A-Za-z0-9])([\u4e00-\u9fa5]+)/gi;
                let p2=/([\u4e00-\u9fa5]+)([A-Za-z0-9])/gi;
                result =  str.replace(p1, "$1 $2").replace(p2, "$1 $2");
                result[0].toUpperCase();
                return result
            },
            need (cities,jobCount,salaryLower,salaryUpper,experienceLower,experienceUpper){
                let str = cities[0] + '、' + cities[1] + '等地共更新了 ' + jobCount + ' 个职位，待遇集中在 ' + salaryLower + '-' + salaryUpper + 'k，一般要求 ' + experienceLower +'-' + experienceUpper +' 年工作经验';
                return str
            },
            look () {
                if(this.flag === true){
                    this.flag = false
                }else {
                    this.flag = true
                }
            },
            salary (salaryLower,salaryUpper) {
                // 15-20k | 15k以上 | 20k以下 | 都是-1面议
                let result = salaryLower + '-' + salaryUpper +'k';
                salaryLower === -1 && (result = salaryUpper + 'k 以下');
                salaryUpper === -1 && (result = salaryLower + 'k 以上');
                salaryLower === -1 && salaryUpper === -1 && (result = '面议');
                return result
            },
            experience (experienceLower, experienceUpper) {
                // 同上
                let result = experienceLower + '-' + experienceUpper +' 年';
                experienceLower === -1 && (result = experienceUpper + ' 年以下');
                experienceUpper === -1 && (result = experienceLower + ' 年以上');
                experienceLower === -1 && experienceUpper === -1 && (result = '面议');
                return result
            },
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
        letter-spacing 1.3px
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
    .tip
        padding 18px 16px
        letter-spacing 1.1px
        .tip_row1
            color #2e2e2e
            font-size 17px
            padding-bottom 4px
            .member
                color #757575
        .tip_row2
            font-size 14px
            color #757575
            .t1
                font-size 16px
                font-weight 500
                color #e54037
                margin-right 20px
            .t2
                margin-right 20px
            .t3
                margin-right 20px
            .t4
                float right
    .tip:hover
        background-color #f8f8f8
    .more
        font-size 14px
        font-weight 500
        text-align center
        margin 15px auto
        color #c2c2c2
</style>