<template>
  <div class="who-bg">
    <NavBar />
    <v-container></v-container>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
.who-bg {
  background-image: url('../assets/pictures/laptop.jpg');
}
</style>
