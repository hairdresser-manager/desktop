<template>
    <v-form>
          <v-col>
              <v-text-field 
                v-model="nick"
                label="nick"
                outlined
              ></v-text-field>
              <v-text-field 
                v-model="description"
                label="description"
                outlined
              ></v-text-field>
              <v-text-field 
                v-model="avatarUrl"
                label="avatarUrl"
                outlined
              ></v-text-field>
              <v-text-field 
                v-model="lowQualityAvatarUrl"
                label="lowQualityAvatarUrl"
                outlined
              ></v-text-field>
              <v-select
                v-model="active"
                :items="items"
                label="Active"
                dense
                outlined
              ></v-select>
          </v-col>
          <v-col>
              <v-btn elevation="2" outlined
                  width="100%"
                  class="my-3"
                  color="#E10050"
                  @click="editEmployee"
              >EDIT</v-btn>
          </v-col>              
      </v-form>
</template>

<script>

export default {
  name: 'AddEmployee',
  props:{
      id: Number
  },
  data: () => ({
      nick: '',
      description: '',
      avatarUrl: '',
      lowQualityAvatarUrl: '',
      active: null,
      isEmailCorrect: false,
      items: [
          { text: 'yes', value: true},
          { text: 'no', value: false}
      ]
  }),
  methods: {
    editEmployee(){
      const id = this.id
      const data = {
        nick: this.nick,
        description: this.description,
        avatarUrl: this.avatarUrl,
        lowQualityAvatarUrl: this.lowQualityAvatarUrl,
        active: this.active
      }

      this.$store.dispatch('editEmployee',{ id, data })
    }
  },
}

</script>
