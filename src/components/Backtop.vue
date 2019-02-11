<template>
    <v-fab-transition>
        <v-btn v-show="!hidden"
               dark
               color="indigo"
               fab
               right
               bottom
               style="position: fixed;z-index:1"
               @click="$vuetify.goTo(0, vuetify_goTo_options)"
        >
            <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
    </v-fab-transition>
</template>

<script>
    export default {
        name: "Backtop",

        data:()=>({
            hidden:true,
        }),

        created (){
            window.addEventListener('scroll', this.get_scroll);
        },

        methods:{
            vuetify_goTo_options () {
                return {
                    duration: 700,
                    offset: 128,
                    easing: easeInOutCubic(),
                }
            },

            get_scroll() {
                let scroll = document.documentElement.scrollTop || document.body.scrollTop;
                let height = document.documentElement.clientHeight ||document.body.clientHeight;
                scroll > height ? this.hidden = false
                    : this.hidden = true

            }
        }
    }
</script>

<style scoped>

</style>