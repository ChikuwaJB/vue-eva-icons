# Vue Eva Icons

Simply beautiful open source [eva icons](https://akveo.github.io/eva-icons) as Vue components

## Demo

[https://antonreshetov.github.io/vue-eva-icons](https://antonreshetov.github.io/vue-eva-icons/)

## Install

### NPM

Installing with npm is recommended and it works seamlessly with webpack.

```js
npm i vue-eva-icons
```

### Download

You can download latest version from the Github: [Download](https://github.com/antonreshetov/vue-eva-icons)

## Quick start

### Global

To use in your project, just import vue-eva-icon and install into Vue.

```js
import Vue from 'vue'
import App from './App.vue'
import EvaIcon from 'vue-eva-icon'

Vue.use(EvaIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

### On demand

```html
<template>
  <eva-icon name="github" animation="pulse" fill="limegreen"></eva-icon>
</template>

<script>
  import { EvaIcon } from 'vue-eva-icon'

  export default {
    components: {
      [EvaIcon.name]: EvaIcon
    }
  }
</script>
```