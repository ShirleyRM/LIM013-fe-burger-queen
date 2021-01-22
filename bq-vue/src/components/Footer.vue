<template>
  <div id="footer">
    <p>&copy; 2020 Developed by <a href="https://github.com/ShirleyRM/"></a>ShirleyRM<p>
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
  color: white;
  background-color: transparent;
  .footerText {
    margin-top: 10px;
    font-size: 14px;
  }
  .footerTextBold {
    font-weight: bold;
  }
}
</style>
