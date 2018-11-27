<template>
  <div class="UserIcon">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    item: { }
  }
}
</script>

<style scoped>
.UserIcon {
  background-image: url("../assets/parts/usericon.png");
  background-size:contain;
  background-size:cover;
  width: 50px;
  height: 49px;
}
</style>
