<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/waiter">Mesero</router-link> |
      <router-link to="/kitchenboss">Jefe de Cocina</router-link> |
    </div>
    <router-view/>
  </div>
</template>

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
  background-image: url(assets/fondo.jpg);
  background-size:cover;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #42b983;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
