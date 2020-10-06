<template>
  <v-row class="my-16">
    <v-col cols="8">
      <v-card elevation="24">
        <v-img :src="project.img"></v-img>
      </v-card>
    </v-col>
    <v-col cols="4" class="d-flex flex-column">
      <h1 class="text-h2 font-weight-bold">{{ project.title }}</h1>
      <div class="title-divider my-3"></div>
      <p>{{ project.desc }}</p>
      <h4 class="text-h6">Tecnologías usadas:</h4>

      <v-row class="justify-space-between flex-nowrap">
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
        >Ver Sitio</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import project01 from '../../assets/pictures/portfolio.jpg'

export default {
  component: {
    project01
  },
  data() {
    return {
      project: {
        title: 'Portfolio',
        desc:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus commodi sunt nam vitae obcaecati odit voluptatum aut, at iusto quod quisquam alias animi voluptates ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus commodi sunt nam vitae obcaecati odit voluptatum aut, at iusto quod quisquam alias animi voluptates ipsum? ',
        icons: [
          { name: 'html', icon: 'mdi-language-html5', color: '#e96228' },
          { name: 'css', icon: 'mdi-language-css3', color: '#28a3d9' },
          {
            name: 'javascript',
            icon: 'mdi-language-javascript',
            color: '#f7da03'
          },
          { name: 'vuejs', icon: 'mdi-vuejs', color: '#29bb7c' },
          { name: 'vuetify', icon: 'mdi-vuetify', color: '#77c0f7' },
          { name: 'git', icon: 'mdi-git', color: '#eb4d28' },
          { name: 'github', icon: 'mdi-github', color: '#303030' }
        ],
        url: 'https://estebana28.github.io/portfolio/',
        img: project01
      }
    }
  }
}
</script>

<style lang="scss">
h4,
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
