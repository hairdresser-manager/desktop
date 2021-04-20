<template>
  <v-container>
    <v-row align="center" class="reviews">
      <v-divider></v-divider>
        <v-img
            :src="require('../assets/Group.png')"
            contain
            height="50"
            max-width="100px"

            />
        <h2 class="text-uppercase">Reviews</h2>
        <v-img
            :src="require('../assets/Group.png')"
            contain
            height="50"
            max-width="100px"
            />
      <v-divider></v-divider>
    </v-row>
    <div class="review" v-for="review in reviews" :key="review.id">
      <Review :review="review"/>
      <v-divider></v-divider>
    </div>
    <v-row justify="center" class="py-5 mt-5">
      <v-btn class="red-btn mx-3" outlined dark>Load more</v-btn>
    </v-row>
    
  </v-container>
</template>

<script>
import Review from './Review'

  export default {
    name: 'Reviews',
    components: {
      Review
    },

    data() {
      return {
        reviews: [
          { name: "Natalie", initials: "N", text: "Great experience! Looking forward to my hair growth journey....", date: "Jan 28 2021" },
          { name: "Natalie", initials: "N", text: "Great experience! Looking forward to my hair growth journey....", date: "Jan 28 2021" },
          { name: "Natalie", initials: "N", text: "Great experience! Looking forward to my hair growth journey....", date: "Jan 28 2021" } 
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-divider{
    background-color: #E10050;
  }
  .review .v-divider{
    background-color: inherit;
  }
  .reviews{
    padding-top: 100px;
    padding-bottom: 50px;
  }
</style>
