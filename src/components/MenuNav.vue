<template>
  <div class="menu-nav">
    <v-list class="menu-nav-list">
      <v-list-item
        class="menu-nav-item"
        @click="switchMenu(menuName)"
        v-for="menuName in menus"
        :key="menuName"
        >{{ menuName }}</v-list-item
      >
    </v-list>
    <!-- <div v-for="menuName in menus" :key="menuName">{{ menuName }}</div> -->
  </div>
</template>

<script>
export default {
  name: "MenuNav",
  props: {
    menus: {
      type: Array,
      required: true,
    },
    switchMenu: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="less">
.menu-nav {
  width: 100%;
  height: 100%;
}
.menu-nav-list {
  .menu-nav;
  overflow-y: auto;
}
.menu-nav-item {
  //   outline: solid;
  width: 100%;
  height: 10vh;
  line-height: 100%;
  text-align: center;
}
</style>
