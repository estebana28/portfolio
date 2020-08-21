<template>
  <div class="projects-bg">
    <NavBar />

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
.projects-bg {
  background-image: url('../assets/pictures/keyboard-v1.jpg');
  background-repeat: repeat-y;
}
</style>
