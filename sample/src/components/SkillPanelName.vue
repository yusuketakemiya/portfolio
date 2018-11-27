<template>
  <div class="SkillPanelName">
    <p>{{ username }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'tomosuke'
    }
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
  font-size: 35px;
}
</style>
