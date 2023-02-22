<template>
  <v-dialog
    v-model="dialog"
    :overlay="false"
    max-width="500px"
    transition="scale-transition"
  >
    <v-card>
      <v-card-title>
        {{ item.name }}
      </v-card-title>
      <v-divider />
      <v-card-subtitle>
        <v-row no-gutters>
          <v-col cols="2" v-for="price in Object.keys(item.price)" :key="price">
            <v-chip
              :class="currentPrice === price ? 'active chip' : 'chip'"
              @click="selectPrice(price)"
              >{{ price }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-divider />
      <v-card-text>
        <v-row no-gutters>
          <v-col cols="2" v-for="extra in item.extra" :key="extra">
            <v-chip
              :class="extraIsActive(extra) ? 'active chip' : 'chip'"
              @click="selectExtra(extra)"
              >{{ extra }}
            </v-chip>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="2" v-for="remark in item.remarks" :key="remark">
            <v-chip
              :class="remarkIsActive(remark) ? 'active chip' : 'chip'"
              @click="selectExtra(remark)"
              >{{ remark }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <!-- <v-spacer/> -->
        <div class="count-box">
          <label class="count-label" for="count-input">数量</label>
          <v-btn class="count-reduce" @click="count--" :disabled="count <= 1"
            >-</v-btn
          >
          <input
            type="text"
            v-model="count"
            id="count-input"
            class="count-input"
            joninput="value=value.replace(/[^\d]/g,'')"
          />
          <v-btn class="count-add" @click="count++">+</v-btn>
        </div>
        <v-spacer />
        <v-btn @click="addItem"> 添加--￥{{ totalPrice }} </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "MenuSelectionDetials",
  data() {
    return {
      dialog: false,
      count: 1,
      currentPrice: "",
      currentExtra: [],
      currentRemark: [],
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    extra: {
      type: [],
      required: true,
    },
  },
  methods: {
    switchDialog() {
      this.dialog = !this.dialog;
      this.count = 1;
      this.currentPrice = "";
      this.currentExtra = [];
      this.currentRemark = [];
    },
    addItem() {
      this.switchDialog();
    },
    extraIsActive(extra) {
      var isExist = false;
      this.currentExtra.forEach((value) => {
        if (extra === value) isExist = true;
      });
      return isExist;
    },
    remarkIsActive(remark) {
      var isExist = false;
      this.currentExtra.forEach((value) => {
        if (remark === value) isExist = true;
      });
      return isExist;
    },
    selectPrice(price) {
      this.currentPrice = price;
    },
    selectExtra(extra) {
      var isExist = false;
      this.currentExtra = this.currentExtra.filter((value) => {
        if (value === extra) isExist = true;
        return value != extra;
      });
      if (!isExist) {
        this.currentExtra.push(extra);
      }
    },
    selectRemark(remark) {
      var isExist = false;
      this.currentExtra = this.currentExtra.filter((value) => {
        if (value === remark) isExist = true;
        return value != remark;
      });
      if (!isExist) {
        this.currentExtra.push(remark);
      }
    },
  },
  computed: {
    totalPrice() {
      return (
        ((this.item.price[this.currentPrice] || 0) +
          this.extra.reduce((totalExtraPrice, extra) => {
            console.log(totalExtraPrice, extra);
            if (this.extraIsActive(extra.name))
              return totalExtraPrice + extra.price;
            return totalExtraPrice;
          }, 0)) *
        this.count
      );
    },
  },
};
</script>

<style lang="less">
.count-box {
  line-height: 100%;
}
.count-label {
  font-size: 1rem;
  font-weight: 500;
}
.count-input {
  width: 100px;
  height: 36px;
  font-size: 20px;
  text-align: center;
  vertical-align: top;
  outline: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: rgba(0, 0, 0, 0.05);
}
.count-reduce {
  border-radius: 20px 0px 0px 20px !important;
}
.count-add {
  border-radius: 0px 20px 20px 0px !important;
}
.chip {
  min-width: 60px;
  padding: 0 5px !important;
  justify-content: center;
  font-size: 0.85rem !important;
}
.active {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
</style>
