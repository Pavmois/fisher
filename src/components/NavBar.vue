<template>
  <div class="nav_bar">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/gallery">Галерея</router-link> |
      <router-link to="/donate">Поддержка</router-link> |
      <!-- <router-link to="">Ссылки</router-link> |
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
  color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100vw;
  display: flex;
  justify-content: center;

    a {
      color: #fff;
      font-weight: bold;
      transition: all 0.4s linear;
      text-decoration: none;
    }

    a.router-link-exact-active {
      color: #b80707;
    }

    a:hover {
      color: #b80707;
    }
}
</style>