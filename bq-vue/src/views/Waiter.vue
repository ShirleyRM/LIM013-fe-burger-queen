<template>
  <div class="header">
    <h2>Hola, realiza tus pedidos aquí!</h2>
    <BtnMenu />
  </div>
</template>

<script>
// import Menu from '../components/Menu.vue';
import BtnMenu from '../components/BtnMenu.vue';

export default {
  name: 'Waiter',
  components: {
    BtnMenu,
  },
};
</script>
