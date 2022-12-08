<template>
  <div class="home">
    <div class="home__quote-wrapper">

      <div class="quote__text">
        <span>
          Привет, меня зовут David Fisher и я - стример. На своих
          трансляциях я уделяю большое внимание погружению в игру, и в первую 
          очередь делаю это через косплей. Я тщательно продумываю каждый образ  
          нового героя, пропускаю его через призму своего восприятия и в конечном
          итоге воплощаю его в жизнь.<br>
          <br>
          Впрочем, довольных нудных текстов, предлагаю тезисно пройтись по моему
          творчеству:
        </span>
      </div>

      <div class="quote__text">
        <span>
        У меня есть собственный кубок из черепа.<br>
        И нету хейтеров. Совпадение?
        </span>
        <video class="video" src="@/assets/gif/15.mp4" muted loop autoplay></video> 
      </div>

      <div class="quote__text right">
        <span>
        Образ - превыше всего!<br>
        Я не курю, но ради погружения готов на всё.
        </span>
        <video class="video" src="@/assets/gif/smoke.mp4" muted loop autoplay></video> 
      </div>

      <div class="quote__text">
        <span>
        Я всегда очень внимательно слушаю<br>
        истории чата.
        </span>
        <video class="video" src="@/assets/gif/pation.mp4" muted loop autoplay></video> 
      </div>

      <div class="quote__text right">
        <span>Всегда искренне радуюсь поддержке меня зрителями...</span>
        <video class="video" src="@/assets/gif/thanks.mp4" muted loop autoplay></video> 
      </div>

      <div class="quote__text">
        <span>...а иногда поддержка поражает масштабами!</span>
        <video class="video" src="@/assets/gif/donate.mp4" muted loop autoplay></video> 
      </div>

      <div class="quote__text right">
        <span>Я играю на гитаре своим подписчикам.<br> Но в основном после стрима, часа в 4 утра.</span>
        <video class="video" src="@/assets/video/1.mp4" controls></video> 
      </div>

      <div class="quote__text">
        <span>Также я очень люблю животных</span>
        <video class="video" src="@/assets/video/волки.mp4" controls></video> 
      </div>

      <div class="quote__text right">
        <span>В мою честь пишут песни!</span>
        <video class="video" src="@/assets/video/космея.mp4" controls></video>
      </div>

      <div class="quote__text">
        <span>И я даже хожу на конецрты к своим модераторам!</span>
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
      width: 50%;
      margin: auto;

      .video {
        width: 310px;
        margin-top: 15px;
        border-radius: 15px;
        transition: all 0.4s linear;
      }

      .quote__text {
        display: flex;
        align-items: start;
        flex-direction: column;
        margin-top: 50px;
        color: white;
        font-size: 18px;

        span {
          padding: 10px;
          border-radius: 15px;
          box-shadow: 0px 0px 12px;
        }

      }
      .right {
        align-items: end;
      }

      @media (max-width: 768px) {
        width: 90%;
      }
      @media (max-width: 475px) {
        .video {
          width: 100%;
        }
      }
    }
  }

  .home::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

</style>
