<template>
  <!-- Slider main container -->
  <div ref="swiper" class="swiper">
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">Slide {{ activeIndex + 1 }}</div>
      <div class="swiper-slide">Slide {{ activeIndex + 1 }}</div>
      <div class="swiper-slide">Slide {{ activeIndex + 1 }}</div>
    </div>

    <!-- Navigation arrows -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// core version + navigation, pagination, autoplay modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
// import styles bundle
import 'swiper/swiper-bundle.min.css'

export default {
  data() {
    return {
      activeIndex: 0,
    }
  },
  mounted() {
    const SECOND = 1000 // milliseconds

    // init Swiper:
    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination, Autoplay],

      loop: true,
      autoplay: {
        delay: 3 * SECOND,
        disableOnInteraction: false,
      },
      speed: 2 * SECOND,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Events
      on: {
        slideChange: (swiper) => {
          this.activeIndex = swiper.realIndex
        },
      },
    })
  },
}
</script>


<style scoped>
.swiper {
  max-width: 1600px;
  height: 600px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
