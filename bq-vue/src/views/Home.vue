<template>
  <div class="home">
    <img alt="BQ logo" src="../assets/logo-BQ.png">
    <!-- <HelloWorld msg="Welcome this ir you vue.js app"/> -->
    <div class="body">
      <h2 class="title">Inicia sesión</h2>
        <div class="input">
          <input type="text" placeholder="ejemplo@gmail.com">
            <div class="icon-input"></div>
        </div>
        <div class="input">
          <input type="text" placeholder="*******">
            <div class="icon-input"></div>
        </div>
    </div>

    <div class="entrar">
      <button v-on:click="Entrar"><a href="/Waiter"></a>Entrar</button>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
  },
};
</script>

<style lang="scss">

.home {
  margin: 0, auto;
  width: 100%;
  height: 735px;
}

.body {
  margin: auto;
  width: 50%;
  max-width: 500px;
  padding: 30px;
}
.entrar{
  width: auto;
  height: 15px;
}
  .input {
    display:block;
    position: relative;
    align-items: center;
    margin-top: 10px;
    input {
      width: 70%;
      background-color: rgba(255, 255, 255, 0.603);
      border: 0px;
      outline: none;
      padding: 10px;
      padding-left: 30px;
      border-radius: 5%;
      align-items: center;
    }
    .icon-input{
      position: absolute;
      margin-left: 50px;
    }
  }

</style>
