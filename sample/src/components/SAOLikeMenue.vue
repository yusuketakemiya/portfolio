<template>
  <div class="SAOLikeMenue">
    <img :src="menueitem.image" />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    menueitem: {}
  }
}
</script>

<style scoped>
img {
  width: 5%;
  height: 5%;
}
</style>
