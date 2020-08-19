<template>
  <div>
    <NavBar />
    <v-timeline></v-timeline>
    <Leapsight />
    <Exo />
    <HI />
  </div>
</template>

<script>
import Leapsight from "../components/experience/Leapsight";
import Exo from "../components/experience/Exo";
import HI from "../components/experience/HI";

export default {
  components: {
    Leapsight,
    Exo,
    HI
  }
};
</script>

<style></style>
