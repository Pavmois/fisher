<template>
  <div class="home">
    <div class="home__quote-wrapper">
      <div class="wrapper__header">DAVIDFISHER.RU</div>

      <div class="section__name">
        <div class="section__txt">
          <span>
            Всем привет! На данном сайте можно максимально подробно ознакомиться с моим творчеством,<br/>
            найти множество интересных подробностей, связанных с костюмами, образами и прочим.
          </span>
        </div>
      </div>

      <!-- Раздел 1 -->
      <div class="section__name">
        <div class="section__txt">
          <span>
            Раздел 1
          </span>
        </div>
      </div>

      <div class="quote__text">
        <div class="quote__wrapper">
          <div class="text-desc">
            <span>
              У меня есть собственный кубок из черепа.<br>
              И нет хейтеров. Совпадение?
            </span>
          </div>
          <video class="video" src="@/assets/gif/15.mp4" muted loop autoplay></video> 
        </div>
      </div>


      <!-- Раздел 2 -->
      <div class="section__name">
        <div class="section__txt">
          <span>
            Раздел 2
          </span>
        </div>
      </div>

      <div class="quote__text">
        <div class="quote__wrapper">
          <div class="text-desc">
            <span>
              Образ - превыше всего!<br>
              Я не курю, но ради погружения готов на всё.
            </span>
          </div>
          <video class="video" src="@/assets/gif/smoke.mp4" muted loop autoplay></video> 
        </div>
      </div>

      <!-- Раздел 3 -->
      <div class="section__name">
        <div class="section__txt">
          <span>
            Раздел 3
          </span>
        </div>
      </div>

      <div class="quote__text">
        <div class="quote__wrapper">
          <div class="text-desc">
            <span>
              Я всегда очень внимательно слушаю<br>
              истории чата.
            </span>
          </div>
          <video class="video" src="@/assets/gif/pation.mp4" muted loop autoplay></video> 
        </div>
      </div>

      <!-- Раздел 4 -->
      <div class="section__name">
        <div class="section__txt">
          <span>
            Раздел 4
          </span>
        </div>
      </div>

      <div class="quote__text">
        <div class="quote__wrapper">
          <div class="text-desc">
            <span>Всегда искренне радуюсь поддержке меня зрителями...</span>
          </div>
          <video class="video" src="@/assets/gif/thanks.mp4" muted loop autoplay></video> 
        </div>
      </div>

      <!-- Раздел 5 -->
      <div class="section__name">
        <div class="section__txt">
          <span>
            Раздел 5
          </span>
        </div>
      </div>

      <div class="quote__text">
        <div class="quote__wrapper">
          <div class="text-desc">
            <span>...а иногда поддержка поражает масштабами!</span>
          </div>
          <video class="video" src="@/assets/gif/donate.mp4" muted loop autoplay></video> 
        </div>
      </div>

      <!-- Раздел 6 -->
      <div class="section__name">
        <div class="section__txt">
          <span>
            Раздел 6
          </span>
        </div>
      </div>

      <div class="quote__text">
        <div class="quote__wrapper">
          <div class="text-desc">
            <span>Я играю на гитаре своим подписчикам.<br> Но в основном после стрима, часа в 4 утра.</span>
          </div>
          <video class="video" src="@/assets/video/guitar.mp4" controls></video> 
        </div>
      </div>

      <!-- Раздел 7 -->
      <div class="section__name">
        <div class="section__txt">
          <span>
            Раздел 7
          </span>
        </div>
      </div>

      <div class="quote__text">
        <div class="quote__wrapper">
          <div class="text-desc">
            <span>Также я очень люблю животных</span>
          </div>
          <video class="video" src="@/assets/video/wolfs.mp4" controls></video> 
        </div>
      </div>

      <!-- Раздел 8 -->
      <div class="section__name">
        <div class="section__txt">
          <span>
            Раздел 8
          </span>
        </div>
      </div>

      <div class="quote__text">
        <div class="quote__wrapper">
          <div class="text-desc">
            <span>В мою честь пишут песни!</span>
          </div>
          <video class="video" src="@/assets/video/cosmeya.mp4" controls></video> 
        </div>
      </div>

      <!-- Раздел 9 -->
      <div class="section__name">
        <div class="section__txt">
          <span>
            Раздел 9
          </span>
        </div>
      </div>

      <div class="quote__text">
        <div class="quote__wrapper">
          <div class="text-desc">
            <span>И я даже хожу на концерты к своим модераторам!</span>
          </div>
          <video class="video" src="@/assets/video/osc.mp4" controls></video> 
        </div>
      </div>
      
    </div>

    <!-- Блок с поздравлениями на день рождения -->
    <div class="happy">
      <div class="happy__desc">
        <span>ПОЗДРАВЛЕНИЯ</span><br><br>
        Эксклюзивный блок посвящённый Дню Рождения Давида!
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
        Совсем уж эксклюзив!
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
        },
        {
          id: '5',
          name: 'FacepalmNote',
          file: new Audio(require("@/assets/audio/happy/FacePalmNote.mp3")),
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
          file: new Audio(require("@/assets/audio/happy/Pasha.mp3")),
          isPlaying: false
        }
      ]

    }
  },
  methods: {
    play (audio) {
      this.stopAll(this.left)
      this.stopAll(this.right)
      this.stopAll(this.pasha)
      this.stopAll(this.dasha)

      setTimeout(() => {
        audio.isPlaying = true;
        audio.file.play();
      }, 100);
    },
    pause (audio) {
      audio.isPlaying = false;
      audio.file.pause();
    },

    // При нажатии на запись, остальные останавливаются
    stopAll(arr) {
      for (let i = 0; i < arr.length; ++i) {
        arr[i].isPlaying = false
        arr[i].file.pause()
      }
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
      width: 100%;
      color: white;
      margin: auto;

      .wrapper__header {
        text-align: center;
        font-size: 35px;
        margin-bottom: -120px;
      }

      .section__name {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 120px;
        background-color: rgba(0, 0, 0, 0.5);
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        .section__txt {
          padding: 10px;
          span {
            font-size: 22px;
          }
        }
      }

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
        margin-top: 0px;
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.5); 
        .quote__wrapper {
          margin: auto;
          width: 75%;
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
          padding: 10px;
          .text-desc {
            display: flex;
            align-self: flex-start;
            span {
              padding: 10px;
            }
          }
        }

      }

      @media (max-width: 768px) {
        width: 100%;
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
            transition: all 0.2s linear;
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
              box-shadow: 0px 0px 6px 3px white;
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
