<template>
    <div class="main">
        <div>
            <div class="title" v-show="!hidden">
                <span>行情简报</span>
            </div>
            <v-layout row wrap style="margin-bottom: 1.8em">
                <div>
                    <div v-for="(ele, index) in remix(info)"
                         :key="index"
                    >
                        <v-card class="card">
                            <div class="content">
                                <div class="date">
                                    <span v-html="date_filter(ele.time)"></span>
                                </div>
                                <v-divider/>
                                <ul>
                                    <div v-for="(item, index) in ele.data"
                                         :key="index"
                                    >
                                        <div class="text">
                                            <li>
                                                <span v-html="key_word(item.jobTitle,item.content)"></span>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </v-card>
                    </div>
                </div>
            </v-layout>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Brief",
        data:() => ({
            api_path:'/api/jobs/brief',
            info:[],
            hidden :true,
        }),
        created () {
            this.get_article_info();
        },
        methods: {
            get_article_info() {
                this.hidden = true;
                axios
                    .get(this.api_path)
                    .then(this.get_data)
                    .catch(error => console.log(error))
            },
            get_data(res) {
                (res.status === 200)
                && (this.info = res.data.data)
                && (this.hidden = false)
            },
            get_time(time) {
                let d = new Date(time);
                time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                return format(time, 'zh_CN');
            },
            remix(info) {
                let arr = [];
                for (let i=0;i<info.length;i++){
                    arr.push({
                        time:info[i].date,
                        data:info[i]
                    })
                }
                const map = function(arr) {
                    let newArr = [];
                    arr.forEach((address , i) => {
                        let index = -1;
                        let alreadyExists = newArr.some((newAddress,j) => {
                            if (address.time === newAddress.time) {
                                index = j;
                                return true;
                            }
                        });
                        if (!alreadyExists){
                            newArr.push({
                                time:address.time,
                                data:[address.data]
                            });
                        }else {
                            newArr[index].data.push(address.data)
                        }
                    });
                    return newArr;
                };
                return map(arr)
            },
            date_filter(date){
                date = new Date(date);
                return (date.getMonth() + 1) + '月' + date.getDate() + '日'
            },
            key_word(key, str) {
                let result;
                let keyword;
                keyword  = '<span style="color:#1c86c8">' + key + '</span>';
                result = str.split(key).join(keyword);
                return result
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .main
        margin-left 20px
        .title
            font-size 33px
            font-weight 500
            color #484848
            padding-top 22px
            padding-bottom 16px
        .card
            border-radius 11px
            margin-bottom 18px
            .content
                padding 0 24px 28px 24px
                .date
                    text-align center
                    padding 16px
                    font-size 18px
                .text
                    color #494949
                    margin-top 22px
                    font-size 15px
                    font-weight 500
                    letter-spacing 1.4px
</style>