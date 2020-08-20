<template>
  <div class="leap-bg">
    <v-container>
      <v-row>
        <v-col cols="4" class="mt-6">
          <v-img class="leap-img" src="../../assets/pictures/leap-logo.png"></v-img>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="6" class="exp-text mt-16">
          <h2 class="text-h2 mt-4 color-lig">frontend developer</h2>
          <div class="div-divider mt-3"></div>
          <h5 class="text-h5 color-lig my-5">{{ $t('home.sections.experience.exp2-title') }}</h5>
          <p class="color-lig text-subtitle">{{ $t('home.sections.experience.exp2-text') }}</p>
          <h6 class="text-h6 color-lig">
            <span class="color-ora">{{ $t('home.sections.experience.tech') }}</span>
            {{ $t('home.sections.experience.exp2-tech') }}
          </h6>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.leap-bg {
  width: 100vw;
  height: 600px;
  background-color: #e6e6e6;
  opacity: 0.7;
}
.leap-img {
  height: 140px;
  width: 400px;
  top: 35%;
}
.color-lig {
  color: var(--petrolBlue);
}
.color-ora {
  color: var(--mateOrange);
}
.div-divider {
  width: 75px;
  border-top: 3px #e86252 solid;
}
.exp-text {
}
</style>
