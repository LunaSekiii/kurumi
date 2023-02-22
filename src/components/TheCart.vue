<template>
  <div class="cart">
    <v-list class="cart-list">
      <v-list-item @click="openItem()" three-line v-for="i in 13" :key="i">
        <v-list-item-content>
          <v-list-item-title>商品{{ i }}</v-list-item-title>
          <v-list-item-subtitle>
            详细信息 <v-btn color="info">text</v-btn></v-list-item-subtitle
          >
          <v-list-item-subtitle> 备注 </v-list-item-subtitle>
        </v-list-item-content></v-list-item
      >
    </v-list>
    <v-btn color="primary" class="settle-btn"> 结算 </v-btn>
  </div>
</template>

<script>
export default {
  name: "TheCart",
  methods: {
    openItem() {
      alert("open item");
    },
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 60px);
}
.cart-list {
  width: 100%;
  height: 80%;
  overflow-y: auto;
}
.settle-btn {
  width: 90% !important;
  height: 18% !important;
  margin: auto !important;
  padding: 30px 0px !important;
}
</style>
