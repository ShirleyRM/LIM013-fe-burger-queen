<template>
  <div class="header">
    <h2>Hola, realiza tus pedidos aquí!</h2>
    <BtnMenu />
    <Menu />
  </div>
</template>

<script>
import BtnMenu from '../components/BtnMenu.vue';
import Menu from '../components/Menu.vue';

export default {
  name: 'Waiter',
  components: {
    BtnMenu,
    Menu,
  },
};
</script>
