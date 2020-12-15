<template>
  <v-container class="about">
    <v-row justify="center">
      <v-col class="col-4 offset-1">
        <v-img
          height="600"
          src="../assets/pictures/avatar.png"
          class="focus-in"
        ></v-img>
      </v-col>
      <v-col class="align-self-center col-4 offset-1">
        <div class="ml-4">
          <h2 class="text-h2 font-weight-bold">esteban arce</h2>
          <h3 class="text-h5 mb-16">{{ $t('home.about.subtitle') }}</h3>
          <h4 class="text-h4 mb-4">{{ $t('home.about.about') }}</h4>
          <div class="div-divider mb-3"></div>

          <h6 class="text-h6">
            {{ $t('home.about.desc') }}
          </h6>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.about {
  color: var(--blackText);
}
.div-divider {
  width: 75px;
  border-top: 3px var(--mateOrange) solid;
}
.focus-in {
  -webkit-animation: text-focus-in 6s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation: text-focus-in 6s cubic-bezier(0.23, 1, 0.32, 1) both;
}
@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(30px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(30px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
</style>
