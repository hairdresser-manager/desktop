<template>
    <v-container>   
        <v-row justify="center">
            <v-card class="w-100" width="100%" max-width="720px">
                <h2 class="text-center py-5">Zaloguj się do hairdresser</h2>
                <v-form>
                    <v-col>
                        <v-text-field label="Email" outlined v-model="email"></v-text-field>
                    </v-col>
                    <v-col >
                        <v-text-field label="Password" type="password" outlined v-model="password"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-row>
                            <v-col>
                                <v-btn route :to="'/signup'" text>Zarejestruj się</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn text>Przypomnij hasło</v-btn>
                            </v-col>
                        </v-row>
                        
                        <v-btn elevation="2" outlined
                            width="100%"
                            class="my-3"
                            color="#E10050"
                            @click="login">Login</v-btn>
                        <v-row align="center" class="px-5 py-5"><v-divider></v-divider><span class="px-5 grey--text text--darken-1">or</span><v-divider></v-divider></v-row>
                        <v-btn @click="logInWithFacebook" width="100%" color="primary" class="my-3"> Login with Facebook</v-btn>
                    </v-col>
                </v-form>
            </v-card>
        </v-row>
    </v-container>
    
</template>

<script>

export default {
  name: 'login',
  components: {

  },

  data() {
      return {
          email: '',
          password: '',
      }
  },

  methods: {
    login () {

          const data = {
              email: this.email,
              password: this.password
          }

          this.$store.dispatch('login', data)

      },

      logInWithFacebook () {
          console.log(this.name, this.password)
      }

  }
}
</script>


<style scoped>

h2{
    color: rgba(0, 0, 0, 0.57);
}

</style>