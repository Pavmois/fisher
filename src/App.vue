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
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #3f3c3c;
    background-image: url('/src/assets/background.jpg');
    background-repeat: no-repeat;
    background-position: 40% 0%;
  }
</style>