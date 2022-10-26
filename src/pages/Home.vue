<template>
  <div class="home">
    <div class="home__quote-wrapper">
      <div class="quote__text">
        <span>Привет! Это - мой сайт. Добро пожаловать, путник</span>
        <img class="quote__img-change1" src="@/assets/home/text_photo1.jpg">
      </div>

      <div class="quote__text right">
        <span>Здесь ты сможешь найти кучу разного говна, а может и не кучу..</span>
        <img class="quote__img-change2" src="@/assets/home/text_photo2.jpg">
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
    background-color: antiquewhite;
    background-image: url('/src/assets/1.jpg');
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
        span {
          background: #fff;
          padding: 10px;
          border-radius: 15px;
        }
        img {
          width: 30%;
          border-radius: 15px;
        }
        // .quote__img-change1 {
        //   cursor: pointer;
        //   background-image: url('/src/assets/home/text_photo1.jpg');
        // }
        .quote__img-change1:hover {
          cursor: pointer;
          content: url('/src/assets/home/text_photo1-black.jpg');
        }
      }
      .right {
        align-items: end;
      }
    }
  }

</style>
