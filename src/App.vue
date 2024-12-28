<template>
  <v-app>
    <BaseLayout />
  </v-app>
</template>

<script>
import BaseLayout from "./layouts/BaseLayout.vue";

export default {
  components: {
    BaseLayout,
  },
};
</script>

<style>
/* Fondo general de la app */
body {
  margin: 0;
  padding: 0;
  background-color: #FFF8E1; /* Blanco hueso */
  font-family: "Roboto", sans-serif; /* Tipografía elegante */
}
</style>
