<template>
  <v-footer padless class="d-flex justify-center">
    <div v-for="icon in icons" :key="icon.name">
      <v-btn class="col" :href="icon.path" target="_blank" icon x-large color="#94bed9">
        <v-icon>{{ icon.icon }}</v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          name: 'Linkedin',
          icon: 'mdi-linkedin',
          path: 'https://www.linkedin.com/in/estebana28/'
        },
        {
          name: 'Github',
          icon: 'mdi-github',
          path: 'https://github.com/estebana28'
        },
        {
          name: 'Gmail',
          icon: 'mdi-gmail',
          path: 'mailto: eesteban.arce@gmail.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.theme--light.v-footer {
  background-color: #003f5c !important;
  height: 125px;
}
</style>
