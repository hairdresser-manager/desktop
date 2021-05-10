<template>
<v-dialog v-model="show" max-width="600px">
  <v-card class="mx-auto pa-6">
      <v-card-text>
      <EditEmployee />
      </v-card-text>
      <v-card-actions>
        <v-btn color="#E10050" text @click.stop="show=false">Close</v-btn>
      </v-card-actions>
    </v-card>  
</v-dialog>
</template>

<script>
import EditEmployee from './EditEmployee'
export default {
    props: {
      value: Boolean,
    },
    components: {
        EditEmployee
    },
    computed: {
      show: {
          get () {
              return this.value
          },
          set (value) {
              this.$emit('input', value)
          }
      }
    }
}

</script>