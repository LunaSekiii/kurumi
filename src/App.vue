<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
export default {
  name: "App",

  components: { AppBar },

  data: () => ({
    //
  }),
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html {
  overflow: hidden;
}
// scrollbar
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #ffc107;
  box-shadow: inset 0 0 5px gray;
  border-radius: 5px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px gray;
}
</style>
