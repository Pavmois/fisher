<template>
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

          <div class="example-item">
            <div class="item-text">501 рубль - тема из Готики</div>
            <div v-if="!isPlaying" class="item-play" @click.prevent="playSound('./morty.mp3'); isPlaying ? pause() : play()">&#9658;</div>
            <div v-else class="item-play" @click.prevent="pause()">&#8986;</div>
          </div>

          <div class="example-item">
            <div class="item-text">666 рублей - тема из Обливиона</div>
            <div v-if="!isPlaying" class="item-play" @click.prevent="playSound('./morty.mp3'); isPlaying ? pause() : play()">&#9658;</div>
            <div v-else class="item-play" @click.prevent="pause()">&#8986;</div>
          </div>

          <div class="example-item">
            <div class="item-text">1000 рублей - Особое оповещение </div>
            <div class="item-play">&#9658;</div>
          </div>

          <div class="example-item">
            <div class="item-text">5000 рублей - уникальный скример</div>
            <div class="item-play">&#9658;</div>
          </div>

          <div class="example-item">
            <div class="item-text">10000 рублей - Рик и Морти от Давида</div>
            <div class="item-play">&#9658;</div>
          </div>

          <div class="example-item">
            <div class="item-text">10000 рублей - Рик и Морти от Давида</div>
            <div class="item-play">&#9658;</div>
          </div>
          

        </div>

        <!-- Блок звуков за баллы канала (фишки) -->
        <div class="example">
          <div class="example-desc">Оповещения за баллы канала</div>

          <div class="example-item">
            <div class="item-text">За Гомеза!</div>
            <div class="item-play">&#9658;</div>
          </div>

          <div class="example-item">
            <div class="item-text">Ещё одна!</div>
            <div class="item-play">&#9658;</div>
          </div>

          <div class="example-item">
            <div class="item-text">Покорми стримера</div>
            <div class="item-play">&#9658;</div>
          </div>

          <div class="example-item">
            <div class="item-text">Бахнуть со стримером</div>
            <div class="item-play">&#9658;</div>
          </div>

          <div class="example-item">
            <div class="item-text">Тост</div>
            <div class="item-play">&#9658;</div>
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
      isPlaying: false,
      audio: null
    }
  },
  methods: {
    playSound (sound) {
        this.audio = new Audio(sound);
    },
    play () {
      console.log(111)
      this.audio.pause()
      this.audio.play()
      this.isPlaying = true
    },
    
    pause () {
      console.log(222)
      this.audio.pause()
      this.isPlaying = false
    }
}
}
</script>

<style lang="scss" scoped>
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
      border: 1px solid antiquewhite;

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
          border: 1px solid red;
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

      }
    }
  }
</style>