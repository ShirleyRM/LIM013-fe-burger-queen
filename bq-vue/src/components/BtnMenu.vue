<template>
  <div class="container">
  <div class="row">
    <div>
      <div clas="row">
        <div class="col-6">
          <div class="day" id="menu1">
            <button type="button" class=""
            v-on:click="show = !show">Desayunos</button>
            <br>
            <div class="button-1" v-if="!show">
              <ul>
                <li v-for="b in breakfast" :key="b.breakfast">
                  <button type="button" class="item-button" id="item">
                    <div class="text-button" style=".col-sm" id="desayuno">
                      <h4>{{ b.description }}</h4>
                      <img :src="b.image">
                      <h5>${{ b.price }}.00</h5>
                    </div>
                  </button>
                </li>
              </ul>
              <br>
            </div>
            <div v-else></div>
              <div class="row">
              <div class="col-6">
                <div class="restOfDay" id="menu2">
                  <button type="button" class=""
                  v-on:click="hide">Resto del día</button>
                    <div class="button-2" style=".col-sm">
                    <ul v-if="mostrar">
                      <li v-for="r in rest" :key="r.rest">
                        <button type="button" class="item-button" id="item">
                          <div class="text-button" id="rest">
                            <h4>{{ r.description }}</h4>
                            <img :src="r.image">
                            <h5>${{ r.price }}.00</h5>
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.item-button{
  background:turquoise;
}
#item{
  background: transparent;
  border: rgba(255, 255, 255, 0);
}
#desayuno{
  background-color: #c4bebe75;
  border-radius: 10px;
}
#desayuno img{
  height: 30%;
  width: 30%;
}
#rest{
  background-color: #c4bebe75;
  border-radius: 10px;
}
#rest img{
  height: 40%;
  width: 40%;
}
</style>
