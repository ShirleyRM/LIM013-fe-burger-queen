<template>
  <div class="waiter-view">
    <WaiterMenu />
    <Footer />
  </div>
</template>

<script>
import WaiterMenu from '@/components/WaiterMenu.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Waiter',
  components: {
    WaiterMenu,
    Footer,
  },
};
</script>
