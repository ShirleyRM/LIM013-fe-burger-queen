<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/waiter">Meserx</router-link> |
      <router-link to="/boss">Cocinerx</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view/>
    <div id=foot-section>
      <Footer />
    </div>
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: auto;
    margin: 0 auto;
    max-width: 1920px;
    min-width: 360px;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    background-image: url(assets/fondo_.png);
    background-size: cover;
  }
}

#nav {
  padding: 18px;
  a {
    font-weight: normal;
    color: #ffffff;

    &.router-link-exact-active {
      color: #eba40d;
    }
  }
}
</style>
