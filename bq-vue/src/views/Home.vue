<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-BQ.png">
    <HelloWorld msg="Bienvenidx a la app del restaurante"/>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12">
          <div class="row " style="text-align: center;">
            <HomeButton type="button" class="col-6 btn btn-outline-warning lg-button btn-block"
            style="text-align: center;" nombre="Soy Meserx" href="/Waiter "/>
          </div>
          <br>
          <div class="row " style="text-align: center;">
            <HomeButton type="button" class="col-6 btn btn-outline-warning lg-button"
            style="text-align: center;"  nombre="Soy Cocinerx" href="/Boss "/>
          <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import HomeButton from '@/components/HomeButton.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeButton,
  },
};
</script>
