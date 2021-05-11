<template>

    <div v-if="getEmployee">
        <v-form>
            <v-col>
                <v-text-field 
                    v-model="getEmployee.nick"
                    label="nick"
                    outlined
                ></v-text-field>
                <v-text-field 
                    v-model="getEmployee.description"
                    label="description"
                    outlined
                ></v-text-field>
                <v-text-field 
                    v-model="getEmployee.avatarUrl"
                    label="avatarUrl"
                    outlined
                ></v-text-field>
                <v-text-field 
                    v-model="getEmployee.lowQualityAvatarUrl"
                    label="lowQualityAvatarUrl"
                    outlined
                ></v-text-field>
                <v-select
                    v-model="getEmployee.active"
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
        <div class="text-center ma-2">
            <v-snackbar
            v-model="snackbar"
            color="green"
            transition="scale-transition"
            top
            right
            >
            Success

            <template v-slot:action="{ attrs }">
                <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
            </v-snackbar>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'AddEmployee',
  data: () => ({
      snackbar: false,
      isEmailCorrect: false,
      items: [
          { text: 'yes', value: true},
          { text: 'no', value: false}
      ]
  }),
  created(){
      this.$store.commit('clearError')
  },
  methods: {
    editEmployee(){
      const id = this.getEmployeeId
      const data = {
        nick: this.getEmployee.nick,
        description: this.getEmployee.description,
        avatarUrl: this.getEmployee.avatarUrl,
        lowQualityAvatarUrl: this.getEmployee.lowQualityAvatarUrl,
        active: this.getEmployee.active
      }

      this.$store.dispatch('editEmployee', { id, data })
        .then(() => this.snackbar = true)
        }
    },
    computed: {
        ...mapGetters(['getEmployees','getEmployeeId','getEmployee'])
    }
}

</script>
