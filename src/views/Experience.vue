<template>
  <div class="exp-bg">
    <NavBar />
    <Leapsight />
    <Exo />
    <HI />
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Leapsight from '../components/experience/Leapsight'
import Exo from '../components/experience/Exo'
import HI from '../components/experience/HI'
import Footer from '../components/Footer'

export default {
  components: {
    NavBar,
    Footer,

    Leapsight,
    Exo,

    HI
  }
}
</script>

<style lang="scss">
.exp-bg {
  background-image: url('../assets/pictures/desk.jpg');
  background-position: center;
  background-repeat: repeat-y;
}
</style>
