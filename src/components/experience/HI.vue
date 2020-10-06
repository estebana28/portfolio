<template>
  <div class="hi-bg">
    <v-container>
      <v-row>
        <v-col cols="4" class="mt-6 slide-in-left">
          <v-img class="hi-img" src="../../assets/pictures/hi.jpg"></v-img>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="6" class="exp-text mt-8 slide-in-right">
          <h2 class="text-h2 mt-4 color-lig">
            {{ $t('home.sections.experience.position3') }}
          </h2>
          <div class="div-divider mt-3"></div>
          <h5 class="text-h5 color-lig my-5">
            {{ $t('home.sections.experience.exp3-title') }}
          </h5>
          <p class="color-lig text-subtitle">
            {{ $t('home.sections.experience.exp3-text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hi-bg {
  width: 100vw;
  height: 610px;
  background-color: var(--bgWhite);
  opacity: 0.7;
}
.hi-img {
  width: 400px;
  top: 25%;
}
.color-lig {
  color: var(--blackText);
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

//Animation
.slide-in-right {
  -webkit-animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s
    both;
  animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
}
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-left {
  -webkit-animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s
    both;
  animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
