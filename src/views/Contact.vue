<template>
  <div class="contact-bg">
    <NavBar />
    <v-container>
      <h2 class="text-h2 font-weight-bold text-center color-lig mt-12">formulario de contacto</h2>
      <v-container>
        <v-form class="form-style mx-auto">
          <v-text-field
            color="primary"
            label="Nombre Completo"
            required
            autofocus
            outlined
            class="mt-12"
          ></v-text-field>
          <v-text-field color="primary" label="Email" required outlined class="my-3"></v-text-field>
          <v-text-field color="primary" label="Motivo de contacto" required outlined class="my-3"></v-text-field>
          <v-textarea outlined color="primary" label="Detalle su motivo" class="color-lig"></v-textarea>
          <v-row class="justify-space-between my-6">
            <v-btn color="primary">Borrar</v-btn>
            <v-btn color="error">Cancelar</v-btn>
            <v-btn color="success">Enviar</v-btn>
          </v-row>
        </v-form>
      </v-container>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
.contact-bg {
  background-image: url('../assets/pictures/keyboard-v3.jpg');
  background-size: 100%;
}
.form-style {
  width: 500px;
}
.color-lig {
  color: var(--lightBlue);
}
.v-text-field fieldset,
.v-text-field .v-input__control {
  color: var(--lightBlue) !important;
}
input {
  color: var(--lightBlue) !important;
}
label {
  color: var(--lightBlue) !important;
}
textarea {
  color: var(--lightBlue) !important;
}
</style>
