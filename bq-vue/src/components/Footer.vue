<template>
  <div class="footer" style="bg-light text-center text-lg-start">
    <div class="text-center p-3">
      <p class="text">&copy; Burger Queen 2020 | Developed by <img class="img" src="../assets/github.png"> <a class="text-dark" href="https://github.com/ShirleyRM?tab=repositories">Shirley Ramos</a>
    </p></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
.text{
  color: #0a0a0a;
}
.img {
  width: 19px;
}
a{
  margin-top: 30px;
  width: 100%;
  font-size: 15px;
  font-family: 'Ubuntu', sans-serif;
  color: #0a0a0a;
}
</style>
