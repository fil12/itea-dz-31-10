<template>
    <div>
        <button :type="type" v-class-bldr="{mod: '--btn1'}" class="btn" @click="handler($event, 'parentHandler', selfHandler)">{{label}}</button>
    </div>
</template>

<script>
    import disBtn from '../assets/js/commonButn'
    import classBldr from "../assets/js/classBldr";
    export default {
        name: "Btn1",
        mixins: [disBtn],
        directives: {
          classBldr
        },
        methods: {
            selfHandler(){
                console.log('Btn1');
            }
        }
    }
</script>

<style scoped>

</style>