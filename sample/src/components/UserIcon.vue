<template>
  <div class="UserIcon"  v-bind:style="{ 'background-image': 'url(' + image + ')' }">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    image: { }
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
