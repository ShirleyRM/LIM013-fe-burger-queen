<template>
  <div class="home">
    <img alt="BQ logo" src="../assets/logo-BQ.png">
    <!-- <HelloWorld msg="Welcome this ir you vue.js app"/> -->
    <div class="body">
      <h2 class="title">Inicia sesión</h2>
        <div class="input">
          <input type="text" placeholder="ejemplo@gmail.com">
            <div class="icon-input">
              <i class='bx bxs-user' ></i>
            </div>
        </div>
        <div class="input">
          <input type="text" placeholder="*******">
            <div class="icon-input">
              <i class='bx bxs-key'></i>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  margin: 20px;
}
#app {
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 1920px;
  min-width: 360px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-size:cover;
}
#app img {
  width: 40%;
  height: auto;
  padding-top: 50px;
}
.body {
  margin: auto;
  width: 50%;
  max-width: 500px;
  padding: 30px;
  border: 1px solid rgba(0,0,0,0.2)
}
  .input {
    display:block;
    position: relative;
    align-items: center;
    margin-top: 10px;
    input {
      width: 50%;
      background-color: rgba(235, 234, 230, 0.726);
      border: 0px;
      outline: none;
      padding: 10px;
      padding-left: 30px;
      border-radius: 1%;
      align-items: center;
    }
    .icon-input{
      position: absolute;
      margin-left: 50px;
    }
  }
</style>
