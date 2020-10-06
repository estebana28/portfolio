<template>
  <div class="contact-bg">
    <v-container>
      <h2 class="text-h2 font-weight-bold text-center color-lig mt-12">
        formulario de contacto
      </h2>
      <v-container>
        <v-form
          class="form-style mx-auto"
          id="contact-form"
          @submit.prevent="sendEmail"
        >
          <v-text-field
            color="lightBlue"
            label="Nombre Completo"
            type="text"
            name="user_name"
            v-model="name"
            required
            autofocus
            outlined
            class="mt-12"
          ></v-text-field>
          <v-text-field
            color="lightBlue"
            label="Email"
            type="email"
            name="user_mail"
            v-model="email"
            required
            outlined
            class="my-3"
          ></v-text-field>
          <v-text-field
            color="lightBlue"
            label="Motivo de contacto"
            type="text"
            name="motivo"
            v-model="motivo"
            required
            outlined
            class="my-3"
          ></v-text-field>
          <v-textarea
            outlined
            color="lightBlue"
            label="Detalle su motivo"
            type="text"
            name="message"
            v-model="message"
            class="color-lig"
          ></v-textarea>
          <v-row class="justify-space-between my-6">
            <v-btn color="primary" @click="clearFields()">Borrar</v-btn>
            <v-btn color="error" to="/#">Cancelar</v-btn>
            <v-btn color="success" type="submit" value="Send">Enviar</v-btn>
          </v-row>
        </v-form>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  components: {},
  data() {
    return {
      name: '',
      email: '',
      motivo: '',
      message: ''
    }
  },
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          'contact-service',
          'contact-form',
          e.target,
          'user_dw7cWfEeEFtDnK6ZOl5ns'
        )
        .then(
          result => {
            console.log('SUCCESS!', result.status, result.text)
          },
          error => {
            console.log('FAILED...', error)
          }
        )
    },
    clearFields() {
      ;(this.name = ''),
        (this.email = ''),
        (this.motivo = ''),
        (this.message = '')
    }
  }
}
</script>

<style lang="scss">
.contact-bg {
  background-color: var(--bgWhite);
  background-size: 100%;
}
.form-style {
  width: 500px;
}
.color-lig {
  color: var(--blackText);
}
.v-text-field fieldset,
.v-text-field .v-input__control {
  color: var(--blackText) !important;
}
input {
  color: var(--blackText) !important;
}
label {
  color: var(--blackText) !important;
}
textarea {
  color: var(--blackText) !important;
}
</style>
