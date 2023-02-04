<script setup>
import { ref } from "vue";
import TrendingSliderItem from "./TrendingSliderItem.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const data = ref([
  {
    id: 1,
    title: 'MEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGAN',
    poster: 'https://image.tmdb.org/t/p/original/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg',
    overview: "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results."
  },
  {
    id: 2,
    title: 'MEGAN',
    poster: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg',
    overview: "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results."
  },
  {
    id: 3,
    title: 'MEGAN',
    poster: 'https://www.vibe.com/wp-content/uploads/2022/10/BlackPanther-WakandaForever_Payoff_1-Sht_v10_lg-e1665517283161.jpg?w=1024',
    overview: "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results."
  }
])


const autoplayOptions = {
  delay: 3500,
  pauseOnMouseEnter: true,
  disableOnInteraction: true,
}

const paginationOptions = {
  type: 'bullets',
  clickable: true,
  // bulletClass: 'bg-white',
  // bulletActiveClass: 'text-rose-600',

}
// const modules = [Autoplay, EffectFade, Navigation]

</script>

<template>

  <Swiper :modules="[EffectFade, Autoplay, Pagination]" class="md:h-[400px] sm:h-56 max-w-[900px]" :autoplay="autoplayOptions"
    :pagination="paginationOptions" :grabCursor="true" effect='fade' :loop="true" :spaceBetween="1">
    <SwiperSlide v-for="(trend, index) in data" :key="trend.id">
      <TrendingSliderItem :id="trend.id" :title="trend.title" :overview="trend.overview" :poster="trend.poster" />
    </SwiperSlide>
  </Swiper>

</template>

<style scoped>
h1 {
  text-overflow: ellipsis;
  overflow-x: hidden;
}

.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-clamp: 4;
  box-orient: vertical;
}
</style>