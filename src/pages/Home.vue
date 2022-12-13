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
          Впрочем, довольно нудных текстов, предлагаю тезисно пройтись по моему
          творчеству:
        </span>
      </div>

      <div class="quote__text">
        <span>
        У меня есть собственный кубок из черепа.<br>
        И нет хейтеров. Совпадение?
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
        <video class="video specialwidth" src="@/assets/video/guitar.mp4" controls></video> 
      </div>

      <div class="quote__text">
        <span>Также я очень люблю животных</span>
        <video class="video specialwidth" src="@/assets/video/wolfs.mp4" controls></video> 
      </div>

      <div class="quote__text right">
        <span>В мою честь пишут песни!</span>
        <video class="video specialwidth" src="@/assets/video/cosmeya.mp4" controls></video>
      </div>

      <div class="quote__text">
        <span>И я даже хожу на конецрты к своим модераторам!</span>
        <video class="video specialwidth" src="@/assets/video/osc.mp4" controls></video> 
      </div>
      
    </div>

    <!-- Блок с поздравлениями на день рождения -->
    <div class="happy">
      <div class="happy__desc">
        <span>ПОЗДРАВЛЕНИЯ</span><br><br>
        Это эксклюзивный блок посвящённый Дню Рождения Давида!
      </div>
      <div class="happy__voice">

        <div class="example">
          <div class="example-item" v-for="item in left" :key="item.id" @click.prevent="item.isPlaying ? pause(item) : play(item)">
            <div class="item-text">{{ item.name }}</div>
            <div class="item-play">{{ item.isPlaying ? '&#10073;&#10073;' : '&#9658;' }}</div>
          </div> 
        </div>

        <div class="example">
          <div class="example-item" v-for="item in right" :key="item.id" @click.prevent="item.isPlaying ? pause(item) : play(item)">
            <div class="item-text">{{ item.name }}</div>
            <div class="item-play">{{ item.isPlaying ? '&#10073;&#10073;' : '&#9658;' }}</div>
          </div> 
        </div>
        
      </div>
      <!-- Временная копия для сепарации -->
      <div class="happy__desc" style="margin-top: 20px">
        <span><span style="color: #00ff7f;">Паша</span> и <span style="color: #ff69b4;">Даша</span></span><br><br>
        Это эксклюзивный блок посвящённый Дню Рождения Давида!
      </div>
      <div class="happy__voice">

        <div class="example">
          <div class="example-item" v-for="item in dasha" :key="item.id" @click.prevent="item.isPlaying ? pause(item) : play(item)">
            <div class="item-text">{{ item.name }}</div>
            <div class="item-play">{{ item.isPlaying ? '&#10073;&#10073;' : '&#9658;' }}</div>
          </div> 
        </div>

        <div class="example">
          <div class="example-item" v-for="item in pasha" :key="item.id" @click.prevent="item.isPlaying ? pause(item) : play(item)">
            <div class="item-text">{{ item.name }}</div>
            <div class="item-play">{{ item.isPlaying ? '&#10073;&#10073;' : '&#9658;' }}</div>
          </div> 
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: [
        {
          id: '1',
          name: 'Asmasmas',
          file: new Audio(require("@/assets/audio/happy/Asmasmas.mp3")),
          isPlaying: false
        },
        {
          id: '2',
          name: 'Ornghze',
          file: new Audio(require("@/assets/audio/happy/Ornghze.mp3")),
          isPlaying: false
        },
        {
          id: '3',
          name: 'MariaDrad',
          file: new Audio(require("@/assets/audio/happy/MariaDrad.mp3")),
          isPlaying: false
        },
        {
          id: '4',
          name: 'Bezcell',
          file: new Audio(require("@/assets/audio/happy/Bezcell.mp3")),
          isPlaying: false
        },
        {
          id: '5',
          name: 'Vasilisa',
          file: new Audio(require("@/assets/audio/happy/Vasilisa.mp3")),
          isPlaying: false
        }
      ],
      right: [
        {
          id: '1',
          name: 'Fanmega',
          file: new Audio(require("@/assets/audio/happy/Fanmega.mp3")),
          isPlaying: false
        },
        {
          id: '2',
          name: 'Oberon',
          file: new Audio(require("@/assets/audio/happy/Oberon.mp3")),
          isPlaying: false
        },
        {
          id: '3',
          name: 'Lier',
          file: new Audio(require("@/assets/audio/happy/Lier.mp3")),
          isPlaying: false
        },
        {
          id: '4',
          name: 'DirectorCCCP',
          file: new Audio(require("@/assets/audio/happy/DirectorCCCP.mp3")),
          isPlaying: false
        }
      ],
      pasha: [
        {
          id: '1',
          name: 'Дашуня',
          file: new Audio(require("@/assets/audio/happy/Daria.mp3")),
          isPlaying: false
        }
      ],
      dasha: [
        {
          id: '1',
          name: 'Пашуня',
          file: new Audio(require("@/assets/audio/happy/Daria.mp3")),
          isPlaying: false
        }
      ]

    }
  },
  methods: {
    play (audio) {
      audio.isPlaying = true;
      audio.file.play();
    },
    
    pause (audio) {
      audio.isPlaying = false;
      audio.file.pause();
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
      .specialwidth {
        width:390px;
        @media (max-width: 768px) {
          width: 310px;
        }
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
    .happy {
      width: 50%;
      margin: auto;
      margin-top: 50px;
      margin-bottom: 50px;

      .happy__desc {
        font-size: 22px;
        color: white;
        text-align: center;
        span {
          font-family: Scary;
          padding: 10px;
          background: black;
          border-radius: 30px;
        }
      }
      .happy__voice {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
          .example {
          display: flex;
          flex-direction: column;
          width: 45%;
          color: white;

          .example-desc {
            text-align: center;
            margin-bottom: 15px;
            span {
              font-family: 'Scary';
              font-size: 22px;
              background: black;
              border-radius: 30px;
              padding: 10px;
              box-shadow: 0px 0px 12px 4px white;
            }
          }
          .example-item {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            width: 100%;
            background: rgba(31, 46, 58, 0.65);
            border-radius: 20px;
            padding-top: 5px;
            padding-bottom: 5px;
            .item-text {
              margin-left: 10px;
              font-size: 18px;
              line-height: 36px;
            }
            .item-play {
              width: 40px;
              height: 40px;
              line-height: 40px;
              border-radius: 50%;
              margin-right: 10px;
              background: #b80707;
              text-align: center;

              &:hover {
                cursor: pointer;
              }
            }
            &:hover {
              cursor: pointer;
            }
          }
          }
      }

      @media (max-width: 768px) {
        width: 90%;
        font-size: 18px;
        .happy__voice {
          flex-direction: column;
          .example {
            width: 100%;
          }
        }
      }
    }
  }

  .home::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

</style>
