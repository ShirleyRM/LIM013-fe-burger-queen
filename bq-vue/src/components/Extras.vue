<template>
  <div class="extras">
    <div class="header">
      <h3 class="title">Extras</h3>
    </div>
    <div class="container">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Extras',
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(../assets/extras.png);
  background-size: cover;
}
.title {
  margin-left: 0px;
  padding: 20px;
  text-align: left;
  font-family: Stencil;
  color: #131313;
}
.container {
  width: 55%;
  height: 480px;
  text-align: left;
  margin-left: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
