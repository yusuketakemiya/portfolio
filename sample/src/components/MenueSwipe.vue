<template>
  <div class="menueswipe">
    <vue-touch id="touch_area"
        v-on:swipedown="onSwipeDown"
        v-bind:swipe-options="{ direction: 'down', threshold: 1 }"
        >
    </vue-touch>
    <transition-group name="mainmenue" tag="ul" class="wrapper" appear
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @enter-cancelled="afterEnter">
        <sao-menue class="item" v-for="(item, idx) in menueitems" :data-index="idx"
          :key="item.id"
          :menueitem="item" />
    </transition-group>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'MenueSwipe',
  data () {
    return {
      isActive: false,
      menueitems: []
    }
  },
  methods: {
    onSwipeDown: function () {
      this.isActive = !this.isActive
      if (this.isActive) {
        this.menueitems = store.state.main_menue.items
        return
      }
      this.menueitems = []
    },
    beforeEnter (el) {
      el.style.transitionDelay = 100 * el.dataset.index + 'ms'
    },
    afterEnter (el) {
      el.style.transitionDelay = ''
    }
  }
}
</script>

<style scoped>
@import "./style/swipe.css";
@import "./style/animate.css";
</style>
<style lang="scss">
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
</style>
