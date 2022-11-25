<template>
  <swiper v-if="isMobile"
    :zoom="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><div class="swiper-zoom-container"><img src="~@/assets/gallery/1.jpg" /></div></swiper-slide>
    <swiper-slide><div class="swiper-zoom-container"><img src="~@/assets/gallery/3.jpg" /></div></swiper-slide>
    <swiper-slide><div class="swiper-zoom-container"><img src="~@/assets/gallery/4.jpg" /></div></swiper-slide>
    <swiper-slide><div class="swiper-zoom-container"><img src="~@/assets/gallery/5.jpg" /></div></swiper-slide>
    <swiper-slide><div class="swiper-zoom-container"><img src="~@/assets/gallery/6.jpg" /></div></swiper-slide>
    <swiper-slide><div class="swiper-zoom-container"><img src="~@/assets/gallery/7.jpg" /></div></swiper-slide>

    
  </swiper>

  <swiper v-else
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="30"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="~@/assets/gallery/1.jpg" /></swiper-slide>
    <swiper-slide><img src="~@/assets/gallery/3.jpg" /></swiper-slide>
    <swiper-slide><img src="~@/assets/gallery/4.jpg" /></swiper-slide>
    <swiper-slide><img src="~@/assets/gallery/5.jpg" /></swiper-slide>
    <swiper-slide><img src="~@/assets/gallery/6.jpg" /></swiper-slide>
    <swiper-slide><img src="~@/assets/gallery/7.jpg" /></swiper-slide>
    
  </swiper>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Zoom, Navigation, Pagination } from "swiper";

export default {
  data: () => ({
    width: 0,
    isMobile: false
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Mousewheel, Zoom, Navigation, Pagination],
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
      if (this.width <= 768) {
        this.isMobile = true
      } else this.isMobile = false
    },
  },
  created() {
    this.width = window.innerWidth;

    if (this.width <= 768) {
      this.isMobile = true
    } else this.isMobile = false

    window.addEventListener('resize', this.updateWidth);
  },
};
</script>

<style lang="scss" scoped>

.nav_bar {
  border: 1px solid red;
}

.swiper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  @media (max-width: 767px) {
    position: relative;
    width: 90%;
    height: 100%;
    z-index: 1;
  }
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>