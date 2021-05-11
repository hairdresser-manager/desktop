<template>
  <v-row class="expansion">
    <v-expansion-panels accordion v-if="getServices.length">
      <v-expansion-panel
        v-for="list in getServices"
        :key="list.id"
      >
        <v-expansion-panel-header>{{ list.categoryName }}</v-expansion-panel-header>
        <v-expansion-panel-content v-for="content in list.services" :key="content.id">
          <v-container>
            <v-row>
              <v-col>
                <h4>{{ content.name }}</h4>
                <p>{{ content.description }}</p>
              </v-col>
              <h3 class="pr-3 pt-1">{{ content.price + "$"}}</h3>
              <v-btn color="#E10050" dark>book</v-btn>
            </v-row>
            <v-divider></v-divider>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div v-else class="mx-auto text-h5">no services available</div>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'Expansion',
    created(){
      this.$store.dispatch('fetchServices')
    },
    computed: {
      ...mapGetters(['getServices']),
    }
    
}

</script>

<style>
  .expansion{
    padding-top: 150px;
  }
</style>