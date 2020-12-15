<template>
  <v-container>
    <v-row class="my-16">
      <v-col class="d-flex flex-column justify-center offset-1 col-3">
        <h2 class="text-h2 font-weight-bold">{{ project.title }}</h2>
        <div class="title-divider my-3"></div>
        <p>{{ project.desc }}</p>
        <h6 class="text-h6">Tecnologías usadas:</h6>

        <v-row class="d-flex justify-space-between flex-nowrap">
          <v-col
            v-for="icon in project.icons"
            :key="icon.name"
            class="text-center"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="tech-icon"
                  v-bind="attrs"
                  v-on="on"
                  large
                  :color="icon.color"
                  >{{ icon.icon }}</v-icon
                >
              </template>
              <span>{{ icon.name }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-btn
          :href="project.url"
          target="_blank"
          rounded
          x-large
          elevation="20"
          class="site-btn font-weight-black mx-auto mateOrange--text lightBlue"
          color="lightBlue"
          >Ver Sitio</v-btn
        >
      </v-col>
      <v-col class="col-6 offset-1">
        <v-card elevation="24">
          <v-img :src="project.img"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import project02 from '../../assets/pictures/bikelist.png'

export default {
  component: {
    project02
  },
  data() {
    return {
      project: {
        title: 'Bikelist',
        desc:
          'Proyecto de practica utilizando firebase como base de datos y haciendo modelo CRUD. ',
        icons: [
          { name: 'html', icon: 'mdi-language-html5', color: '#e96228' },
          { name: 'css', icon: 'mdi-language-css3', color: '#28a3d9' },
          {
            name: 'javascript',
            icon: 'mdi-language-javascript',
            color: '#f7da03'
          },
          { name: 'git', icon: 'mdi-git', color: '#eb4d28' },
          { name: 'github', icon: 'mdi-github', color: '#303030' },
          { name: 'firebase', icon: 'mdi-firebase', color: '#F4C62F' }
        ],
        url: 'https://estebana28.github.io/bikes/',
        img: project02
      }
    }
  }
}
</script>

<style lang="scss">
h4,
h6,
h2,
h1 {
  color: var(--lightBlue);
}

.title-divider {
  width: 100px;
  border-top: 4px var(--mateOrange) solid;
}

.tech-icon {
  filter: grayscale(1);
  &:hover {
    filter: none;
  }
}
</style>
