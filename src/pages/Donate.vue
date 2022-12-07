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
            <div class="example-desc"><span>Оповещения за рубли</span></div>

            <div class="example-item" v-for="donate in donates" :key="donate.id" @click.prevent="donate.isPlaying ? pause(donate) : play(donate)">
              <div class="item-text">{{ donate.name }}</div>
              <div class="item-play">{{ donate.isPlaying ? '&#10073;&#10073;' : '&#9658;' }}</div>
            </div>          

          </div>

          <!-- Блок звуков за баллы канала (фишки) -->
          <div class="example">
            <div class="example-desc"><span>Оповещения за баллы канала</span></div>

            <div class="example-item" v-for="fish in fishpoints" :key="fish.id" @click.prevent="fish.isPlaying ? pause(fish) : play(fish)">
              <div class="item-text">{{ fish.name }}</div>
              <div class="item-play">{{ fish.isPlaying ? '&#10073;&#10073;' : '&#9658;' }}</div>
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
          id: '30',
          name: '30 рублей',
          file: new Audio('./audio/donate/30.mp3'),
          isPlaying: false
        },
        {
          id: '31-99',
          name: '31-99 рублей',
          file: new Audio('./audio/donate/31-99.mp3'),
          isPlaying: false
        },
        {
          id: '50(1)',
          name: '50 рублей (вариант 1)',
          file: new Audio('./audio/donate/50(1).mp3'),
          isPlaying: false
        },
        {
          id: '50(2)',
          name: '50 рублей (вариант 2)',
          file: new Audio('./audio/donate/50(2).mp3'),
          isPlaying: false
        },
        {
          id: '100',
          name: '100 рублей',
          file: new Audio('./audio/donate/100.mp3'),
          isPlaying: false
        },
        {
          id: '101-499(1)',
          name: '101-499 рублей (вариант 1)',
          file: new Audio('./audio/donate/101-499(1).mp3'),
          isPlaying: false
        },
        {
          id: '101-499(2)',
          name: '101-499 рублей (вариант 2)',
          file: new Audio('./audio/donate/101-499(2).mp3'),
          isPlaying: false
        },
        {
          id: '500',
          name: '500 рублей',
          file: new Audio('./audio/donate/500.mp3'),
          isPlaying: false
        },
        {
          id: '501-999',
          name: '501-999 рублей',
          file: new Audio('./audio/donate/501-999.mp3'),
          isPlaying: false
        },
        {
          id: '666',
          name: '666 рублей',
          file: new Audio('./audio/donate/666.mp3'),
          isPlaying: false
        },
        {
          id: '777',
          name: '777 рублей',
          file: new Audio('./audio/donate/777.mp3'),
          isPlaying: false
        },
        {
          id: '1000',
          name: '1000 рублей',
          file: new Audio('./audio/donate/1000.mp3'),
          isPlaying: false
        },
        {
          id: '1001-4999',
          name: '1001-4999 рублей',
          file: new Audio('./audio/donate/1001-4999.mp3'),
          isPlaying: false
        },
        {
          id: '5000-9999',
          name: '5000-9999 рублей',
          file: new Audio('./audio/donate/5000-9999.mp3'),
          isPlaying: false
        },
        {
          id: '10000',
          name: '10000+ рублей',
          file: new Audio('./audio/donate/10000.mp3'),
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
          id: 'history',
          name: 'История',
          file: new Audio('./audio/fishpoints/history.mp3'),
          isPlaying: false
        },
        {
          id: 'vip',
          name: 'VIP-статус',
          file: new Audio('./audio/fishpoints/vip.mp3'),
          isPlaying: false
        },
        {
          id: 'drink',
          name: 'Бахнуть со стримером',
          file: new Audio('./audio/fishpoints/drink.mp3'),
          isPlaying: false
        },
        {
          id: 'pokormit',
          name: 'Покормить стримера',
          file: new Audio('./audio/fishpoints/pokormit.mp3'),
          isPlaying: false
        },
        {
          id: 'tost',
          name: 'Тост',
          file: new Audio('./audio/fishpoints/tost.mp3'),
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
            font-family: Scary;
            min-width: 300px;
            min-height: 60px;
            font-size: 38px;
            text-transform: uppercase;
            letter-spacing: 2px;
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
            @media (max-width: 768px) {
              font-size: 32px;
            }
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
            margin-top: 50px;

            .example {
              display: flex;
              flex-direction: column;
              width: 45%;

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