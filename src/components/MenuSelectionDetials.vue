<template>
  <v-dialog
    v-model="dialog"
    :overlay="false"
    max-width="500px"
    transition="scale-transition"
  >
    <v-card>
      <v-card-title>
        {{item.name}}
      </v-card-title>
      <v-card-subtitle>
        
      </v-card-subtitle>
      <v-divider/>
      <v-card-actions>
        <!-- <v-spacer/> -->
        <div class="count-box">
          <label class="count-label" for="count-input">数量</label>
          <v-btn class="count-reduce" @click="count--">-</v-btn>
          <input 
            type="text" 
            v-model="count" 
            id="count-input"
            class="count-input"
            joninput = "value=value.replace(/[^\d]/g,'')"
          />
        <v-btn class="count-add" @click="count++">+</v-btn>
        </div>
        <v-spacer/>
        <v-btn @click="addItem">
          添加
        </v-btn>
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
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    switchDialog(){
      this.dialog = !this.dialog;
      this.count = 1;
    },
    addItem(){
      this.switchDialog();
    }
  },
};
</script>

<style lang="less">
.count-box{
  line-height: 100%;
  vertical-align: middle;
}
.count-label{
  font-size: 1rem;
  font-weight: 500;
}
.count-input{
  width: 100px;
  height: 36px;
  font-size: 20px;
  text-align: center;
  outline: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: rgba(0, 0, 0, 0.05);
}
.count-reduce{
  border-radius: 20px 0px 0px 20px;
}
.count-add{
  border-radius: 0px 20px 20px 0px;
}
</style>
