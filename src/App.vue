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
    background-color: #3f3c3c;
    /* background-image: url('/src/assets/2.jpg'); */
  }
</style>