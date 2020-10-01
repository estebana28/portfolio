<template>
  <div class="contact-bg">
    <v-container>
      <h2 class="text-h2 font-weight-bold text-center color-lig mt-12">formulario de contacto</h2>
      <v-container>
        <v-form class="form-style mx-auto">
          <v-text-field
            color="lightBlue"
            label="Nombre Completo"
            required
            autofocus
            outlined
            class="mt-12"
          ></v-text-field>
          <v-text-field color="lightBlue" label="Email" required outlined class="my-3"></v-text-field>
          <v-text-field color="lightBlue" label="Motivo de contacto" required outlined class="my-3"></v-text-field>
          <v-textarea outlined color="lightBlue" label="Detalle su motivo" class="color-lig"></v-textarea>
          <v-row class="justify-space-between my-6">
            <v-btn color="primary">Borrar</v-btn>
            <v-btn color="error">Cancelar</v-btn>
            <v-btn color="success">Enviar</v-btn>
          </v-row>
        </v-form>
      </v-container>
    </v-container>
  </div>
</template>

<script>


export default {
  components: {
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
