<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app {
  background-image: url("./assets/backimage2.jpg");
  background-size:contain;
  background-size:cover;
}
#app {
  width: 100vw;
  height: 100vh;
  top: 0px;
  position: absolute;
}
</style>
