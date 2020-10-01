<template>
  <div class="navbar-bg">
    <v-app-bar class="app-navbar" fixed>
      <v-container class="float-left">
        <v-row>
          <v-btn
            color="#006D77"
            text
            v-for="tab in tabs"
            :key="tab.name"
            :to="tab.to"
          >{{ tab.name }}</v-btn>
          <v-spacer></v-spacer>
          <v-btn class="mr-2" height="32px" width="32px" icon>
            <v-img height="32px" width="32px" src="../assets/pictures/spain.png"></v-img>
          </v-btn>
          <v-btn height="28px" width="28px" icon>
            <v-img height="28px" width="28px" src="../assets/pictures/eng.png"></v-img>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'

export default {
  name: 'NavBar',
  data: () => ({
    tabs: [
      {
        name: i18n.t('home.navbar.tabs.home'),
        to: '/'
      },
      {
        name: i18n.t('home.navbar.tabs.whoAmI'),
        to: '/whoAmI'
      },
      {
        name: i18n.t('home.navbar.tabs.experience'),
        to: '/experience'
      },
      {
        name: i18n.t('home.navbar.tabs.projects'),
        to: '/projects'
      },

      {
        name: i18n.t('home.navbar.tabs.contact'),
        to: '/contact'
      }
    ],
    items: [
      {
        text: 'Español',
        icon: '../assets/pictures/spain.png'
      },
      {
        text: 'English',
        icon: '../assets/pictures/spain.png'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: var(--bgWhite)
}

a:hover {
  border-bottom: 3px var(--mateOrange) solid;
}
.v-btn--active {
  border-bottom: 3px var(--mateOrange) solid;
}
</style>
