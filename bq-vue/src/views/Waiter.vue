<template>
  <div class="mesero">
      <div id="pedidos">
        <h2>¡Hola, realiza tus pedidos aquí!</h2>
        <Menu />
      </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';

export default {
  name: 'Waiter',
  components: {
    Menu,
  },
};
</script>
