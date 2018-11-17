<template>
  <div class="menueswipe">
    <vue-touch id="touch_area"
        v-on:swipedown="onSwipeDown"
        v-bind:swipe-options="{ direction: 'down', threshold: 1 }"
        >
    </vue-touch>
    <transition-group tag="ul" class="wrapper" >
      <li v-for="(post, index) in menueitems" :key="post.id"
          v-bind:class="'item-' + index">
        <sao-menue />
      </li>
    </transition-group>
  </div>
</template>

<script>
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
        for (var i = 0; i < 3; i++) {
          this.menueitems.push({id: i})
        }
        return
      }
      this.menueitems = []
    }
  }
}
</script>

<style scoped>
@import "./style/swipe.css";
@import "./style/animate.css";
li {
  list-style: none;
  align-self: auto;
}
</style>
<style lang="scss">
@for $i from 0 through 2 {
  $enter-delay: 100ms;
  .v-enter-active {
      opacity: 0;
      animation: fade-in 1s;
      &.item-#{$i} {
          animation-delay: #{300ms * $i + $enter-delay};
      }
  }
}

@keyframes fade-in {
  0% {
      opacity: 0;
      transform: translateY(-15px);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
}
</style>
