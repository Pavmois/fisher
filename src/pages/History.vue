<template>
  <div class="history">
    <div class="history-wrapper">
      <div class="history__intro">
        За свою карьеру стримера я перепробовал множество разных образов, от самых простых, до самых сложных.<br/>
        <br/>
        И всегда интересно оглянуться назад, посмотреть на пройденный путь, оценить прогресс и развитие. На данный момент
        число сделанных мною косплеев и образова равняется <span>{{ left.length + right.length}}</span>! Предлагаю вместе пройти весь путь
        и кто-то поностальгирует и вспомнит приятное, а кто-то узнает что-то новое!
      </div>

      <div class="history__images">
        <div class="history__left">
          <div class="history-item" v-for="item in left" :key="item.id">
            <div class="item-desc">{{ item.name }}</div>
            <img class="item-img" :src="item.path">
            <div class="item-year">{{ item.year }}</div>
          </div>
        </div>

        <div class="history__right">
          <div class="history-item secondAnim" v-for="item in right" :key="item.id">
            <div class="item-desc">{{ item.name }}</div>
            <img class="item-img" :src="item.path">
            <div class="item-year">{{ item.year }}</div>
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
          name: 'Outward',
          year: '16 дек. 2019г.',
          path: require("@/assets/history/1.jpg")
        },
        {
          id: '3',
          name: 'Ведьмак',
          year: '1 мая 2020г.',
          path: require("../assets/history/3.jpg")
        },
        {
          id: '5',
          name: 'Hunt Showdown',
          year: '30 июл. 2020г.',
          path: require("../assets/history/5.jpg")
        },
        {
          id: '7',
          name: 'S.T.A.L.K.E.R.',
          year: ' 21 сент. 2020г.',
          path: require("../assets/history/7.jpg")
        },
        {
          id: '9',
          name: 'Hunt Showdown',
          year: ' 4 окт 2020г.',
          path: require("../assets/history/9.jpg")
        },
        {
          id: '11',
          name: 'Resident Evil 7',
          year: ' 1 нояб. 2020г.',
          path: require("../assets/history/11.jpg")
        },
        {
          id: '13',
          name: 'Darkest Dungeon',
          year: ' 1 дек. 2020г.',
          path: require("../assets/history/13.jpg")
        },
        {
          id: '15',
          name: 'Cyberpunk 2077',
          year: ' 22 дек. 2020г.',
          path: require("../assets/history/15.jpg")
        },
        {
          id: '17',
          name: 'The Long Dark',
          year: ' 4 янв. 2021г.',
          path: require("../assets/history/17.jpg")
        },
        {
          id: '19',
          name: 'Valheim',
          year: ' 6 мар. 2021г.',
          path: require("../assets/history/19.jpg")
        },
        {
          id: '21',
          name: 'Dread Hunger',
          year: ' 4 мая 2021г.',
          path: require("../assets/history/21.jpg")
        },
        {
          id: '23',
          name: 'Gothic',
          year: ' 15 июн. 2021г.',
          path: require("../assets/history/23.jpg")
        },
        {
          id: '25',
          name: 'New World',
          year: '1 авг. 2021г.',
          path: require("../assets/history/25.jpg")
        },
        {
          id: '27',
          name: 'Diablo II',
          year: '18 авг. 2021г.',
          path: require("../assets/history/27.jpg")
        },
        {
          id: '29',
          name: 'Path Of Exile',
          year: '13 окт. 2021г.',
          path: require("../assets/history/29.jpg")
        },
        {
          id: '31',
          name: 'World Of Warcraft',
          year: '12 нояб. 2021г.',
          path: require("../assets/history/31.jpg")
        },
        {
          id: '33',
          name: 'Elex',
          year: '20 дек. 2021г.',
          path: require("../assets/history/33.jpg")
        },
        {
          id: '35',
          name: 'God of war',
          year: '16 янв. 2022г.',
          path: require("../assets/history/35.jpg")
        },
        {
          id: '37',
          name: 'Sekiro',
          year: '2 февр. 2022г.',
          path: require("../assets/history/37.jpg")
        },
        {
          id: '39',
          name: 'SiFu',
          year: '18 февр. 2022г.',
          path: require("../assets/history/39.jpg")
        },
        {
          id: '41',
          name: 'Risen 2',
          year: '7 мар. 2022г.',
          path: require("../assets/history/41.jpg")
        },
        {
          id: '43',
          name: 'Elden Ring',
          year: '18 мар. 2022г.',
          path: require("../assets/history/43.jpg")
        },
        {
          id: '45',
          name: 'Elden Ring',
          year: '14 апр. 2022г.',
          path: require("../assets/history/45.jpg")
        },
        {
          id: '47',
          name: 'Mad Max',
          year: '16 мая 2022г.',
          path: require("../assets/history/47.jpg")
        },
        {
          id: '49',
          name: 'Phantom Abyss',
          year: '20 мая 2022г.',
          path: require("../assets/history/49.jpg")
        },
        {
          id: '51',
          name: 'Planet Crafter',
          year: '10 июня 2022г.',
          path: require("../assets/history/51.jpg")
        },
        {
          id: '53',
          name: 'Escape from Tarkov',
          year: '19 июл. 2022г.',
          path: require("../assets/history/53.jpg")
        },
        {
          id: '55',
          name: 'World Of Warcraft',
          year: '16 авг. 2022г.',
          path: require("../assets/history/55.jpg")
        },
        {
          id: '57',
          name: 'Spider-Man',
          year: '30 авг. 2022г.',
          path: require("../assets/history/57.jpg")
        },
        {
          id: '59',
          name: 'Path Of Exile',
          year: '1 сент. 2022г.',
          path: require("../assets/history/59.jpg")
        },
        {
          id: '61',
          name: 'World Of Warcraft',
          year: '10 сент. 2022г.',
          path: require("../assets/history/61.jpg")
        },
        {
          id: '63',
          name: 'Visage',
          year: '24 сент. 2022г.',
          path: require("../assets/history/63.jpg")
        },
        {
          id: '65',
          name: 'Dying Light',
          year: '11 окт. 2022г.',
          path: require("../assets/history/65.jpg")
        },
        {
          id: '67',
          name: 'Fallout 76',
          year: '13 нояб. 2022г.',
          path: require("../assets/history/67.jpg")
        }
      ],
      right: [
        {
          id: '2',
          name: 'Ведьмак',
          year: '17 мар. 2020г.',
          path: require("../assets/history/2.jpg")
        },
        {
          id: '4',
          name: 'Ведьмак',
          year: '28 июн. 2020г.',
          path: require("../assets/history/4.jpg")
        },
        {
          id: '6',
          name: 'Ведьмак',
          year: '9 авг. 2020г.',
          path: require("../assets/history/6.jpg")
        },
        {
          id: '8',
          name: 'RDR 2',
          year: '26 сент. 2020г.',
          path: require("../assets/history/8.jpg")
        },
        {
          id: '10',
          name: 'S.T.A.L.K.E.R.',
          year: '6 окт. 2020г.',
          path: require("../assets/history/10.jpg")
        },
        {
          id: '12',
          name: 'AC: Valhalla',
          year: '22 нояб. 2020г.',
          path: require("../assets/history/12.jpg")
        },
        {
          id: '14',
          name: 'Resident Evil 7',
          year: '3 дек. 2020г.',
          path: require("../assets/history/14.jpg")
        },
        {
          id: '16',
          name: 'The Forest',
          year: ' 25 дек. 2020г.',
          path: require("../assets/history/16.jpg")
        },
        {
          id: '18',
          name: 'The Beast Inside',
          year: '  6 янв. 2021г.',
          path: require("../assets/history/18.jpg")
        },
        {
          id: '20',
          name: 'World Of Warcraft',
          year: ' 14 апр. 2021г.',
          path: require("../assets/history/20.jpg")
        },
        {
          id: '22',
          name: 'Dread Hunger',
          year: ' 18 мая 2021г.',
          path: require("../assets/history/22.jpg")
        },
        {
          id: '24',
          name: 'Грим-стрим',
          year: ' 20 июл. 2021г.',
          path: require("../assets/history/24.jpg")
        },
        {
          id: '26',
          name: 'TES IV: Oblivion',
          year: ' 4 авг. 2021г.',
          path: require("../assets/history/26.jpg")
        },
        {
          id: '28',
          name: 'Dark Souls',
          year: ' 7 сент. 2021г.',
          path: require("../assets/history/28.jpg")
        },
        {
          id: '30',
          name: 'I am fish',
          year: ' 3 нояб. 2021г.',
          path: require("../assets/history/30.jpg")
        },
        {
          id: '32',
          name: 'Risen',
          year: ' 28 нояб. 2021г.',
          path: require("../assets/history/32.jpg")
        },
        {
          id: '34',
          name: '30 лет!',
          year: ' 26 дек. 2021г.',
          path: require("../assets/history/34.jpg")
        },
        {
          id: '36',
          name: 'Project Zomboid',
          year: ' 30 янв. 2022г.',
          path: require("../assets/history/36.jpg")
        },
        {
          id: '38',
          name: 'Dying Light 2',
          year: '5 февр. 2022г.',
          path: require("../assets/history/38.jpg")
        },
        {
          id: '40',
          name: 'Raft',
          year: '5 мар. 2022г.',
          path: require("../assets/history/40.jpg")
        },
        {
          id: '42',
          name: 'Elden Ring',
          year: '17 мар. 2022г.',
          path: require("../assets/history/42.jpg")
        },
        {
          id: '44',
          name: 'Elden Ring',
          year: '20 мар. 2022г.',
          path: require("../assets/history/44.jpg")
        },
        {
          id: '46',
          name: 'TES III: Morrowind',
          year: '20 апр. 2022г.',
          path: require("../assets/history/46.jpg")
        },
        {
          id: '48',
          name: 'King Arthur',
          year: '18 мая 2022г.',
          path: require("../assets/history/48.jpg")
        },
        {
          id: '50',
          name: 'V Rising',
          year: '24 мая 2022г.',
          path: require("../assets/history/50.jpg")
        },
        {
          id: '52',
          name: 'Hellblade',
          year: '12 июня 2022г.',
          path: require("../assets/history/52.jpg")
        },
        {
          id: '54',
          name: 'Fallout',
          year: '24 июля 2022г.',
          path: require("../assets/history/54.jpg")
        },
        {
          id: '56',
          name: 'World Of Warcraft',
          year: '21 авг. 2022г.',
          path: require("../assets/history/56.jpg")
        },
        {
          id: '58',
          name: 'World Of Warcraft',
          year: '31 авг. 2022г.',
          path: require("../assets/history/58.jpg")
        },
        {
          id: '60',
          name: 'Path Of Exile',
          year: '8 сент. 2022г.',
          path: require("../assets/history/60.jpg")
        },
        {
          id: '62',
          name: 'Dragons Dogma',
          year: '22 сент. 2022г.',
          path: require("../assets/history/62.jpg")
        },
        {
          id: '64',
          name: 'Scum',
          year: '8 окт. 2022г.',
          path: require("../assets/history/64.jpg")
        },
        {
          id: '66',
          name: 'Cooking Stream',
          year: '12 окт. 2022г.',
          path: require("../assets/history/66.jpg")
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .history {
    width: 100vw;
    height: 94vh;
    margin: auto;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: flex;
    justify-content: end;
    .history-wrapper {
      display: flex;
      width: 90%;
      flex-direction: column;
      margin: auto;
      margin-top: 50px;
      .history__intro {
        position: relative;
        flex-direction: column;
        color: white;
        font-size: 18px;
        span {
          font-weight: bold;
          font-size: 24px;
        }
      }
      .history__images {
        display: flex;
        justify-content: end;
        margin-top: 20px;
      }
      .history__left,
      .history__right {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .history__right {
        margin-top: 135px;
        @media (max-width: 450px) {
          margin-top: 300px;
        }
      }
      .history-item {
        width: 220px;
        margin-top: 100px;
        border-radius: 15px;
        text-align: center;
        background: white;
        border: 1px solid black;
        animation: move 6s infinite linear;
        @media (max-width: 450px) {
          margin-top: 300px;
        }

        .item-desc,
        .item-year {
          text-transform: uppercase;
          padding: 5px;
          font-family: 'Scary';
          color: #b80707;
        }
        .item-img {
          width: 100%;
          height: 230px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        &:first-child {
          margin-top: 0px;
        }
      }
      .secondAnim {
        animation: move 4s infinite linear;
      }

      @media (max-width: 1024px) {
        width: 100%;
        margin-right: 0;
        .history__intro {
          width: 90%;
          margin: auto;
        }
        .history__images {
          justify-content: center;
        }
        .history__left,
        .history__right {
          width: 50%;
        }
      }
      @media (max-width: 450px) {
        width: 100%;
        .history__left,
        .history__right {
          width: 20%;
        }
      }
    }
    @media (max-width: 1024px) {
      justify-content: center;        
    }
  }

  .history::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @keyframes move {
  0% {
    transform: translateY(5%);
  }
  50% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(5%);
  }
}

</style>
