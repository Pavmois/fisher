<template>
  <div class="donate__wrapper">
    <div class="donate__links">
      <a class="wrap" href="https://www.donationalerts.com/r/davidfish" target="_blank">
        <button class="button">Donate</button>
      </a>
    </div>
    <div class="donate__sounds">
      <div class="donate__sounds-description">
        А чтобы донатить было не так скушно, на некоторые суммы есть особенные эффекты,
        созданные и записанные мною лично. И да, как честный стример предлагаю заранее узнать, за что ты платишь:
      </div>
      <div class="donate__sounds-example">

        <!-- Блок звуков за рубли -->
        <div class="example__rubles">
          <div class="example__rubles-desc"></div>
          <div class="example__rubles-item">
            <div class="item-text"></div>
            <div class="item-play"></div>
          </div>
        </div>

        <!-- Блок звуков за баллы канала (фишки) -->
        <div class="example__fishkes">
          <div class="example__rubles-desc"></div>
          <div class="example__rubles-item">
            <div class="item-text"></div>
            <div class="item-play"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .donate__wrapper {
    width: 90%;
    margin: auto;
    margin-top: 0px;

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
        background: #4FD1C5;
        background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
        border: none;
        border-radius: 1000px;
        box-shadow: 12px 12px 24px rgba(79,209,197,.64);
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
        border: 6px solid #00FFCB;
        box-shadow: 0 0 60px rgba(0,255,203,.64);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all .3s ease-in-out 0s;
      }

      .button:hover, .button:focus {
        color: hotpink;
        transform: translateY(-6px);
      }

      button:hover::before, button:focus::before {
        opacity: 1;
      }

      button::after {
        content: '';
        width: 30px; height: 30px;
        border-radius: 100%;
        border: 6px solid #00FFCB;
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
      text-align: center;
      justify-content: center;
      height: 300px;
      border: 1px solid antiquewhite;
    }
  }
</style>