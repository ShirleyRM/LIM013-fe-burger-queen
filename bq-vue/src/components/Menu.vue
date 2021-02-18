<template>
  <div class="menu">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5 left">
          <div clas="row">
            <div class="col-6">
              <ul>
                <li v-for="item in breakfast" :key="item.id">
                  <button type="button" class="item-btn" id=item-btn @ckicj="addToMenu(item)">
                    <div class="text-btn">
                      <h3>{{ item.description }}</h3>
                      <p>${{ item.price }}.00</p>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
          <ul>
              <li v-for="item in burgers" :key="item.id">
                <button type="button" class="item-btn" id=item-btn @ckicj="addToMenu(item)">
                   <div class="text-btn">
                      <h3>{{ item.description }}</h3>
                      <p>${{ item.price }}.00</p>
                    </div>
                  </button>
                </li>
              </ul>
          </div>
        </div>
        <div class="col-12 col-md-7 right">
          <form @submit="addOrder(client, table)">
            <input v-model="name" placeholder="Cliente">
            <input v-model="table" placeholder="# de mesa">
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../db';

export default {
  name: 'Menu',
  data() {
    return {
      breakfast: [],
      burgers: [],
      drinks: [],
      extras: [],
    };
  },
  firestore() {
    return {
      breakfast: db.collection('breakfast'),
      burgers: db.collection('burgers'),
      drinkst: db.collection('drinks'),
      extras: db.collection('extras'),
    };
  },
  methods: {
    addToMenu() {
      this.cant += 1;
    },
  },
};
</script>

<style scoped>

ul {
  list-style-type: none;
  };

</style>
