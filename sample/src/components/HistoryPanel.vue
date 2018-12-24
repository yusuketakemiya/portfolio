<template>
  <div class="HistoryPanel">
    <div id="line"/>
    <div id="container">
      <div id="blurUp"/>
      <transition-group name="mainmenue" class="wrapper" appear>
          <node-item class="item" v-for="(item, idx) in items" :data-index="idx"
            :key="item.id"
            :item="item" />
      </transition-group>
    </div>
    <div v-if="isSelectNode" id="line2"/>
  </div>
</template>

<script>
import store from '../store'
export default {
  data () {
    return {
      items: store.state.histories.items
    }
  },
  computed: {
    isSelectNode: function () {
      return store.state.selectItem.title !== undefined
    }
  }
}
</script>

<style scoped>
@import "./style/swipe.css";
@import "./style/animate.css";
#blurUp {
  /* filter: blur(6px); */
  z-index: 1;
  position: absolute;
  height: 10px;
  width: 200px;
  background: linear-gradient(rgba(255,0,0,0), whitesmoke);
}
.HistoryPanel {
  display: inline-block;
  text-align: left;
  width: 1000px;
  height: 790px;
  position: absolute;
}
#line {
  border-left: solid 3px whitesmoke;
  display: inline-block;
  width: 5px;
  height: 100%;
}
#line2 {
  border-left: solid 3px whitesmoke;
  display: inline-block;
  width: 5px;
  height: 100%;
  margin-left: 250px;
}
#container {
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
}
.node-item {
  margin-top: 1em;
  padding: 1px;
}
.mainmenue-enter-active, .mainmenue-leave-active {
  transition: transform .5s, opacity .5s;
}
.mainmenue-move:not(.mainmenue-leave-active) {
  transition: transform .5s;
}
/* 表示される時は上からスライド */
.mainmenue-enter {
  opacity: 0;
  transform: translateY(-20px);
}
/* 消える時は縮小される */
.mainmenue-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
/* enter、 leave アニメーションで異なる間隔やタイミング関数を利用することができます */
.itempanel-enter-active {
  transition: all .3s ease;
}
.itempanel-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.itempanel-enter, .itempanel-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
