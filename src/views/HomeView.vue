<template>
  <div class="home">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'HomeView',
  components: {
    MainPage
  }
}
</script>
<style>
    .home{
      height:80vh;
    }
</style>