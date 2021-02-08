<template>
  <div class="menu">
    <FullMenu />
    <NewOrder />
  </div>  
</template>

<script>
import FullMenu from './FullMenu.vue';
import NewOrder from './NewOrder.vue';

export default {
  name: 'WaiterMenu',
  components: {
    FullMenu,
    NewOrder,
  },
};
</script>

<style scoped lang="scss">
.menu {
  width: 97%;
  height: 615px;
  margin: auto;
  box-sizing: border-box;
  //display: flex;
  //align-items: center;
  border: solid 2px #e95733;
}
</style>
