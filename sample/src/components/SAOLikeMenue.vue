<template>
  <div class="SAOLikeMenue">
    <img :src="menueitem.image" @click="imageClick" />
    <transition name="itemmenue" tag="ul" class="wrapper" appear>
      <arrow-box v-if="isActive" />
    </transition>
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
    }
  },
  methods: {
    imageClick: function () {
      store.commit('openMenueItem', this.menueitem.id)
    }
  },
  props: {
    menueitem: {}
  },
  computed: {
    isActive: function () { return store.state.openMenueItem.id === this.menueitem.id }
  }
}
</script>

<style scoped>
@import "./style/animate.css";
img {
  display: inline-block;
  width: 50px;
  height: 50px;
}
arrow-box {
  display: inline-block;
}
/* enter、 leave アニメーションで異なる間隔やタイミング関数を利用することができます */
.itemmenue-enter-active {
  transition: all .3s ease;
}
.itemmenue-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.itemmenue-enter, .itemmenue-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
