<template>
  <v-container>
  <v-row class="carousel" align="center">
    <v-divider></v-divider>
    <v-img
        :src="require('../../assets/Group.png')"
        contain
        height="50"
        max-width="100px"

        />
    <h2 class="text-uppercase">Meet the team</h2>
    <v-img
        :src="require('../../assets/Group.png')"
        contain
        height="50"
        max-width="100px"
        />
    <v-divider></v-divider>
    </v-row>
    <SwiperItems />
    </v-container>
</template>

<script>
  import SwiperItems from './SwiperItems'

  export default {
    name: 'Swiper',
    components: {
      SwiperItems
    },
    
  }
</script>

<style lang="scss" scoped>
  .v-divider{
    background-color: #E10050;
  }
</style>
