<template>
  <div id="app">
    <div class="navbar-container">
      <div class="navbar-content">
          <router-link to="/">
            <i class='bx bxs-home'></i>
          </router-link>
          <router-link to="/Waiter">
            <i class='bx bxs-dish'></i>
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

@media only screen and (min-width:768px) {

  .navbar-container{
    width: 100%;
    background-color: rgba(160, 158, 156, 0.349);
    color: black;
    .navbar-content{
      display: flex;
      justify-content: space-evenly;
      padding: 40px;
      a{
    &.router-link-exact-active {
        color: rgba(8, 8, 8, 0.863);
      }
    }
      a icon{
        width: 50px;
        height: 50px;
        border: blueviolet 5px;
      }
  }
}

  #app {
    width: 100%;
    height: auto;
    margin: 0 auto;
    font-family: 'Rubik', sans-serif;
    text-align: center;
    color: black;
    background-image: url(assets/fondo.jpg);
    background-size:cover;
  }
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    }
    #app img {
    width: 40%;
    height: auto;
    padding-top: 50px;
  }
}
</style>
