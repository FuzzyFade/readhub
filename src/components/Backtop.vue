<template>
    <v-fab-transition>
        <v-btn v-show="!hidden"
               dark
               color="indigo"
               fab
               right
               bottom
               style="position: fixed;z-index:1"
               @click="back_top"
        >
            <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
    </v-fab-transition>
</template>

<script>
    export default {
        name: "Backtop",

        created (){
            window.addEventListener('scroll', this.get_scroll);
        },

        data:()=>({
            hidden:true,
        }),

        methods:{
            back_top() {
                document.documentElement.scrollTop = 0
            },

            get_scroll() {
                let scroll = document.documentElement.scrollTop;
                let height = document.documentElement.clientHeight;
                scroll > height ? this.hidden = false
                    : this.hidden = true

            }
        }
    }
</script>

<style scoped>

</style>