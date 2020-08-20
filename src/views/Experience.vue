<template>
  <div class="exp-bg">
    <NavBar />
    <v-timeline></v-timeline>
    <Leapsight />
    <Exo />
    <HI />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Leapsight from '../components/experience/Leapsight'
import Exo from '../components/experience/Exo'
import HI from '../components/experience/HI'

export default {
  components: {
    NavBar,
    Leapsight,
    Exo,
    HI
  }
}
</script>

<style lang="scss">
.exp-bg {
  background-image: url('../assets/pictures/keyboard-v1.jpg');
}
</style>
