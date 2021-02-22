<template>
    <div class="home-btn">
      <a class="select-btn" :href="enlace">
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
    color:rgb(27, 26, 26)!important;
    border-color: 1px solid rgb(255, 251, 0);
    text-decoration: none;
}

.home-btn{
    height: 80px;
    padding: 25px;
    margin: auto;
}
.home-btn:hover{
   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
