<template>
    <div
            :class="`poster-${theme}`"
            class="poster"
            :style="{
        background: `url('${background}') no-repeat center center`,
        backgroundSize: 'cover'
    }">
        <div
                :href="link"
                :class="`link-${mode} link-${theme}`"
                class="link"
        >
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Poster extends Vue {
        @Prop() private background!: string; // 壁纸
        @Prop() private title!: string; // 标题
        @Prop() private link?: string; // 详情链接
        @Prop() private theme?: string; // dark or light
        @Prop() private mode!: string; // center or bottom
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">



    .poster {
        font-size: .56rem;
        font-weight: 700;
        display: flex;
        box-sizing: border-box;
        height: 30vh;
        text-align: center;
        justify-content: center;
    }

    @media screen and (min-width: 1020px) {
        .poster {
            font-size: 1.5rem;
            height: 600px;
            padding: 0;
        }
    }

    .poster-dark {
        color: #fff;
    }

    .poster-light {
        color: #000;
    }

    .link-center {
        align-items: center;
    }

    .link-bottom {
        align-items: flex-end;
        margin-bottom: 1rem;
    }

    .link-dark:visited {
        color: #ffffff;
    }

    .link-light:visited {
        color: #000000;
    }

    .link:hover {
        background: rgba(1,1,1,.23);
    }

    .poster .link {
        display: flex;
        width: 100%;
        height: 100%;
        transition: background ease .3s;
        justify-content: center;
        text-decoration: none;
    }

    p {
        display: block;
        margin-block-start: .3em;
        margin-block-end: .3em;
        margin-inline-start: 0;
        margin-inline-end: 0;
    }
</style>
