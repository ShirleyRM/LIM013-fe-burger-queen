<template>
  <div class="menu">
    <h2>This is the Menu</h2>
    <div class="left">
     <ul>
      <li v-for="item in breakfast" :key="item.id">
       <h3>Hola</h3>
        <img :src="item.image">
        <h1>{{ item.description }}</h1>
        <h1>{{ item.price }}</h1>
      </li>
     </ul>
    </div>
    <div class="right">
      <form @submit="addOrder(client, table)">
        <input v-model="name" placeholder="Cliente">
        <input v-model="table" placeholder="# de mesa">
        <button type="submit">Enviar</button>
      </form>
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
    };
  },
  firestore() {
    debugger;
    return {
      breakfast: db.collection('breakfast'),
    };
  },
};
</script>

<style scoped>
</style>
