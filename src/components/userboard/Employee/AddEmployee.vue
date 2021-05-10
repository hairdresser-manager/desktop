<template>
<v-dialog v-model="show" max-width="600px">
  <v-card class="mx-auto pa-6">
      <v-card-text>
        <ul v-if="errors" class="red--text">
            <li v-for="(v, k) in errors" :key="k">{{ v.join('') }}</li>
        </ul>
        <v-form v-model="valid" v-if="!isEmailCorrect">
          <v-col>
              <v-text-field 
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
              ></v-text-field>
          </v-col>
          <v-col>
              <v-btn elevation="2" outlined
                  width="100%"
                  class="my-3"
                  color="#E10050"
                  @click="addEmployee"
                  :disabled="!valid"
              >ADD</v-btn>
          </v-col>              
      </v-form>
      <EditEmployee v-else />
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
  name: 'AddEmployee',
  props: {
      value: Boolean
  },
  components: {
    EditEmployee
  },
  data: () => ({
      valid: false,
      email: '',
      emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      isEmailCorrect: false,
      errors: null,
  }),
  methods: {
    addEmployee(){
      const data = {
        email: this.email,
        active: false,
        nick: null,
        avatarUrl: null,
        description: null,
        lowQualityAvatarUrl: null,
      }
      this.$store.dispatch('addEmployee', data)
        .then(() => {
          this.isEmailCorrect = true
          this.$store.dispatch('fetchEmployees')
        })
        .catch(error => this.errors = error.response.data)
        
    },
  },
  computed: {
      show: {
          get () {
              return this.value
          },
          set (value) {
              this.$emit('input', value)
          }
      },
  }
}

</script>
