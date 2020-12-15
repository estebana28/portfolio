<template>
  <div class="contact-bg">
    <v-container>
      <h2 class="text-h2 font-weight-bold text-center color-lig pt-8">
        {{ $t('home.sections.contact.title') }}
      </h2>
      <v-container>
        <v-form
          class="form-style mx-auto"
          id="contact-form"
          @submit.prevent="sendEmail"
        >
          <v-text-field
            color="lightBlue"
            :label="$t('home.sections.contact.name')"
            type="text"
            name="user_name"
            :rules="nameRules"
            v-model="name"
            required
            autofocus
            outlined
            class="mt-12"
          ></v-text-field>
          <v-text-field
            color="lightBlue"
            :label="$t('home.sections.contact.email')"
            type="email"
            name="user_mail"
            :rules="emailRules"
            v-model="email"
            required
            outlined
            class="my-3"
          >
          </v-text-field>
          <v-text-field
            color="lightBlue"
            :label="$t('home.sections.contact.reason')"
            type="text"
            name="motivo"
            v-model="motivo"
            required
            outlined
            class="my-3"
          >
          </v-text-field>
          <v-textarea
            outlined
            color="lightBlue"
            type="text"
            :label="$t('home.sections.contact.detail')"
            name="textarea"
            :rules="textareaRules"
            v-model="textarea"
            class="color-lig"
          >
          </v-textarea>
          <v-row class="justify-space-between my-6">
            <v-btn color="primary" @click="clearFields()">{{
              $t('home.sections.contact.clear')
            }}</v-btn>
            <v-btn color="error" to="/#">{{
              $t('home.sections.contact.cancel')
            }}</v-btn>
            <v-btn color="success" type="submit" value="Send">{{
              $t('home.sections.contact.send')
            }}</v-btn>
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
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 3) || 'Name must be less at least 3 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      motivo: '',
      textarea: '',
      textareaRules: [
        v => !!v || 'Message is required',
        v =>
          (v && v.length >= 15) || 'Message must be less at least 15 characters'
      ]
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
        (this.textarea = '')
    }
  }
}
</script>

<style lang="scss">
.contact-bg {
  position: relative;
  display: block;
  width: 100vw;
  min-height: calc(100vh - 189px);
  z-index: 2;
}
.contact-bg:after {
  content: '';
  background-image: url('../assets/pictures/keyboard-v2.jpg');
  background-size: cover;
  opacity: 0.2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
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
