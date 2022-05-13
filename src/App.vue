<template>
  <img alt="Vue logo" src="./assets/image001.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <MainPage/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

  body {
    background: #F7F7F7 !important;
    text-align: center !important;
    /* font-family: Poppins !important;
    font-family: Avenir, Helvetica, Arial, sans-serif !important; */
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
  }
</style>
