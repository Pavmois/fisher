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
      alert(11);
    }
  }
}
</script>

<style scoped>
  .home {
    background-color: aqua;
    background-image: url('/src/assets/1.jpg');
    background-repeat: no-repeat;
  }
  .left__text {
    border: 1px solid red;
    width: auto;
    height: 300px;
  }
  .right__text {
    border: 1px solid red;
    height: 600px;
  }
</style>
