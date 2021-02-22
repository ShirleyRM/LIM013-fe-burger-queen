<template>
  <div class="row">
    <div class="col-12 col-md-5 left">
      <div clas="row">
        <div class="col-7">
          <div class="day" id="menu1">
            <button type="button"
            v-on:click="show = !show">Desayunos</button>
            <div class="button-1" v-if="!show">
              <ul>
                <li v-for="b in breakfast" :key="b.breakfast">
                  <button type="button" class="item-button" id="item">
                    <div class="text-button">
                      <h4>{{ b.description }}</h4>
                      <p>${{ b.price }}.00</p>
                    </div>
                  </button>
                </li>
              </ul>
              </div>
            <div v-else></div>
            <div class="restOfDay" id="menu2">
              <button type="button" v-on:click="hide">Resto del día</button>
                <div class="button-2">
                <ul v-if="mostrar">
                  <li v-for="r in rest" :key="r.rest">
                    <button type="button" class="item-button" id="item">
                      <div class="text-button">
                        <h4>{{ r.description }}</h4>
                        <p>${{ r.price }}.00</p>
                      </div>
                    </button>
                  </li>
                </ul>
                <div v-else></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { db } from '../db';

export default {
  name: 'BtnMenu',
  data() {
    return {
      breakfast: [],
      rest: [],
      show: true,
      mostrar: false,
    };
  },
  firestore() {
    return {
      breakfast: db.collection('breakfast'),
      rest: db.collection('rest'),
    };
  },
  methods: {
    hide() {
      this.mostrar = !this.mostrar;
    },
  },
};
</script>

<style scoped>
</style>
