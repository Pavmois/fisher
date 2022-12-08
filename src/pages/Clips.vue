<template>
  <div class="clips">
    <div class="rarity legend-color"><span>Легендарные клипы</span></div>
    <div class="clips-wrapper">
      <div class="videos" v-for="item in legendary" :key="item.id">
        <video class="clip legend-border" :src="item.path" controls></video>
      </div>
    </div>

    <div class="rarity epic-color"><span>Эпические клипы</span></div>
    <div class="clips-wrapper">
      <div class="videos" v-for="item in epic" :key="item.id">
        <video class="clip epic-border" :src="item.path" controls></video>
      </div>
    </div>


    <div class="rarity rare-color"><span>Редкие клипы</span></div>
    <div class="clips-wrapper">
      <div class="videos" v-for="item in rare" :key="item.id">
        <video class="clip rare-border" :src="item.path" controls></video>
      </div>
    </div>


    <div class="rarity simple-color"><span>Обычные клипы</span></div>
    <div class="clips-wrapper">
      <div class="videos" v-for="item in simple" :key="item.id">
        <video class="clip simple-border" :src="item.path" controls></video>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      legendary: [
        {
        id: '1',
        path: require("@/assets/clips/legendary/1.mp4")
        },
        {
        id: '2',
        path: require("@/assets/clips/legendary/2.mp4")
        },
        {
        id: '3',
        path: require("@/assets/video/cat.mp4")
        },
        {
        id: '4',
        path: require("@/assets/clips/legendary/4.mp4")
        },
        {
        id: '5',
        path: require("@/assets/clips/legendary/5.mp4")
        },
        {
        id: '6',
        path: require("@/assets/clips/legendary/6.mp4")
        },
      ],
      epic: [
        {
        id: '1',
        path: require("@/assets/clips/epic/1.mp4")
        },
        {
        id: '2',
        path: require("@/assets/clips/epic/2.mp4")
        },
        {
        id: '3',
        path: require("@/assets/clips/epic/3.mp4")
        },
        {
        id: '4',
        path: require("@/assets/clips/epic/4.mp4")
        },
        {
        id: '5',
        path: require("@/assets/clips/epic/5.mp4")
        },
        {
        id: '6',
        path: require("@/assets/clips/epic/6.mp4")
        },
        {
        id: '7',
        path: require("@/assets/clips/epic/7.mp4")
        }
      ],
      rare: [
        {
        id: '1',
        path: require("@/assets/clips/rare/1.mp4")
        },
        {
        id: '2',
        path: require("@/assets/clips/rare/2.mp4")
        },
        {
        id: '3',
        path: require("@/assets/clips/rare/3.mp4")
        },
        {
        id: '4',
        path: require("@/assets/clips/rare/4.mp4")
        },
        {
        id: '5',
        path: require("@/assets/clips/rare/5.mp4")
        },
        {
        id: '6',
        path: require("@/assets/clips/rare/6.mp4")
        },
        {
        id: '7',
        path: require("@/assets/clips/rare/7.mp4")
        }
      ],
      simple: [
        {
        id: '1',
        path: require("@/assets/clips/simple/1.mp4")
        },
        {
        id: '2',
        path: require("@/assets/clips/simple/2.mp4")
        },
        {
        id: '3',
        path: require("@/assets/clips/simple/3.mp4")
        },
        {
        id: '4',
        path: require("@/assets/clips/simple/4.mp4")
        },
        {
        id: '5',
        path: require("@/assets/clips/simple/5.mp4")
        },
        {
        id: '6',
        path: require("@/assets/clips/simple/6.mp4")
        },
        {
        id: '7',
        path: require("@/assets/clips/simple/7.mp4")
        },
        {
        id: '8',
        path: require("@/assets/clips/simple/8.mp4")
        },
        {
        id: '9',
        path: require("@/assets/clips/simple/9.mp4")
        },
        {
        id: '10',
        path: require("@/assets/clips/simple/10.mp4")
        },
        {
        id: '11',
        path: require("@/assets/clips/simple/11.mp4")
        }
      ]

    }
  }
}
</script>

<style lang='scss' scoped>
  .clips {
    width: 100vw;
    height: 94vh;
    margin: auto;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .rarity {
      font-family: Scary;
      margin-top: 50px;
      text-align: center;
      font-size: 24px;
      text-transform: uppercase;
      span {
        background: black;
        padding: 10px;
        border-radius: 15px;
      }
      
    }
    .legend-color {
      color: #ff8000;
    }
    .legend-border {
      box-shadow: 0px 0px 24px 6px #ff8000;
    }
    .epic-color {
      color: #a335ee;
    }
    .epic-border {
      box-shadow: 0px 0px 24px 6px #a335ee
    }
    .rare-color {
      color: #0070dd;
    }
    .rare-border {
      box-shadow: 0px 0px 24px 6px #0070dd;
    }
    .simple-color {
      color: #9d9d9d;
    }
    .simple-border {
      box-shadow: 0px 0px 24px 6px #9d9d9d;
    }
    .clips-wrapper {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 80%;
      border-radius: 50px;
      margin: auto;
      margin-top: 20px;
      .videos {
        margin-top: 25px;
        text-align: center;
        .clip {
          width: 450px;
          margin: 10px;
          margin-top: 10px;
          border-radius: 30px;
          @media (max-width: 1200px) {
            width: 350px;
          }
          @media (max-width: 1000px) {
            width: 300px;
          }
          @media (max-width: 768px) {
            width: 90%;
          }
        }
      }
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }

  .clips::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

</style>
