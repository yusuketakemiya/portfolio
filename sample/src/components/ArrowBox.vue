<template>
  <div class="ArrowBox">
    <div id="arrow"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    lists: {}
  }
}
</script>

<style scoped>
.ArrowBox {
  display: inline-block;
  text-align: left;
  width: 20px;
}
#arrow {
  background-image: url("../assets/parts/arrow.png");
  display: inline-block;
  background-size:contain;
  background-repeat:no-repeat;
  background-position: center;
  width: 20px;
  height: 50px;
}
</style>
