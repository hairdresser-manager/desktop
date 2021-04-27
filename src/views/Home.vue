<template>
  <div>
    <div class="banner">
       <v-img
        :src="require('../assets/banner.png')"
        contain
        height="auto"
        />
        <div class="home__Box"><h2>our services</h2></div>
    </div>
    <v-container class="home">
      <Expansion :lists="lists"/>
      <Carousel />
      <Reviews /> 
    </v-container>
  </div>
  
</template>

<script>
import Expansion from '../components/Expansion'
import Carousel from '../components/Carousel'
import Reviews from '../components/Reviews'

export default {
  name: 'home',
  components: {
    Expansion,
    Carousel,
    Reviews
  },

  data() {
    return {
      lists: [
      { title: "Popular services", text: "Precision cut shaped to your request . Styling not included in this price" },
      { 
      title: "Hair Care / Cut / Styling", 
      content: [
        { title: "Hair Cut", text: "Precision cut shaped to your request . Styling not included in this price", price: "$40.00+" },
        { title: "Blow Out and Style", text: " This service is recommended for clients with relaxed , or fine textured hair. We shampoo , condition, and blow out the hair before styling", price: "$65.00+" }
      ]
      },

      ]
    }
  },
  methods: {
    fetchReviews() {
      this.$store.dispatch('fetchReviews')
    }
  }

}
</script>

<style>
.home__Box{
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
