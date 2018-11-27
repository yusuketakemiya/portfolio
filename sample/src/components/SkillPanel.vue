<template>
  <div class="SkillPanel">
    <div id="line"/>
    <div id="container">
      <skill-panelup id="up-panel" />
      <transition name="transition-down" enter-active-class="animated slideInDown" tag="ul" class="wrapper" appear>
        <skill-paneldown id="down-panel" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    lists: {}
  }
}
</script>

<style scoped>
@import "./style/animate.css";
.SkillPanel {
  display: inline-block;
  text-align: left;
  width: 400px;
  height: 790px;
  position: absolute;
}
#line {
  border-left: solid 3px whitesmoke;
  display: inline-block;
  width: 5px;
  height: 100%;
}
#container {
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
}
#up-panel {
  top: 0px;
  position: absolute;
  z-index: 1;
}
#down-panel {
  top: 490px;
  position: absolute;
}
/* enter、 leave アニメーションで異なる間隔やタイミング関数を利用することができます */
.transition-up-enter-active {
  transition: all .5s ease;
}
.transition-up-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.transition-up-enter, .transition-up-leave-to {
  transform: translateX(10px);
  opacity: 1;
}
/* enter、 leave アニメーションで異なる間隔やタイミング関数を利用することができます */
.transition-down-enter-active {
  transition: all .5s ease;
  z-index: -1;
}
.transition-down-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  z-index: -1;
}
.transition-down-enter, .transition-down-leave-to {
  transform: translateX(10px);
  opacity: 0;
  z-index: -1;
}
</style>
