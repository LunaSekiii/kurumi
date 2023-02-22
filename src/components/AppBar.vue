<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="40"
      />
      <div class="text-h3" v-text="'Kurumi'" />
    </div>

    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style></style>
