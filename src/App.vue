<template>
  <v-app>
    <v-main>
      <v-parallax height="50vh" src="./assets/pictures/keyboard-v1.jpg">
        <NavBar />

        <router-view></router-view>
      </v-parallax>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    NavBar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
