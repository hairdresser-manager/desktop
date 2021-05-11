<template>
  <div>
    <div class="banner">
       <v-img
        :src="require('../assets/banner.png')"
        contain
        height="auto"
        />
        <div class="home-box text-h5 text-uppercase" v-text="'our services'"></div>
    </div>
    <v-container class="home">
      <Expansion />
      <Swiper />
      <Reviews /> 
    </v-container>
  </div>
  
</template>

<script>
import Expansion from '../components/home/Expansion'
import Swiper from '../components/home/Swiper'
import Reviews from '../components/home/Reviews'

export default {
  name: 'home',
  components: {
    Expansion,
    Swiper,
    Reviews
  },
}
</script>

<style>
.home-box{
  position: absolute;
  left: 50%;
  bottom: -60px;
  transform: translateX(-50%);
  color: white;
  font-weight: 200;
  width: 333px;
  height: 115px;
  background: #E10050;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner{
  position: relative;
}

.carousel{
  padding-top: 100px;
}

</style>
