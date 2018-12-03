<template>
  <div class="NodeItem" @click="nodeClick">
    <p>{{item.title}}</p>
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
    item: {}
  },
  methods: {
    nodeClick: function () {
      store.commit('nodeSelect', this.item)
    }
  }
}
</script>

<style scoped>
.NodeItem{
  background-color: whitesmoke;
  width: 200px;
  height: 50px;
  text-align: center;
  margin-top: 3px;
  display:block;
  position:relative;
}
p {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
  width: 100px;
  text-align: center;
}
</style>
