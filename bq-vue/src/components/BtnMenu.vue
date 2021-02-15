<template>
  <div class="botones">
    <ul>
      <!-- <li v-for="b in breakfast" :key="b.id"> -->
      <button>Desayuno</button>
      <button>Almuerzo</button>
      <button>Bebidas</button>
      <button>Extras</button>
      <!-- </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BtnMenu',
};

</script>

<style scoped>
#botones{
  justify-items: left;
  border-radius: 6px;
  text-transform: uppercase;
}
</style>
