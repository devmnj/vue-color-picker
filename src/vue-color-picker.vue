<template>
  <div>
    <div class="colorPicker">
      <div class="arrow"></div>
      <div class="arrowWhite"></div>

      <div class="colorList">
        <div
          @click="getCol"
          title="#FF6900"
          class="colorContainer"
          style="background: rgb(255, 105, 0)"
        ></div>
        <div
          @click="getCol"
          title="#FF6900"
          class="colorContainer"
          style="background: rgb(252, 185, 0)"
        ></div>
        <div
          @click="getCol"
          title="#FF6900"
          class="colorContainer"
          style="background: rgb(123, 220, 181)"
        ></div>
        <div
          @click="getCol"
          title="#FF6900"
          class="colorContainer"
          style="background: rgb(0, 208, 132)"
        ></div>
        <div
          @click="getCol"
          title="#FF6900"
          class="colorContainer"
          style="background: rgb(142, 209, 252)"
        ></div>
        <div
          @click="getCol"
          title="#FF6900"
          class="colorContainer"
          style="background: rgb(6, 147, 227)"
        ></div>
        <div
          @click="getCol"
          title="#FF6900"
          class="colorContainer"
          style="background: rgb(171, 184, 195)"
        ></div>
        <div
          @click="getCol"
          title="#FF6900"
          class="colorContainer"
          style="background: rgb(235, 20, 76)"
        ></div>
        <div
          @click="getCol"
          title="#FF6900"
          class="colorContainer"
          style="background: rgb(247, 141, 167)"
        ></div>
        <div
          @click="getCol"
          title="#FF6900"
          class="colorContainer"
          style="background: rgb(153, 0, 239)"
        ></div>

        <div class="hexIcon">#</div>
        <div class="inputContainer">
          <input value="" placeholder="ff691f" maxlength="6" />
        </div>
        <div style="clear: both"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ColPicker",
  created() {},
  data() {
    return {
      selC:''
    };
  },
  props: {
    selColor: {
      type: String,
      default: "#FF1100",
    },
  },
  methods: {
    getCol(e) {
      this.selColor = e.target.style.background;
        this.$emit('colPicked',this.selColor)   
    },     
  },
};
</script>

<style lang="scss" scoped>
.main-background {
  width: 100vw;
  height: 100vh;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.colorPicker {
  width: 276px;
  background: white;
  border: 0px solid rgba(0, 0, 0, 0.247059);
  box-shadow: rgba(0, 0, 0, 0.247059) 0px 1px 4px;
  border-radius: 4px;
  position: relative;
}
.colorPicker .arrow {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0px 9px 10px;
  border-color: transparent transparent rgba(0, 0, 0, 0.0980392);
  position: absolute;
  top: -11px;
  right: 12px;
}
.colorPicker .colorList {
  padding: 15px 9px 9px 15px;
}
.colorPicker .colorContainer {
  height: 30px;
  width: 30px;
  cursor: pointer;
  float: left;
  border-radius: 4px;
  margin: 0px 6px 6px 0px;
}
.colorPicker .hexIcon {
  background: #f0f0f0;
  height: 30px;
  width: 30px;
  border-radius: 4px 0px 0px 4px;
  float: left;
  color: #98a1a4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.colorPicker .inputContainer {
  position: relative;
}
.colorPicker .inputContainer input {
  width: 100px;
  font-size: 14px;
  color: #666666;
  border: 0px;
  outline: none;
  height: 28px;
  box-shadow: #f0f0f0 0px 0px 0px 1px inset;
  border-radius: 0px 4px 4px 0px;
  float: left;
  padding-left: 8px;
}

.arrowWhite {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0px 9px 10px;
  border-color: transparent transparent white;
  position: absolute;
  top: -10px;
  right: 12px;
}

.activeColor {
  box-shadow: 0 0px 6px 2px #607d8b;
}
</style>
