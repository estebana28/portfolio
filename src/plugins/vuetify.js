import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#94bed9',
        secondary: '#003f5c',
        terciary: '#e86252',
        petrolBlue: '#003f5c',
        lightBlue: '#006D77',
        mateOrange: '#E29578',
        bgWhite: '#EBEBEB',
        blackText: '#262322'
      }
    }
  }
})
