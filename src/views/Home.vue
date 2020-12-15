<template>
  <div class="bg-home">
    <About />
    <Divider />
    <WhatIDo />
  </div>
</template>

<script>
import About from '../components/About'
import Divider from '../components/styled/Divider'
import WhatIDo from '../components/WhatIDo'

export default {
  name: 'Home',
  components: {
    About,
    Divider,
    WhatIDo
  }
}
</script>

<style lang="scss">
.bg-home {
  position: relative;
  display: block;
  width: 100vw;
  min-height: calc(100vh - 189px);
  z-index: 2;
}

.bg-home:after {
  content: '';
  background-image: url('../assets/pictures/lapbook.jpg');
  background-size: cover;
  opacity: 0.15;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
</style>
