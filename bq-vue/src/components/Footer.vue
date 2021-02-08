<template>
  <div id="footer">
    <p class="f-Text">&copy; 2020 Developed by <a href="https://github.com/ShirleyRM/"></a>ShirleyRM</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
#footer{
  width: 90%;
  height: 30px;
  margin: auto;
  text-align: center;
  justify-content: space-evenly;
  color: rgba(37, 37, 37, 0.849);
  .f-Text {
    margin-top: 10px;
    font-size: 14px;
  }
}
</style>
