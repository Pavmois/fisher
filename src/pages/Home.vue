<template>
  <div class="home">
      <div class="left__text">
        А вот и я!
      </div>

      <div class="right__text">
        Here i am!
      </div>

  </div>
</template>

<script>
export default {
  methods:{
    click: function() {
      //alert(11);
    }
  }
}
</script>

<style scoped>
  .home {
    width: 100vw;
    background-color: antiquewhite;
    /* background-image: url('/src/assets/1.jpg'); */
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;
  }
  .left__text {
    border: 1px solid rgb(123, 255, 0);
    height: 30px;
  }
  .right__text {
    border: 1px solid rgb(255, 0, 200);
    height: 60px;
  }
</style>
