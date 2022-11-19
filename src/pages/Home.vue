<template>
  <div class="home">
    <div class="home__quote-wrapper">

      <div class="quote__text">
        <span>Привет! Это - мой сайт. Добро пожаловать, путник</span>
        <img class="quote__img-change1">
      </div>

      <div class="quote__text right">
        <span>Здесь ты сможешь найти кучу разного говна, а может и не кучу..</span>
        <img class="quote__img-change2">
      </div>
      
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

<style lang='scss' scoped>
  .home {
    width: 100vw;
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;

    .home__quote-wrapper {
      width: 90%;
      margin: auto;

      .quote__text {
        display: flex;
        align-items: start;
        flex-direction: column;
        border: 1px solid rgb(255, 0, 200);

        img {
          width: 375px;
          height: 228px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          background-image: url('/src/assets/2.jpg');
        }

        span {
          background: #fff;
          padding: 10px;
          border-radius: 15px;
        }

      }
      .right {
        align-items: end;
      }
    }
  }

</style>
