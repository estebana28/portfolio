<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="ma-5 card-wrapper">
      <v-img class="img-wrapper" :src="path" />
      <v-expand-transition>
        <v-btn
          v-if="hover"
          @click="dialog = !dialog"
          outlined
          class="d-flex v-card--reveal"
          style="height: 100%"
        >
          <div class="text-wrapper">{{ name }}</div>
        </v-btn>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ['name', 'path', 'dialog']
}
</script>

<style></style>
