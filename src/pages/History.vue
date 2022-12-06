<template>
  <div class="history">
    <div class="history-wrapper">
      <div class="history__left">

        <div class="history-item" v-for="item in left" :key="item.id">
          <div class="item-desc">{{ item.name }}</div>
          <img class="item-img" :src="item.path">
          <div class="item-year">{{ item.year }}</div>
        </div>

      </div>

      <div class="history__mid"></div>

      <div class="history__right">
        <div class="history-item mt75" v-for="item in right" :key="item.id">
          <div class="item-desc">{{ item.name }}</div>
          <img class="item-img" :src="item.path">
          <div class="item-year">{{ item.year }}</div>
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
          name: 'Ведьмак(10й стрим)',
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
          name: 'Gothic 1',
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
          name: 'Ведьмак-2 (стрим 28)',
          year: '28 июн. 2020г.',
          path: require("../assets/history/4.jpg")
        },
        {
          id: '6',
          name: 'Ведьмак-2 (стрим 46)',
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
      width: 50%;
      height: 7000px;
      border: 1px solid red;
      margin-right: 10%;
      .history__left,
      .history__right {
        width: 49%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .history__mid {
        width: 2%;
        background: white;
      }
      .history-item {
        width: 220px;
        margin-top: 25px;
        border-radius: 15px;
        text-align: center;
        background: white;
        .item-desc,
        .item-year {
          text-transform: uppercase;
        }
        .item-img {
          width: 100%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      }
      .mt75 {
        margin-top: 25px;
        background: antiquewhite;
      }

      @media (max-width: 768px) {
        width: 100%;        
      }
    }
    @media (max-width: 768px) {
      justify-content: center;        
    }
  }

  .history::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

</style>
