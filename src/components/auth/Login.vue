<template>
    <v-container>   
        <v-row justify="center">
            <v-card class="w-100" width="100%" max-width="720px">
                <h2 class="text-center py-5 sub-title">Zaloguj się do hairdresser</h2>
                <div v-if="error">
                    <v-list 
                        dense>
                        <v-list-item>
                        <v-list-item-title class="red--text">
                            {{ getMessage }}
                        </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </div>
                <v-form v-model="valid">
                    <v-col>
                        <v-text-field 
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                            outlined
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col >
                        <v-text-field label="Password" type="password" outlined v-model="password" hide-details></v-text-field>
                    </v-col>
                    <v-col>
                        <v-row>
                            <v-col>
                                <v-btn route :to="'/signup'" text>Zarejestruj się</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn text :to="'/passwordrecovery'">Zresetuj hasło</v-btn>
                            </v-col>
                        </v-row>
                        
                        <v-btn elevation="2" outlined
                            width="100%"
                            class="my-3"
                            color="#E10050"
                            :disabled="!valid"
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
        valid: false,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        error: false,
        password: '',
      }
  },
  computed: {
    getMessage() {
        return this.$store.state.message
    }  
  },
  methods: {
    login () {
        const data = {
            email: this.email,
            password: this.password
        }
        this.$store.dispatch('login', data)
            .then(() => this.$router.push({path: '/home'}))
            .catch(() => {
                this.error = true
            })
    },

    async logInWithFacebook () {
        console.log(this.email, this.password)
    },
    

  }
}
</script>
