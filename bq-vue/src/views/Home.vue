<template>
  <div class="home">
    <div class="homeMenu">
      <img alt="BQ logo" src="../assets/logo-BQ.png">
      <h1 class="welcome">Bienvenido a Burger Queen</h1>
      <div class="container">
          <div class="formContainer">
            <Login />
          </div>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Login,
    Footer,
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 735px;
  margin: 0, auto;
}
.homeMenu {
  width: 90%;
  height: 695px;
  margin: auto;
  padding-top: 80px;
  box-sizing: border-box;
  border-bottom: 2px solid #CC9933;
}
.logo {
  width: 40%;
}
.container {
  width: 100%;
  height: 320px;
  margin: auto;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: bottom;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
}
.formContainer {
  width: 45%;
  height: 270px;
  margin: auto;
  padding-top: 0px;
  vertical-align: top;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 10px;
  background-color: #13131367;
}

</style>
