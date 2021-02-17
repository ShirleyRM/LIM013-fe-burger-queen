<template>
    <div class="home-btn">
      <a class="select-btn" :href="href">
          {{nombre}}
      </a>
    </div>
</template>

<script>
export default {
  name: 'HomeButton',
  props: {
    href: String,
    nombre: String,
  },
};
</script>

<style lang="css" scoped>
.select-btn {
    font-weight: 900 !important;
    color:rgb(105, 102, 102)!important;
    border-color: rgb(255, 251, 0);
    text-decoration: none;
}

.home-btn{
    height: 80px;
    padding: 25px;
    margin: auto;
}

</style>
