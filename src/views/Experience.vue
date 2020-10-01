<template>
  <div class="exp-bg">
    <Leapsight />
    <Exo />
    <HI />
  </div>
</template>

<script>
import Leapsight from '../components/experience/Leapsight'
import Exo from '../components/experience/Exo'
import HI from '../components/experience/HI'

export default {
  components: {
    Leapsight,
    Exo,
    HI
  }
}
</script>

<style lang="scss">
.exp-bg {
  position: relative;
  display: block;
  width: 100vw;
  min-height: calc(100vh - 189px);
  z-index: 2;
}
.exp-bg:after {
  content: '';
  background-image: url('../assets/pictures/desk.jpg');
  background-position: center;
  background-repeat: repeat-y;
  background-size: 100%;
  background-size: cover;
  opacity: .5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
</style>
