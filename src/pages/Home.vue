<template>
  <div class="home">
    <div class="home__quote-wrapper">

      <div class="quote__text">
        <span>Я всегда поддерживаю своих модераторов!
          <br>Хожу к ним на концерты</span>
        <video class="video" src="@/assets/video/osc.mp4" controls></video> 
      </div>

      <div class="quote__text right">
        <span>Выпил кошку</span>
        <!-- <video class="video" src="@/assets/video/кошка.mp4" controls></video> -->
        <video class="video" src="@/assets/video/кошка.mp4" autoplay loop muted></video> 
      </div>

      <div class="quote__text">
        <span>Я сам играю на гитаре</span>
        <video class="video" src="@/assets/video/1.mp4" controls></video> 
      </div>

      <div class="quote__text right">
        <span>Волки!</span>
        <video class="video" src="@/assets/video/волки.mp4" controls></video> 
      </div>

      <div class="quote__text">
        <span>В мою честь пишут песни!</span>
        <video class="video" src="@/assets/video/космея.mp4" controls></video>
      </div>

      <div class="quote__text right">
        <span>Привет! Это - мой сайт. Добро пожаловать, путник</span>
        <video class="video" src="@/assets/video/osc.mp4" controls></video> 
      </div>

      <div class="quote__text">
        <span>Привет! Это - мой сайт. Добро пожаловать, путник</span>
        <video class="video" src="@/assets/video/osc.mp4" controls></video> 
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
    height: 94vh;
    margin: auto;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    

    .home__quote-wrapper {
      width: 90%;
      margin: auto;

      .video {
        width: 310px;
        //height: 250px;
        margin-top: 15px;
        border-radius: 15px;

        transition: all 0.4s linear;
      }

      .quote__text {
        display: flex;
        align-items: start;
        flex-direction: column;
        //border: 1px solid rgb(255, 0, 200);
        margin-top: 50px;

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

  .home::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

</style>
