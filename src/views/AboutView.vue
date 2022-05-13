<template>
  <div class="about">
    <router-link id="logo-url" to="/">
        <img id="logo" src="../assets/image001.png" :alt="alt">
      </router-link>
    <h2> Welcome to the qualicorp challenge page! </h2>
    <p> This is a challenge proposed by the qualicorp team 🤝</p>
    <p> Visit the backend on <a href="https://github.com/RaulAquino207/qualicorp-challenge-backend" className="link" target="_blank">github-backend 👈</a> </p>
    <p> Visit the frontend on <a href="https://github.com/RaulAquino207/qualicorp-challenge-frontend" className="link" target="_blank">github-frontend 👈</a> </p>
    <p> And visit my profile on<a href="https://github.com/RaulAquino207" className="link" target="_blank"> github 👈</a> </p>
  </div>
</template>
<script>

export default {
  name: 'AboutView',
}
</script>
<style>
    .about{
      text-align: center;
        min-height: 100vh;
        color: black;
        flex-direction: column;
        font-size: calc(10px + 2vmin);
        align-items: center;
        justify-content: center;
        /* display: flex; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        margin-left: 30px;
    }
    .link {
        color: #61dafb;
        text-decoration:none;
    }
    .link:hover {
        color: #f7dda4;
    }
</style>
