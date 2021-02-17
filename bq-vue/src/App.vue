<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/waiter">Meserx</router-link> |
      <router-link to="/boss">Cocinerx</router-link> |
      <router-link to="/logout">Cerrar Sesión</router-link>
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
  font-family: 'Balsamiq Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-image: url(assets/fondo_.png);
  background-size: cover;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #eba40d;
    }
  }
}
</style>
