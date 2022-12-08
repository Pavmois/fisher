<template>
  <div class="nav_bar">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/donate">Поддержка</router-link> |
      <router-link to="/history">История</router-link> |
      <router-link to="/clips">Клипы</router-link> |
      <router-link to="/links">Ссылки</router-link>
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
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 999;

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