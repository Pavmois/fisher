<template>
    <Slide class="menu">
      <router-link to="/"><span>Главная</span></router-link>
      <router-link to="/donate"><span>Поддержка</span></router-link>
      <router-link to="/history"><span>История</span></router-link>
      <router-link to="/clips"><span>Клипы</span></router-link>
      <router-link to="/links"><span>Ссылки</span></router-link>
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
 
export default {
    components: {
        Slide // Register your component
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        height: 40px;
    }
</style>