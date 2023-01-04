<template>
    <div>
      <NavBar noOverlay :closeOnNavigation="true" />
      <router-view/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBarMobile2.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  created(){
    //window.addEventListener('scroll', this.hideMenu);
  },
  methods:{
    hideMenu() {
      //alert(11);
    },
    click: function() {
      //alert(11);
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #3f3c3c;
    background-image: url('/src/assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 40% 0%;
    font-family: 'Alice';

    /* Стили для оформления меню  */
    .bm-burger-button {
          position: absolute;
          width: 36px;
          height: 30px;
          left: 36px;
          top: 10px;
          cursor: pointer;
          &:hover {
            .bm-burger-bars {
              background-color: #b80707;
            }
          }
        }
        .bm-burger-bars {
          background-color: #fff;
          transition: all 0.4s linear;
        }
        .line-style {
          position: absolute;
          height: 20%;
          left: 0;
          right: 0;
        }
        .cross-style {
          position: absolute;
          top: 12px;
          right: 2px;
          cursor: pointer;
        }
        .bm-cross {
          background: #bdc3c7;
        }
        .bm-cross-button {
          height: 24px;
          width: 24px;
        }
        .bm-menu {
          height: 100%; /* 100% Full-height */
          width: 0; /* 0 width - change this with JavaScript */
          position: fixed; /* Stay in place */
          z-index: 1000; /* Stay on top */
          top: 0;
          left: 0;
          background-color: rgba(63, 60, 60, 0.8);
          backdrop-filter: blur(10px);
          overflow-x: hidden; /* Disable horizontal scroll */
          padding-top: 60px; /* Place content 60px from the top */
          transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
        }
    
        .bm-overlay {
          background: rgba(255, 0, 0, 0.3);
        }
        .bm-item-list {
          margin-left: 10%;
          font-size: 20px;

          a:hover {
            span {
              color: #b80707;
            }
          }
          a.router-link-exact-active {
            span {
              color: #b80707;
            }
          }
        }

        .bm-item-list > * {
          display: flex;
          text-decoration: none;
          padding: 0.7em;
        }
        .bm-item-list > * > span {
          margin-left: 10px;
          font-weight: 700;
          color: #fff;
          transition: all 0.2s linear;
        }
  }


  
  @font-face {
    font-family: 'Scary';
    src: url('~@/fonts/RubikWetPaint-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Alice';
    src: url('~@/fonts/Alice-Regular.woff') format('woff');
  }
</style>