<template>
  <v-row class="expansion">
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="list in lists"
        :key="list.id"
      >
        <v-expansion-panel-header>{{ list.title }}</v-expansion-panel-header>
        <v-expansion-panel-content v-for="content in list.content" :key="content.id">
          <v-container>
            <v-row>
              <v-col>
                <h4>{{ content.title }}</h4>
                <p>{{ content.text }}</p>
              </v-col>
              <h3 class="pr-3 pt-1">{{ content.price }}</h3>
              <v-btn color="#E10050" dark>book</v-btn>
            </v-row>
            <v-divider></v-divider>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
    name: 'Expansion',
    props: {
      lists: Array
    }
}

</script>

<style>
  .expansion{
    padding-top: 150px;
  }
</style>