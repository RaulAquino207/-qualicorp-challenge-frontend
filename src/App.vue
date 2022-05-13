<template>
  <div>
    <NavigationBar :logo="logo_src" :alt="app_name" />
    <div class="router">
      <router-view></router-view>
    </div>
    <FooterBar />
  </div>
</template>
<script>
import NavigationBar from './components/NavigationBar'
import FooterBar from './components/FooterBar.vue'
export default {
  data: function() {
    return {
      app_name: "Qualicorp challenge"
    }
  },
  components: {
    NavigationBar,
    FooterBar
  }
}
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main-container {
    margin: 50px;
    min-height: 250px;
  }
  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>