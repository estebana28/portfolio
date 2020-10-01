<template>
  <div class="projects-bg">
    <v-container>
      <h1 class="text-h1 mt-7">Proyectos</h1>
      <div class="div-divider mt-5"></div>
      <ProjectList />
    </v-container>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
import ProjectList from '../components/projects/ProjectList'

export default {
  components: {
    ProjectList,
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
</style>
