<template>
  <v-container>
    <v-row align="center" class="reviews">
      <v-divider></v-divider>
        <v-img
            :src="require('../../assets/Group.png')"
            contain
            height="50"
            max-width="100px"

            />
        <h2 class="text-uppercase">Reviews</h2>
        <v-img
            :src="require('../../assets/Group.png')"
            contain
            height="50"
            max-width="100px"
            />
      <v-divider></v-divider>
    </v-row>
    <div class="review" v-for="review in reviews" :key="review.id">
      <ReviewItem :review="review"/>
      <v-divider></v-divider>
    </div>
    <v-row justify="center" class="py-5 mt-5">
      <v-btn 
        class="red-btn mx-3" 
        outlined 
        dark
        v-if="visible"
        @click="loadMore"
      >Load more</v-btn>
    </v-row>
    
  </v-container>
</template>

<script>
import ReviewItem from './ReviewItem'

  export default {
    name: 'Reviews',
    components: {
      ReviewItem
    },

    data() {
      return {
        visible: true,
        pagination: {
          page: 1,
          perPage: 3,
        },
        reviews: []
      }
    },
    created() {
      this.$store.dispatch('fetchReviews', this.pagination)
        .then(result => this.reviews = result.data)
    },
    methods: {
      loadMore() {
        const data = {
          page: this.pagination.page,
          perPage: this.pagination.perPage
        }
        data.perPage = 10
        this.$store.dispatch('fetchReviews', data)
          .then(result => this.reviews = result.data)
          this.visible = false
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
