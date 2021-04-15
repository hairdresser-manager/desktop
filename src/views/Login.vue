<template>
    <v-card max-width="720px" outlined>
        <v-form>
            <v-col >
                <v-text-field label="Login" outlined v-model="name"></v-text-field>
            </v-col>
            <v-col >
                <v-text-field label="Password" type="password" outlined v-model="password"></v-text-field>
            </v-col>
            <v-col>
                <v-btn elevation="2" outlined
                    color="success"
                    width="100%"
                    class="my-3"
                    @click="submit">Login</v-btn>
                <v-btn @click="logInWithFacebook" width="100%" color="primary" class="my-3"> Login with Facebook</v-btn>
            </v-col>
        </v-form>
    </v-card>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  components: {

  },

  data() {
      return {
          name: '',
          password: '',
      }
  },

  methods: {
      async submit () {
          const data = {
              name: this.name,
              password: this.password
          }
          let response = await axios.post('http://localhost/8080/api/v1/login', data)
          console.log(response)
          this.$router.push('/home')
      },

      logInWithFacebook () {
          console.log("123")
      }
  }
}
</script>
