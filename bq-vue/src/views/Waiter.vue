<template>
  <div class="mesero">
      <div id="pedidos">
        <h2>¡Hola, realiza tus pedidos aquí!</h2>
        <Menu />
        <BtnMenu />
      </div>
  </div>
</template>

<script>
import BtnMenu from '../components/BtnMenu.vue';
import Menu from '../components/Menu.vue';

export default {
  name: 'Waiter',
  components: {
    Menu,
    BtnMenu,
  },
};
</script>
