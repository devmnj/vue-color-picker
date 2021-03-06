
<h3 align="center">vue-color-picker</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> color-picker component for Vue
    <br>
</p>
<img src="./picker.png"/>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)


## 🧐 About <a name = "about"></a>

This is a pure CSS color-picker component for Vue/Nuxt project.

## Prerequisites

- Nodejs
- Vuejs
  
## 🏁 Getting Started <a name = "getting_started"></a>

Install and add the dependecy the component

```bash
npm i --save @codehat/vue-color-picker
```

## 🎈 Usage <a name="usage"></a>

```html
<template>
   <div class="columns section">
    <div class="column">
      <c-picker :selColor="col"
        @colPicked="changeColor" /> 
      {{ col }}
    </div>
    <div class="column" :style="{ background: col }" >
    <CheckGroup/>
    <p>  
    </p>
    </div>
  </div>
</template>
```

```javascript
<script> 
import  VueColorPicker from "@codehat/vue-color-picker" ; 
export default {
  name: "Gallery",
  data() {
    return {
      col: "",      
    };
  },
  methods: {
    changeColor(value) {
      this.col = value;
    },    
  },
  components: {
    "c-picker": VueColorPicker,  
  },
};
</script>
```

## ⛏️ Built Using <a name = "built_using"></a>

- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
