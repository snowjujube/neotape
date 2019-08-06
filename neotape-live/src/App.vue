<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0;
}

html {
  font-family: "Helvetica Neue LT Pro", HelveticaNeue-Light,
    "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, Verdana, Roboto,
    -apple-system, BlinkMacSystemFont, ".SFNSDisplay-Regular", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", "游ゴシック Medium", "Helvetica Neue",
    "Segoe UI", sans-serif;
  font-size: 62.5%;
  color: #000;
  background: #fff;
}

body {
  font-size: .2rem;
  margin: 0;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

body,
html {
  height: 100%;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}

blockquote,
dd,
div,
dl,
dt,
h1,
h2,
h3,
h4,
h5,
h6,
li,
ol,
p,
pre,
span,
td,
th,
ul {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 1rem;
  font-weight: 500;
}

a {
  transition: color 0.1s linear, opacity 0.3s linear;
  text-decoration: none;
  color: #000;
}

a:active,
a:hover {
  outline: 0;
}

b,
strong {
  font-weight: 700;
}

div,
h1,
h2,
h3,
p,
table {
  margin: 0;
}

li,
ul {
  list-style: none;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  vertical-align: bottom;
  border: 0;
}

pre {
  overflow: auto;
}

table {
  border-spacing: 0;
  border-collapse: collapse;
}

figure {
  margin: 0;
  padding: 0;
}

i {
  font-style: normal;
}

br.pc {
  display: none;
}

.inner {
  box-sizing: border-box;
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 15px;
}

.hasImage .fade {
  color: transparent;
}

.hasImage .fade.fade-in {
  -webkit-animation: textAnimation-txt-white 1s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  animation: textAnimation-txt-white 1s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
}


@-webkit-keyframes textAnimation-mask {
  34% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(105%);
    transform: translateX(105%);
  }
}

@keyframes textAnimation-mask {
  34% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(105%);
    transform: translateX(105%);
  }
}

@-webkit-keyframes textAnimation-mask-white {
  33% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  34% {
    -webkit-transform: translateX(105%);
    transform: translateX(105%);
  }
  100% {
    -webkit-transform: translateX(105%);
    transform: translateX(105%);
  }
}

@keyframes textAnimation-mask-white {
  33% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  34% {
    -webkit-transform: translateX(105%);
    transform: translateX(105%);
  }
  100% {
    -webkit-transform: translateX(105%);
    transform: translateX(105%);
  }
}

@-webkit-keyframes textAnimation-txt {
  0% {
    color: transparent;
  }
  33% {
    color: transparent;
  }
  34% {
    color: #000;
  }
  100% {
    color: #000;
  }
}

@keyframes textAnimation-txt {
  0% {
    color: transparent;
  }
  33% {
    color: transparent;
  }
  34% {
    color: #000;
  }
  100% {
    color: #000;
  }
}

@-webkit-keyframes textAnimation-txt-white {
  0% {
    color: transparent;
  }
  33% {
    color: transparent;
  }
  34% {
    color: #fff;
  }
  100% {
    color: #fff;
  }
}

@keyframes textAnimation-txt-white {
  0% {
    color: transparent;
  }
  33% {
    color: transparent;
  }
  34% {
    color: #fff;
  }
  100% {
    color: #fff;
  }
}
</style>
