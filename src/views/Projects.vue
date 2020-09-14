<template>
  <div class="projects-bg">
    <NavBar />
    <v-container>
      <h1 class="text-h1 mt-8">Proyectos</h1>
      <div class="div-divider mt-5"></div>
      <ProjectList />
    </v-container>
    <v-spacer></v-spacer>

    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProjectList from '../components/projects/ProjectList'

export default {
  components: {
    NavBar,
    ProjectList,
    Footer
  }
}
</script>

<style lang="scss">
.projects-bg {
  background-image: url('../assets/pictures/keyboard-v2.jpg');
  background-repeat: repeat-y;
}
</style>

<style lang="scss" scoped>
.div-divider {
  width: 125px;
  border-top: 5px #e86252 solid;
  height: 5rem;
}
h1 {
  color: var(--lightBlue);
}
</style>
