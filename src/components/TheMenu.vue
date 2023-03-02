<template>
  <v-row class="menu">
    <v-col cols="4" v-for="(item, i) in menu" :key="i">
      <v-card outlined @click.stop="addItem(item)" class="item-card">
        <v-card-title primary-title> {{ item.name }} </v-card-title>
        <v-card-subtitle> {{ item.price | price }} </v-card-subtitle>
        <v-card-text class="info-text">{{
          item.extra.join(", ") || ""
        }}</v-card-text>
      </v-card>
    </v-col>
    <MenuSelectionDetialsVue
      :item="currentItem"
      :extra="extra || []"
      ref="dialog"
    />
  </v-row>
</template>

<script>
import MenuSelectionDetialsVue from "./MenuSelectionDetials";
export default {
  name: "TheMenu",
  props: {
    menu: {
      type: Array,
      required: true,
    },
    extra: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentItem: {
        name: "",
        price: {},
        extra: [],
        remark: [],
      },
    };
  },
  methods: {
    addItem(item) {
      // console.log(item);
      this.currentItem = item;
      this.$refs.dialog.switchDialog();
    },
  },
  filters: {
    price(prices) {
      const keys = Object.keys(prices);
      if (keys.length == 1) return "￥" + prices[keys[0]];
      var max = prices[keys[0]],
        min = prices[keys[0]];
      for (var price in prices) {
        max = max < prices[price] ? prices[price] : max;
        min = min > prices[price] ? prices[price] : min;
      }
      return `￥${min}--￥${max}`;
    },
  },
  components: { MenuSelectionDetialsVue },
};
</script>

<style lang="less">
.menu {
  width: 100%;
  height: 100%;
  // There is a flex bug that items can`t be show in full when set the height as 100% in flex content
  max-height: calc(100vh - 20px);
  overflow-x: hidden;
  overflow-y: auto;
  align-content: flex-start;
}
.info-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
