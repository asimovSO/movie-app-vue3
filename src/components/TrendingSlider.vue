<script setup>
import { onMounted } from "vue";
import TrendingSliderItem from "./TrendingSliderItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {  EffectFade, Pagination } from "swiper";
import { useMovieStore } from "../stores/useMovieStore";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// const data = ref([
//   {
//     id: 1,
//     title: 'MEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGANMEGAN',
//     poster: 'https://image.tmdb.org/t/p/original/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg',
//     overview: "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results."
//   },
//   {
//     id: 2,
//     title: 'MEGAN',
//     poster: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg',
//     overview: "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results."
//   },
//   {
//     id: 3,
//     title: 'MEGAN',
//     poster: 'https://www.vibe.com/wp-content/uploads/2022/10/BlackPanther-WakandaForever_Payoff_1-Sht_v10_lg-e1665517283161.jpg?w=1024',
//     overview: "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results."
//   }
// ])
const store = useMovieStore();

// const autoplayOptions = {
//   delay: 3500,
//   pauseOnMouseEnter: true,
//   disableOnInteraction: true,
// };

const paginationOptions = {
  clickable: true,
  // bulletClass: 'bg-white',
  // bulletActiveClass: 'text-rose-600',
};
// const modules = [Autoplay, EffectFade, Navigation]
onMounted(() => store.getTrendingMovies())
</script>

<template>
  <Swiper
    v-if="store.trendingMoviesData"
    :modules="[EffectFade, Pagination]"
    class="md:h-[400px]  max-w-[900px] py-8"
    :pagination="paginationOptions"
    effect="fade"
    :fadeEffect="{
      crossfade: true
    }"
    :loop="true"
    
  >
    <SwiperSlide
      v-for="(trend, index) in store.trendingMovies"
      :key="index"
    >
      <TrendingSliderItem
        :id="trend.id"
        :title="trend.title"
        :overview="trend.overview"
        :poster="trend.backdrop_path"
        :vote="trend.vote_average"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style >
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


.swiper-pagination-bullet{
    transition: all .1s;
    background: #07A5E0 !important;
    height: 8px !important;
    width: 8px !important;
    opacity: .5 !important;
    margin: 0 6px !important;
}

.swiper-pagination-bullet-active{
    background: #07A5E0 !important;
    width: 24px !important;
    border-radius: 8px !important;
    opacity: 1 !important;
}
</style>
