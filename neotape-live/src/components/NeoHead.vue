<template>
  <header id="head" :class="open ? `open` : ``">
    <div class="common">
      <span class="ly-flex">
        <div class="side">
          <img src="../assets/copyright.svg" alt="C" />
        </div>
        <div class="main">
          <a href="http://neotape.live/">NEOTAPE.LIVE</a>
        </div>
      </span>
    </div>
    <div class="toggle js-toggle">
      <div class="top">
        <div class="side">
          <img
            src="../assets/name.png"
            width="30"
            alt="Copyright. NEOTAPE.LIVE INC. All Rights Reserved."
          />
        </div>
        <div class="main">
          <nav>
            <ul>
              <li>
                <a
                  class="fade-nav fade-delay01"
                  :class="open ? `fade-in` : ''"
                  href="#"
                  >时间表</a
                >
              </li>
              <li>
                <a
                  class="fade-nav fade-delay02"
                  :class="open ? `fade-in` : ''"
                  href="#"
                  >成员</a
                >
              </li>
              <li>
                <a
                  class="fade-nav fade-delay03"
                  :class="open ? `fade-in` : ''"
                  href="#"
                  >合作</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        :class="
          open
            ? `bottom fade-nav fade-delayBtm fade-in`
            : 'bottom fade-nav fade-delayBtm'
        "
      >
        <figure>
          <a href="#" target="_blank">
            <img src="../assets/hanpi.png" alt="Our Latest Number"
          /></a>
        </figure>
        <nav>
          <ul>
            <li>
              <a href="#"
                ><img
                  src="../assets/weibo.svg"
                  style="width: .4rem;height: .4rem;"
                  alt="Weibo"
              /></a>
            </li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <span @click="toggle" :class="open ? 'open' : ''" id="hamburger"></span>
    <span class="mask"></span>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";

@Component
export default class NeoHead extends Vue {
  @Provide() open: Boolean = false;

  toggle() {
    this.open = !this.open;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
span.fade {
  display: inline-block;
}

.fade {
  position: relative;
  overflow: hidden;
  color: transparent;
}

.fade::after {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: "";
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);
  background: #000;
}

.fade.fade-in {
  -webkit-animation: textAnimation-txt 1s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
  animation: textAnimation-txt 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

.fade.fade-in::after {
  -webkit-animation: textAnimation-mask 1s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
  animation: textAnimation-mask 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

.fade.fade-in::before {
  -webkit-animation: textAnimation-mask-white 1s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  animation: textAnimation-mask-white 1s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
}

.fade.fade-delay03 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.fade.fade-delay03::after {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.fade.fade-delay06 {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fade.fade-delay06::after {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fade.fade-delay09 {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}

.fade.fade-delay09::after {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}

.fade-nav {
  position: relative;
  display: block;
  overflow: hidden;
  color: #fff;
}

.fade-nav::before {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: "";
  -webkit-transform: translateX(0);
  transform: translateX(0);
  background: #fff;
}

.fade-nav::after {
  position: absolute;
  z-index: 200;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: "";
  -webkit-transform: translateX(-101%);
  transform: translateX(-101%);
  background: #000;
}

.fade-nav.fade-in {
  -webkit-animation: textAnimation-txt 1s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
  animation: textAnimation-txt 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.fade-nav.fade-in::after {
  -webkit-animation: textAnimation-mask 1s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
  animation: textAnimation-mask 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.fade-nav.fade-in::before {
  -webkit-animation: textAnimation-mask-white 1s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  animation: textAnimation-mask-white 1s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
}

.fade-nav.fade-delay01 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.fade-nav.fade-delay01::after {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.fade-nav.fade-delay02 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fade-nav.fade-delay02::after {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fade-nav.fade-delay03 {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

.fade-nav.fade-delay03::after {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

.fade-nav.fade-delay04 {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fade-nav.fade-delay04::after {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fade-nav.fade-delayBtm {
  -webkit-animation-delay: 0.9s !important;
  animation-delay: 0.9s !important;
}

.fade-nav.fade-delayBtm::before {
  -webkit-animation-delay: 0.9s !important;
  animation-delay: 0.9s !important;
}

.fade-nav.fade-delayBtm::after {
  -webkit-animation-delay: 0.9s !important;
  animation-delay: 0.9s !important;
}

article {
  padding-top: 70px;
  padding-bottom: 40px;
}

header#head {
  font-weight: 700;
  position: fixed;
  z-index: 100000;
  top: 10px;
  left: 50%;
  overflow: hidden;
  box-sizing: border-box;
  width: 350px;
  height: 50px;
  margin-left: -175px;
  transition: height 0.3s ease;
  background: #fff;
}

header#head.open {
  overflow-y: auto;
  height: auto;
}

header#head .side {
  width: 25px;
  margin-right: 25px;
}

header#head a:hover {
  opacity: 0.8;
}

header#head .main {
  font-size: 0.5rem;
  line-height: 50px;
  flex: 1;
}

header#head .main ul li {
  height: 50px;
  box-shadow: inset 0 1px 0 #000;
}

header#head .main ul li a {
  height: 50px;
  color: #fff;
}

header#head .common {
  height: 50px;
  padding: 0 15px;
}

header#head .common .ly-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header#head .common .ly-flex .main a {
  line-height: 50px;
  display: inline-block;
  width: 100px;
  height: 50px;
}

header#head .common .ly-flex .side {
  display: flex;
  height: 50px;
  align-items: center;
}

header#head .common .ly-flex .side img {
  width: 24px;
  height: 24px;
}

header#head .toggle {
  top: 50px;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  flex-flow: column;
}

header#head .toggle .top {
  display: flex;
}

header#head .toggle .top .side {
  padding-top: 10px;
  box-shadow: inset 0 1px 0 #000;
}

header#head .toggle .bottom {
  margin: 50px 0 10px 0;
}

header#head .toggle .bottom figure {
  margin: 0 0 5px;
}

header#head .toggle .bottom figure img {
  max-width: 100%;
}

header#head .toggle .bottom nav ul {
  display: flex;
  justify-content: space-between;
}

header#head .toggle .bottom nav ul li a {
  font-size: 0.4rem;
  display: block;
}

header#head .toggle .bottom nav ul li a img {
  width: 70px;
}

header#head .toggle .bottom nav ul li:first-child {
  flex: 1;
}

header#head .toggle .bottom nav ul li:last-child {
  width: 80px;
  margin-left: 25px;
  text-align: right;
}

.mask {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

header#head.open + .mask {
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
}

#hamburger {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

#hamburger.open:before {
  margin-top: -3px;
  -webkit-transform: rotate(0);
  transform: rotate(0);
}

#hamburger.open::after {
  margin-top: 3px;
  -webkit-transform: rotate(0);
  transform: rotate(0);
}

#hamburger:after,
#hamburger:before {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 16px;
  height: 1px;
  margin-left: -8px;
  content: "";
  transition: 0.3s;
  background: #000;
}

#hamburger:before {
  margin-top: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#hamburger:after {
  margin-top: 0;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

@media screen and (min-width: 374px) {
  header#head .toggle .bottom {
    padding-top: 70px;
  }
}

@media screen and (min-width: 768px) {
  .inner {
    padding: 0 50px;
  }
}

@media screen and (min-width: 1020px) {
  header#head {
    left: 0;
    width: 350px;
    margin-left: 0;
  }

  header#head .toggle .bottom {
    margin-top: 50px;
  }
}

@media screen and (min-width: 1060px) {
  .inner {
    padding: 0;
  }
}
</style>
