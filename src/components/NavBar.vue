<template>
  <div id="navigation">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/gallery">Галерея</router-link> |
      <!-- <router-link to="">Новости</router-link> |
      <router-link to="">Ссылки</router-link> |
      <router-link to="">Образы</router-link> -->
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#navigation {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: antiquewhite;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>