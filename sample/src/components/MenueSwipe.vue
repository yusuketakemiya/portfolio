<template>
  <div class="menueswipe">
    <transition-group name="mainmenue" tag="ul" class="wrapper" appear
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @enter-cancelled="afterEnter">
        <sao-menue class="item" v-for="(item, idx) in menueitems" :data-index="idx"
          :key="item.id"
          :menueitem="item" />
    </transition-group>
    <transition name="itempanel" tag="ul" class="wrapper" appear>
      <skill-panel v-if="isSkillView" />
    </transition>
    <vue-touch id="touch_area"
        v-on:swipedown="onSwipeDown"
        v-bind:swipe-options="{ direction: 'down', threshold: 1 }"
        >
    </vue-touch>
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
  },
  computed: {
    isSkillView: function () { return store.state.openMenueItem.id === 1 }
  }
}
</script>

<style scoped>
@import "./style/swipe.css";
@import "./style/animate.css";
</style>
<style lang="scss">
.menueswipe {
  text-align: left;
}
.wrapper {
  display: inline-block;
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
