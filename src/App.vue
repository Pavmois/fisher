<template>
    <div>
      <NavBar/>
      <router-view/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

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

<style>
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