<template>
  <v-row>
    <v-col cols="4" v-for="item in items" :key="item.name" class="pa-0">
      <v-hover v-slot:default="{ hover }">
        <v-card class="ma-5 card-wrapper">
          <v-img class="img-wrapper" :src="item.path" />
          <v-expand-transition>
            <v-btn
              v-if="hover"
              outlined
              class="d-flex v-card--reveal"
              style="height: 100%"
              v-on="on"
            >
              <div class="text-wrapper">{{ item.name }}</div>
            </v-btn>
          </v-expand-transition>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import portfolioPic from '../../assets/pictures/webdesign.jpg'
import laptop from '../../assets/pictures/laptop.jpg'
//import ProjectCard from './ProjectCard'

export default {
  components: {
    //ProjectCard
  },
  data() {
    return {
      dialog: false,
      items: [
        {
          name: 'Portfolio',
          path: portfolioPic,

          images: [],
          subtitle: '',
          desc: '',
          icons: [
            { name: 'vuejs', icon: 'mdi-vuejs' },
            { name: 'vuetify', icon: 'mdi-vuetify' },
            { name: 'javascript', icon: 'mdi-language-javascript' },
            { name: 'git', icon: 'mdi-git' }
          ],
          url: ''
        },
        {
          name: 'Portfolio2',
          path: laptop,
          images: [],
          subtitle: '',
          desc: '',
          icons: [],
          url: ''
        },
        {
          name: 'Portfolio3',
          path: portfolioPic,
          images: [],
          subtitle: '',
          desc: '',
          icons: [],
          url: ''
        },
        {
          name: 'Portfolio4',
          path: laptop,
          images: [],
          subtitle: '',
          desc: '',
          icons: [],
          url: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  background-color: var(--lightBlue);
  color: var(--mateOrange);
  font-weight: bold;
}
</style>
