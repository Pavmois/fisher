<template>
  <div class="nav_bar">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/gallery">Галерея</router-link> |
      <!-- <router-link to="">Новости</router-link> |
      <router-link to="">Ссылки</router-link> |
      <router-link to="">Образы</router-link> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang='scss' scoped>

.nav_bar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #9a80c4;
  width: 100vw;
  display: flex;
  justify-content: center;

    a {
      font-weight: bold;
      color: #2c3e50;
    }

    a.router-link-exact-active {
      color: #42b983;
    }
}
</style>