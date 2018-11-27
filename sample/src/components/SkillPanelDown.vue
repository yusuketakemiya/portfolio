<template>
  <div class="SkillPanelDown">
    <user-icon id="user-icon" />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    items: {}
  }
}
</script>

<style scoped>
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
