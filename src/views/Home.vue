<template>
  <div class="home-bg">
    <NavBar />
    <About />
    <WhatIDo />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import About from '../components/About'
import WhatIDo from '../components/WhatIDo'

export default {
  name: 'Home',
  components: {
    NavBar,
    About,
    WhatIDo
  }
}
</script>

<style lang="scss">
.home-bg {
  background-image: url('../assets/pictures/keyboard-v1.jpg');
}
</style>
