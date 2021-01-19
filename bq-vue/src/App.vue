<template>
  <div id="app">
    <div class="navbar-container">
      <div class="navbar-content">
        <router-link to="/">
        </router-link>
        <router-link to="/Waiter">
          <i class='bx bxs-dish' ></i>
        </router-link>
        <router-link to="/Logout">
          <i class='bx bxs-log-out'></i>
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@media (min-width:961px) {
  #app {
    width: 100%;
    height: auto;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    background-image: url(assets/fondo.jpg);
    background-size:cover;
  }
  * {
    font-family: 'Rubik', sans-serif;
    margin: 0px;
    padding: 0px;
  }
}

.navbar-container{
  width: 100%;
  background-color: rgba(197, 193, 187, 0.37);
  .navbar-content{
    padding: 30px;
    display: flex;
    justify-content: space-between;
    a {
      font-weight: bold;
      color:rgb(221, 98, 40);

      &.router-link-exact-active {
        color: black;
        size: 50%;
      }
    }
  }
}
</style>
