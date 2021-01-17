<template>
  <div class="home">
    <img alt="BQ logo" src="../assets/logo-BQ.png">
    <!-- <HelloWorld msg="Welcome this ir you vue.js app"/> -->
    <div class="home">
      <h1>{{ msg }}</h1>
      <p>
        Welcome to Burger Queen. Log in to start your orders!
      </p>
    </div>

    <div>
      <p>This is a template</p>
      <p>This is a template</p>
      <p>This is a template</p>
      <p>This is a template</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Drinks from '@/components/Drinks.vue';

export default {
  name: 'Home',
  components: {
    Drinks,
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 1920px;
  min-width: 360px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-size:cover;
}

#app img {
  width: 45%;
  height: auto;
  padding-top: 50px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
