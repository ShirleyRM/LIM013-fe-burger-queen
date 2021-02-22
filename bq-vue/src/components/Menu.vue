<template>
<div class="row">
  <div class="col-12 col-md-7 right">
      <form>
        <input v-model="name" placeholder="Cliente"/>
        <input v-model="table" placeholder="# de mesa"/>
        <button type="submit">Enviar</button>
      </form>
        <div class="list">
          <div class="orderList">
            <p class="itemDescription">Item</p>
            <p class="itemPrice">Precio</p>
            <p class="itemCant">Cant.</p>
            <p class="itemTotal">Total</p>
          </div>
      </div>
    </div>
    </div>
</template>

<script>
// import { db } from '../db';

export default {
  name: 'Menu',
  data() {
    return {
      // breakfast: [],
      // burgers: [],
      // drinks: [],
      // extras: [],
    };
  },
  firestore() {
    return {
      // breakfast: db.collection('breakfast'),
      // burgers: db.collection('burgers'),
      // drinks: db.collection('drinks'),
      // extras: db.collection('extras'),
    };
  },
};
</script>

<style scoped>
#right{
  background-color: rgba(7, 7, 7, 0.527);
}
ul {
  list-style-type: none;
  };
#order{
  border-block-color: yellow;
  background-color: rgba(21, 22, 22, 0.205);
  border-radius: 10px;
}
</style>
