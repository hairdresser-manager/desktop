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
      <Expansion :lists="expansionLists"/>
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

  data() {
    return {
      expansionLists: [
        { title: "Popular services", text: "Precision cut shaped to your request . Styling not included in this price" },
        { 
          title: "Hair Care / Cut / Styling", 
          content: [
            { title: "Hair Cut", text: "Precision cut shaped to your request . Styling not included in this price", price: "$40.00+" },
            { title: "Blow Out and Style", text: " This service is recommended for clients with relaxed , or fine textured hair. We shampoo , condition, and blow out the hair before styling", price: "$65.00+" }
          ]
        },
      ],
    }
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
