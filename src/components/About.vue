<template>
  <div class="about">
    <v-container>
      <v-row justify="center">
        <v-col cols="5">
          <v-img height="555" src="../assets/pictures/avatar.png" class="focus-in"></v-img>
        </v-col>
        <v-col cols="5" class="align-self-center">
          <div class="ml-4">
            <p class="text-h3 font-weight-bold">esteban arce</p>
            <h3 class="text-h5 mb-16">frontend web developer</h3>
            <p class="text-h4 mb-4">About Me</p>
            <div class="div-divider mb-3"></div>

            <p class="text-h6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              sequi a qui doloribus. Fuga optio iusto repellat iste distinctio
              dignissimos. Repellat neque consectetur officia molestiae quo
              voluptas debitis, doloremque rerum?
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.about {
  //background-color: #003f5c;
  color: #94bed9;
}
.div-divider {
  width: 75px;
  border-top: 3px #e86252 solid;
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
