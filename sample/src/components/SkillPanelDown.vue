<template>
  <div class="SkillPanelDown">
    <user-icon id="user-icon" :image="select.icon" />
    <p>{{ select.description }}</p>
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
    }
  },
  computed: {
    select: function () { return store.state.selectSkill }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "SAO UI TT";
  src: url("../assets/font/SAOUITT-Regular.ttf") format("truetype");
}
p {
  font-family: "SAO UI TT";
  position: absolute;
  top: 65px;
  left: 55px;
}
.SkillPanelDown {
  background-image: url("../assets/parts/skillpanel_ander-none.png");
  background-size:contain;
  background-size:cover;
  width: 100%;
  height: 300px;
}
#user-icon {
  position: absolute;
  top: 25px;
  left: 35px;
}
</style>
