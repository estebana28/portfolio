<template>
  <div class="projects-bg">
    <v-container>
      <h1 class="text-h1 font-weight-regular mt-7">Proyectos</h1>
      <div class="div-divider mt-5"></div>
      <Portfolio />
    </v-container>
  </div>
</template>

<script>
import Portfolio from '../components/projects/portfolio'

export default {
  components: {
    Portfolio
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.projects-bg {
  background-color: var(--bgWhite);
  min-height: calc(100vh - 189px);
}
</style>

<style lang="scss" scoped>
.div-divider {
  width: 125px;
  border-top: 5px var(--mateOrange) solid;
  height: 2rem;
}
h1 {
  color: var(--blackText);
}

.project-btn {
  color: var(--mateOrange);
  max-width: 300px;
}
</style>
