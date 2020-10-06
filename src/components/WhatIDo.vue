<template>
  <div class="what-ido">
    <v-container>
      <!-- <v-row>
        <v-col cols="4" v-for="tab in tabs" :key="tab.title">
          <div shaped class="card-bg pa-3">
            <h3 class="text-h4 font-weight-bold mb-3">{{ tab.title }}</h3>
            <div class="div-divider mb-3"></div>

            <p>{{ tab.text }}</p>
          </div>
        </v-col>
      </v-row> -->
      <div class="cards-container">
        <div class="box">
          <h2>{{ $t('home.whatIDo.card1.abreviation') }}</h2>
          <h3>{{ $t('home.whatIDo.card1.title') }}</h3>
          <p>{{ $t('home.whatIDo.card1.desc') }}</p>
        </div>
        <div class="box">
          <h2>{{ $t('home.whatIDo.card2.abreviation') }}</h2>
          <h3>{{ $t('home.whatIDo.card2.title') }}</h3>
          <p>{{ $t('home.whatIDo.card2.desc') }}</p>
        </div>
        <div class="box">
          <h2>{{ $t('home.whatIDo.card3.abreviation') }}</h2>
          <h3>{{ $t('home.whatIDo.card3.title') }}</h3>
          <p>{{ $t('home.whatIDo.card3.desc') }}</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      {
        title: 'diseño',
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
  color: var(--blackText);
  height: 525px;
}
.div-divider {
  width: 75px;
  border-top: 3px var(--mateOrange) solid;
}

.cards-container {
  width: 1100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cards-container .box {
  position: relative;
  width: 320px;
  background-color: #fff;
  padding: 100px 40px 60px;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

.cards-container .box:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mateOrange);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.5s;
  border-radius: 15px;
}

.cards-container .box:hover:before {
  transform: scaleY(1);
  transform-origin: bottom;
  transition: transform 0.5s;
}

.cards-container .box h2 {
  position: absolute;
  left: 40px;
  top: 60px;
  font-size: 4rem;
  font-weight: 800;
  z-index: 1;
  opacity: 0.1;
  transition: 0.5s;
}

.cards-container .box:hover h2 {
  opacity: 1;
  color: #fff;
  transform: translateY(-40px);
}

.cards-container .box h3 {
  position: relative;
  font-size: 1.5rem;
  z-index: 2;
  color: #333;
  transition: 0.5s;
}

.cards-container .box:hover h3 {
  color: #fff;
}
.cards-container .box p {
  position: relative;
  z-index: 2;
  color: #555;
  transition: 0.5s;
}

.cards-container .box:hover h3,
.cards-container .box:hover p {
  color: #fff;
}
</style>
