<template>
 
  <swiper 
    class="swiper" 
    effect="fade" 
    :options="swiperOption" 
    >
    <swiper-slide 
      v-for="member in items"
      :key="member.id">
      <div class="text-center text-h5">{{ member.nick }}</div>
      <img :src="member.avatarUrl" height="80"/>
      </swiper-slide>
      
      
      
    <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
  </swiper>

  
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'SwiperItems',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        items: [],
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    },
    created() {
      this.$store.dispatch('fetchMembers')
        .then(result => {
          this.items = result.data
          })
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';

  img{
    width: 100%;
    height: 100%;
  }
  .swiper {
    height: 360px;
    margin-top: 100px;

    .swiper-slide {
      background-position: center;
      background-size: cover;

    }
  }
</style>