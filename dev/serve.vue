
<template>
  <div id="app">
    <div class="column">
      <vue-color-picker :selColor="col" @colPicked="changeColor" />
    </div>

    <div class="column" :style="{ background: col }">
      <p>
        Hi
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueColorPicker from "@/vue-color-picker.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    VueColorPicker,
  },
  data() {
    return {
      col: "",
      counter: 0,
    };
  },
  methods: {
    changeColor(value) {
      this.col = value;
    },
  },
});
</script>
