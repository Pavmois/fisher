<template>
  <NavBar v-if="is_navbar" />
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  data(){
    return {
      is_navbar: true
    }
  },
  components: {
    NavBar
  },
  created(){
    //window.addEventListener('scroll', this.hideMenu);
  },
  methods:{
    hideMenu() {
      this.is_navbar = false
    },
    click: function() {
      alert(11);
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>