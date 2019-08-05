<template>
    <header id="head">
        NEOTAPE.LIVE
    </header>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class NeoHead extends Vue {
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

    #head {
        font-weight: 700;
        font-size: 34px;
        line-height: 50px;
        color: black;
        position: fixed;
        z-index: 100000;
        top: 10px;
        left: 50%;
        overflow: hidden;
        box-sizing: border-box;
        width: 250px;
        height: 50px;
        margin-left: -125px;
        transition: height .3s ease;
        background: #fff;
    }

    @media screen and (min-width: 1020px) {
        #head {
            left: 0;
            width: 250px;
            margin-left: 0;
        }
    }

</style>
