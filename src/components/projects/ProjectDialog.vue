<template>
  <v-dialog v-model="dialog">
    <v-card>
      <h1>Lola</h1>
      <v-img :src="path"></v-img>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['path', 'dialog']
}
</script>

<style>
.theme--light.v-card {
  color: var(--petrolBlue);
}

.theme--light.v-btn.v-btn--outlined.v-btn--text {
  color: var(--petrolBlue);
  border-color: var(--mateOrange);
}
</style>
