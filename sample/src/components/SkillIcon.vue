<template>
  <div class="SkillIcon" v-bind:style="{ 'background-image': 'url(' + skill.icon + ')' }"  @click="imageClick">
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
    }
  },
  props: {
    skill: { }
  },
  methods: {
    imageClick: function () {
      if (this.skill.isNone) { return }
      store.commit('skillSelect', this.skill)
    }
  }
}
</script>

<style scoped>
.SkillIcon {
  background-image: url("../assets/parts/SkillIcon_Blank.png");
  background-size:contain;
  background-size:cover;
  width: 50px;
  height: 49px;
}
</style>
