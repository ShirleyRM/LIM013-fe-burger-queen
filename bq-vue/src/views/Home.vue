<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-BQ.png">
    <HelloWorld msg="Bienvenidx a la app del restaurante"/>
    <br>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Footer,
  },
};
</script>
