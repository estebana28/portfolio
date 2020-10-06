<template>
  <v-row class="my-16">
    <v-col cols="8">
      <v-img :src=""></v-img>
    </v-col>
    <v-col cols="4" class="d-flex flex-column">
      <h1 class="text-h3"></h1>
      <div class="title-divider my-3"></div>
      <p></p>
      <h4>Tecnologías usadas:</h4>

      <v-row class="justify-space-between flex-nowrap">
        <v-col v-for="" :key="" class="text-center">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large></v-icon>
            </template>
            <span></span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-btn
        :to=""
        rounded
        x-large
        elevation="15"
        class="font-weight-black mx-auto"
        color="lightBlue"
        >Ver Sitio</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      project: {
        title: '',
        desc: '',
        icons: [
          { name: '', icon: '' },
          { name: '', icon: '' },
          { name: '', icon: '' },
          { name: '', icon: '' },
          { name: '', icon: '' },
          { name: '', icon: '' },
          { name: '', icon: '' },
          { name: '', icon: '' },
          { name: '', icon: '' },
          { name: '', icon: '' }
        ],
        url: ''
      }
    }
  }
}
</script>

<style></style>
