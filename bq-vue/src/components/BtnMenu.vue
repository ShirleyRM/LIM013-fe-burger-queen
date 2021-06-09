<template>
  <div class="container">
    <p></p>
    <div class="flex-row">
      <div class="col-12 col-md-6 izquierda" id="menu1">
        <div class="row">
          <div class="col-md-6">
            <div class="breakdiv" v-on:click="show = !show">
              <br><h1>Desayunos</h1>
            </div>
            <br>
            <div class="col-" v-if="!show">
              <ul>
                <li v-for="b in breakfast" :key="b.breakfast">
                  <button type="button" class="item-button" id="item">
                    <div class="text-button" style="d-flex justify-content-center" id="desayuno">
                      <h4>{{ b.description }}</h4>
                      <img :src="b.image" class="img-thumbnail">
                      <h5>${{ b.price }}.00</h5>
                    </div>
                  </button>
                </li>
              </ul>
              <br>
            </div>
            <div v-else></div>
            <p></p>
            <p></p>
            <div class="row">
              <div class="restOfDay" id="menu2">
                <div class="lunch"
                v-on:click="hide"><br><br><h1>Resto del día</h1></div>
                <div class="button-2">
                  <ul v-if="mostrar">
                    <li v-for="r in rest" :key="r.rest">
                      <button type="button" class="item-button" id="item">
                        <div class="text-button" id="rest">
                          <h4>{{ r.description }}</h4>
                          <img :src="r.image" class="img-thumbnail">
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
      <!-- <div class="col-12 col-md-7 derecha">
          <form>
            <input v-model="name" placeholder="Cliente"/>
            <input v-model="table" placeholder="# de mesa"/>
            <button type="submit">Enviar</button>
          </form>
      </div> -->
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
  display: inline-block;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.breakdiv {
  background-image: url(../assets/but1.jpg);
  cursor: hand;
  width: 450px;
  height: 120px;
  color: black;
  border-radius: 10px;
  text-align: center;
}
.lunch{
  background-image: url(../assets/lunch1.jpg);
  cursor: hand;
  width: 450px;
  height: 120px;
  color: white;
  border-radius: 10px;
  text-align: center;
}
.item-button {
  background: turquoise;
}
#item {
  background: transparent;
  border: rgba(255, 255, 255, 0);
}
#desayuno {
  background-color: #c4bebe75;
  border-radius: 10px;
}
#rest {
  background-color: #c4bebe75;
  border-radius: 10px;
}
</style>
