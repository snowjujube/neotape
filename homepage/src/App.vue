<template>
    <div id="app">
        <NeoHead/>
        <Poster
                :background="`https://sf1-hscdn-tos.pstatp.com/obj/ies.fe.effect/60bc8ab7156cf7f8bbaad081aa7d7a1d`"
                title="NEO-TAPE"
                link="#"
                theme="dark"
                mode="bottom"
        />
        <Poster
                :background="`https://sf1-hscdn-tos.pstatp.com/obj/ies.fe.effect/8617e358233d4d11a735d8083daffab9`"
                title="ネオン テープ"
                link="#"
                theme="light"
                mode="bottom"
        />
        <Poster
                :background="`https://sf1-hscdn-tos.pstatp.com/obj/ies.fe.effect/a581f44d414bd03f55d4e726475e5b45`"
                title="霓虹卡帶"
                link="#"
                theme="dark"
                mode="bottom"
        />
        <Poster
                :background="`https://sf1-hscdn-tos.pstatp.com/obj/ies.fe.effect/7748ee0eb00f48b2fcc325658e4347c2`"
                title="霓虹卡带"
                link="#"
                theme="light"
                mode="bottom"
        />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Poster from './components/Poster.vue';
    import NeoHead from './components/NeoHead.vue';

    @Component({
        components: {
            Poster,
            NeoHead,
        },
    })

    export default class App extends Vue {

    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 0;
    }
</style>
