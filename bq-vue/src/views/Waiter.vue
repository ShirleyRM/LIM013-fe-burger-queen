<template>
  <div class="title">
    <h2>Hola, realiza tus pedidos aquí!</h2>
    <h4>Toma el pedido del cliente de las 2 opciones que tenemos:</h4>
    <div>
      <BtnMenu />
      <Menu />
    </div>
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
