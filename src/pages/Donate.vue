<template>
  <div class="donate_page">
    <div class="donate__wrapper">
      <div class="donate__links">
        <a class="wrap" href="https://www.donationalerts.com/r/davidfish" target="_blank">
          <button class="button">Donate</button>
        </a>
      </div>
      <div class="donate__sounds">
        <div class="donate__sounds-description">
          Чудесная кнопка сверху поможет тебе выразить свои чувства к стримеру в любом виде - в рублях, долларах, евро...<br>
          <br>
          А чтобы донатить было не так скучно, на некоторые суммы есть особенные эффекты, созданные и записанные мною лично. И да, как честный стример предлагаю заранее узнать, за что ты платишь:
        </div>
        <div class="donate__sounds-example">

          <!-- Блок звуков за рубли -->
          <div class="example">
            <div class="example-desc">Оповещения за рубли</div>

            <div class="example-item" v-for="donate in donates" :key="donate.id">
              <div class="item-text">{{ donate.name }}</div>
              <div class="item-play" @click.prevent="donate.isPlaying ? pause(donate) : play(donate)">{{ donate.isPlaying ? '||' : '&#9658;' }}</div>
            </div>          

          </div>

          <!-- Блок звуков за баллы канала (фишки) -->
          <div class="example">
            <div class="example-desc">Оповещения за баллы канала</div>

            <div class="example-item" v-for="fish in fishpoints" :key="fish.id">
              <div class="item-text">{{ fish.name }}</div>
              <div class="item-play" @click.prevent="fish.isPlaying ? pause(fish) : play(fish)">{{ fish.isPlaying ? '||' : '&#9658;' }}</div>
            </div>          

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
      donates: [
        {
          id: 'morty',
          name: 'от 10 000 рублей',
          file: new Audio('./audio/donate/morty.mp3'),
          isPlaying: false
        },
        {
          id: 'airplane-takeoff',
          name: '666 рублей',
          file: new Audio('./audio/donate/parit.mp3'),
          isPlaying: false
        },
        {
          id: 'airplane-takeoff',
          name: '666 рублей',
          file: new Audio('./audio/donate/parit.mp3'),
          isPlaying: false
        },
        {
          id: 'airplane-takeoff',
          name: '666 рублей',
          file: new Audio('./audio/donate/parit.mp3'),
          isPlaying: false
        },
        {
          id: 'airplane-takeoff',
          name: '666 рублей',
          file: new Audio('./audio/donate/parit.mp3'),
          isPlaying: false
        }
      ],
      fishpoints: [
        {
          id: 'gomez',
          name: 'За Гомеза!',
          file: new Audio('./audio/fishpoints/gomez.mp3'),
          isPlaying: false
        },
        {
          id: 'tvar',
          name: 'Ещё одна!',
          file: new Audio('./audio/fishpoints/tvar.mp3'),
          isPlaying: false
        },
        {
          id: 'tvar',
          name: 'Ещё одна!',
          file: new Audio('./audio/fishpoints/tvar.mp3'),
          isPlaying: false
        },
        {
          id: 'tvar',
          name: 'Ещё одна!',
          file: new Audio('./audio/fishpoints/tvar.mp3'),
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

<style lang="scss" scoped>
  .donate_page {
    width: 100vw;
    height: 94vh;
    margin: auto;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
      .donate__wrapper {
        width: 90%;
        margin: auto;
        margin-top: 0px;
        color: white;

        .donate__links {
          display: flex;
          text-align: center;
          justify-content: center;
          height: 300px;
          border-bottom: none;

          .wrap {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }

          .button {
            min-width: 300px;
            min-height: 60px;
            font-family: 'Nunito', sans-serif;
            font-size: 22px;
            text-transform: uppercase;
            letter-spacing: 1.3px;
            font-weight: 700;
            color: white;
            background: #000000;
            background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(34, 34, 34) 100%);
            border: none;
            border-radius: 1000px;
            box-shadow: 12px 12px 24px rgba(255, 255, 255, 0.64);
            transition: all 0.3s ease-in-out 0s;
            cursor: pointer;
            outline: none;
            position: relative;
            padding: 10px;
            }

          button::before {
          content: '';
            border-radius: 1000px;
            min-width: calc(300px + 12px);
            min-height: calc(60px + 12px);
            border: 6px solid rgba(255, 255, 255, 0.64);
            box-shadow: 0 0 60px rgba(255, 255, 255, 0.64);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: all .3s ease-in-out 0s;
          }

          .button:hover, .button:focus {
            transform: translateY(-6px);
          }

          button:hover::before, button:focus::before {
            opacity: 1;
          }

          button::after {
            content: '';
            width: 30px; height: 30px;
            border-radius: 100%;
            border: 6px solid white;
            position: absolute;
            z-index: -1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: ring 1.5s infinite;
          }

          button:hover::after, button:focus::after {
            animation: none;
            display: none;
          }

          @keyframes ring {
            0% {
              width: 30px;
              height: 30px;
              opacity: 1;
            }
            100% {
              width: 300px;
              height: 300px;
              opacity: 0;
            }
          }


        }

        .donate__sounds {
          display: flex;
          flex-direction: column;

          .donate__sounds-description {
            font-size: 18px;
          }

          .donate__sounds-example {
            display: flex;
            justify-content: space-evenly;
            margin-top: 25px;

            .example {
              display: flex;
              flex-direction: column;
              width: 45%;

              .example-desc {
                text-align: center;
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
              }

            }

            @media (max-width: 767px) {
              flex-direction: column;
              justify-content: space-between;
              .example {
                width: 100%;
                margin-top: 20px;
              }
            }

          }
        }
     } 
  }
  .donate_page::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

</style>