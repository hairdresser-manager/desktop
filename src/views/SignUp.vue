<template>
    <v-container>   
        <v-row justify="center">
            <v-card class="w-100" width="100%" max-width="720px">
                <h2 class="text-center py-5">Zarejestruj się do hairdresser</h2>
                <v-form>
                    <v-col>
                        <v-text-field label="Email" type="text" outlined v-model="email"></v-text-field>
                    </v-col>
                    <v-col >
                        <v-text-field label="Password" type="password" outlined v-model="password"></v-text-field>
                    </v-col>
                    <v-col >
                        <v-text-field label="ReTypePassword" type="password" outlined v-model="reTypedPassword"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-row>
                            <v-col>
                            <v-text-field label="first name" outlined v-model="firstname"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field label="second name" outlined v-model="lastname"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-text-field label="mobilePhone" length="9" outlined v-model="mobilePhone"></v-text-field>
                    </v-col>
                    
                    <v-col>
                        <v-btn elevation="2" outlined
                            width="100%"
                            class="my-3"
                            color="#E10050"
                            @click="signup">Sign up</v-btn>
                    </v-col>
                </v-form>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'signup',
  components: {

  },

  data() {
      return {
            email: '',
            password: '',
            reTypedPassword: '',
            firstname: '',
            lastname: '',
            mobilePhone: ''
          
      }
  },

  methods: {
      signup () {
          const data = {
              email: this.email,
              password: this.password,
              reTypedPassword: this.reTypePassword,
              firstname: this.firstname,
              secondname: this.secondname,
              mobilePhone: this.mobilePhone
          }

          axios.post('http://localhost:8080/api/v1/register', data)
          .then(result => {
              console.log(result)
              this.$router.push('/home')
          })
          .catch(err => console.log(err))
      }
  }
}
</script>


<style scoped>
h2{
    color: rgba(0, 0, 0, 0.57);
}
</style>