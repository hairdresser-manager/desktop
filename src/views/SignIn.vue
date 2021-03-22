<template>


    <v-form v-model="signin">
        <v-col cols="12" sm="6" md="3">
            Login
            <v-text-field label="" outlined v-model="name"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
            Password
            <v-text-field label="" outlined v-model="form.password"></v-text-field>
        </v-col>
        <div>
            <v-btn elevation="2" outlined
                color="success"
                class="mr-4"
                @click="validate">Sign in</v-btn>
        </div>
    </v-form>
    
</template>

<script>
export default {
  name: 'signin',
  components: {

  },

  data () {
      return {
          form: {
              email: '',
              password: '',
          }
      }
  },

  methods: {
      signin () {
          console.log('submitted')
      }
  }
}
</script>
