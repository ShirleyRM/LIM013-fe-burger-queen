<template>
  <div class="mesero">
    <h1>¡Hola, realiza tus pedidos!</h1>
      <div id="pedidos">
        <h2> {{ titulo }}: {{ contador }}</h2>
        <button @click='accionIncrementar'>+</button>
        <Orders />
        <BtnMenu />
        <!-- <ul v-for="b in breakfast" :key="b.id">
          {{ b.description }}
        </ul>  -->
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Orders from '../components/Orders.vue';
import BtnMenu from '../components/BtnMenu.vue';
import { db } from '../db';

export default {
  name: 'Waiter',
  components: {
    Orders,
    BtnMenu,
  },
  data() {
    return {
      titulo: 'Orden',
      breakfast: [],
    };
  },
  computed: {
    ...mapState(['contador']),
  },
  methods: {
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar']),
  },
  // firestore: {
  //   breakfast: db.collection('breakfast'),
  // },
  mounted() {
    console.log('hola mundo');
    this.breakfast= []
    db.collection('breakfast').get()
      .then( (r) => 
    {console.log(r)});
  }
};
</script>
