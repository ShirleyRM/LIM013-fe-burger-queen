<template>
  <div class="btn-menu">
    <div id="btn">
      <button type="button" class="menuBtn" id="menuBtn"
      @click="addDescription(); addPrice(); quantityItem()">
        <!--<img class="iconImg" alt="Sandwich" src="../assets/iconSandwich.png">-->
        <div class="textBtn">
          <h5>{{ description }}</h5>
          <p>S/ {{ price }}.00</p>
        </div>
      </button>
    </div>
    <div id="printOnClick">
      <div class="actionBtn" id="actionBtn">
        <p>{{ displayDescription }}</p>
        <p>{{ displayPrice }}</p>
        <p>{{ quantity }}</p>
        <p>S/ {{ subTotal }}.00</p>
        <!--<button @click="removeRow()">Eliminar</button>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullMenu',
  data() {
    return {
      cant: 0,
      displayDescription: '',
      displayPrice: '',
    };
  },
  methods: {
    quantityItem() {
      this.cant += 1;
    },
    addDescription() {
      // debugger;
      this.displayDescription = this.description;
    },
    addPrice() {
      this.displayPrice = `S/ ${this.price}.00`;
    },
    /*
    print() {
      console.log('Soy un item de pedido');
    },
    */
    /*
    removeRow() {
      // console.log(row);
      this.breakfast.splice(1);
      // this.items.splice(index, 1);
    },
    */
  },
  computed: {
    subTotal() {
      return parseInt(this.price, 10) * parseInt(this.cant, 10);
    },
  },
  props: [
    'description',
    'price',
    // 'displayItemDescriptionText',
    // 'msg',
  ],
};
</script>

<style scoped>
.menuBtn {
  width: 200px;
  height: 60px;
  margin-bottom: 15px;
  background-color: transparent;
  border: solid 2px white;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.textBtn {
  width: 78%;
  line-height: 0;
  text-align: center;
  display: inline-block;
  color: rgb(8, 8, 8);
}
</style>