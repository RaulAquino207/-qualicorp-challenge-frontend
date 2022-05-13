<template>
  <div>
    <div id="nav">
      <router-link id="logo-url" to="/">
        <img id="logo" src="../assets/image001.png" :alt="alt">
      </router-link>
      
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    logo: String
  }
}
</script>

<style scoped>
  #nav {
    background-color: #222;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }
  #logo {
    width: 40px;
    height: 40px;
  }
  #nav a {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }
  #nav a:hover {
    color: #DEC057;
  }
</style>
