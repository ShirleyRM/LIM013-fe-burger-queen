<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-BQ.png">
    <HelloWorld msg="Bienvenidx"/>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12">
          <div class="row " style="text-align: center;">
            <HomeButton type="button" class="col-3 btn btn-outline-warning lg-button btn-block"
            style="text-align: center;" nombre="Soy Meserx" router-link to="/waiter"/>
          </div>
          <br>
          <div class="row " style="text-align: center;">
            <HomeButton type="button" class="col-3 btn btn-outline-warning lg-button"
            style="text-align: center;"  nombre="Soy Cocinerx" href="/boss"/>
          </div>
          <br>
          <div id=foot-section>
            <Footer />
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
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeButton,
    Footer,
  },
};
</script>
