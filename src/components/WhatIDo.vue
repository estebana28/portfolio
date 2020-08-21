<template>
  <div class="what-ido">
    <v-container>
      <h1 class="text-h3 mb-8 mt-16">¿Que puedo hacer?</h1>
      <v-row>
        <v-col cols="4" v-for="tab in tabs" :key="tab.title">
          <div shaped class="card-bg pa-3">
            <h3 class="text-h4 font-weight-bold mb-3">{{ tab.title }}</h3>
            <div class="div-divider mb-3"></div>

            <p>{{ tab.text }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      {
        title: 'diseño web',
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore porro, aut non hic, laudantium praesentium maiores sed debitis magni repellendus doloremque repellat provident necessitatibus neque ipsa aperiam exercitationem soluta quaerat.'
      },
      {
        title: 'programación',
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore porro, aut non hic, laudantium praesentium maiores sed debitis magni repellendus doloremque repellat provident necessitatibus neque ipsa aperiam exercitationem soluta quaerat.'
      },
      {
        title: 'desarrollo',
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore porro, aut non hic, laudantium praesentium maiores sed debitis magni repellendus doloremque repellat provident necessitatibus neque ipsa aperiam exercitationem soluta quaerat.'
      }
    ]
  })
}
</script>

<style lang="scss">
.what-ido {
  color: var(--lightBlue);
  height: 525px;
  background-image: url('../assets/pictures/keyboard-v1.jpg');
}
.div-divider {
  width: 75px;
  border-top: 3px var(--mateOrange) solid;
}
.theme--light.v-card.card-bg {
  background-color: var(--lightBlue);
  color: var(--petrolBlue);
}
</style>
