<template>
 
  <swiper 
    class="swiper" 
    effect="fade" 
    :options="swiperOption" 
    >
    <swiper-slide 
      v-for="member in items"
      :key="member.id">
      <div class="text-center text-h5">{{ member.firstName }}</div>
      <v-img 
        contain
        height="100%"
        :src="member.avatarUrl">
      </v-img>
      </swiper-slide>
      
      
      
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
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
        .catch(error => console.log(error))
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';

  .swiper {
    height: 360px;
    margin-top: 100px;

    .swiper-slide {
      background-position: center;
      background-size: cover;

      &.slide-1 {
        background-image:url('../../assets/slide_1.png')
      }
      &.slide-2 {
        background-image:url('../../assets/slide_2.png')
      }
      &.slide-3 {
        background-image:url('../../assets/slide_3.png')
      }
    }
  }
</style>