<template>
  <div class="cart">
    <v-list class="cart-list">
      <v-list-item
        @click="openItem()"
        three-line
        v-for="item in cartItems"
        :key="
          item.item.name +
          item.price +
          item.extra.toString() +
          item.remark.toString()
        "
      >
        <CartItem @changeCount="changeCountInItem" :item="item" />
      </v-list-item>
    </v-list>
    <v-btn color="primary" class="settle-btn"> 结算 </v-btn>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  name: "TheCart",
  data() {
    return {
      cartItems: [],
    };
  },
  mounted() {
    this.$bus.$on("addItemToCart", (e) => {
      // console.log(e);
      this.cartItems.push(e);
    });
  },
  methods: {
    openItem() {
      alert("open item");
    },
    changeCountInItem(v, item) {
      this.cartItems.forEach((i, index) => {
        if (i === item) {
          if (v === 0) {
            alert("删除?");
            this.cartItems.splice(index, 1);
          }
          i.count = v;
        }
      });
    },
  },
  components: { CartItem },
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
  font-size: 2rem;
}
</style>
