<template>
  <div class="exo-bg">
    <v-container>
      <v-row>
        <v-col cols="6" class="exp-text mt-6 slide-in-left">
          <h2 class="text-h2 mt-4 color-white">
            desarrollador
            <br />full stack
          </h2>
          <div class="div-divider mt-3"></div>
          <h5 class="text-h5 color-white my-5">{{ $t('home.sections.experience.exp1-title') }}</h5>
          <p class="color-white text-subtitle">{{ $t('home.sections.experience.exp1-text') }}</p>
          <h6 class="text-h6 color-white">
            <span class="color-ora">
              {{
              $t('home.sections.experience.tech')
              }}
            </span>
            {{ $t('home.sections.experience.exp1-tech') }}
          </h6>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="4" class="mt-6 slide-in-right">
          <v-img class="exo-img" src="../../assets/pictures/exo.jpg"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.exo-bg {
  width: 100vw;
  height: 600px;
  background-color: var(--petrolBlue);
  opacity: 0.7;
}
.leap-img {
  height: 600px;
}
.color-white {
  color: #e6e6e6;
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
  -webkit-animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s
    both;
  animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
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
  -webkit-animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s
    both;
  animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
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
