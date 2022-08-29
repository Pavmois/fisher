<template>
  <NavBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  methods:{
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