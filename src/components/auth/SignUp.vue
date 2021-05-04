<template>
    <v-container>   
        <v-row justify="center">
            <v-card class="w-100" width="100%" max-width="720px">
                <h2 class="text-center py-5 sub-title">Zarejestruj się do hairdresser</h2>
                <div v-if="error" class="alert alert-danger">
                    <v-list 
                        dense>
                        <v-list-item>
                        <v-list-item-title class="red--text">
                            {{ getMessage }}
                        </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </div>
                <div v-if="success" class="alert alert-danger">
                    <v-list 
                        dense>
                        <v-list-item>
                        <v-list-item-title class="green--text">
                            Potwierdz adres email
                        </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </div>
                <v-form >
                    <v-col>
                        <v-text-field label="Email" type="text" outlined v-model="email" hide-details></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="Password" type="password" outlined v-model="password" hide-details></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="ReTypePassword" type="password" outlined v-model="reTypedPassword" hide-details></v-text-field>
                    </v-col>
                    <v-col>
                        <v-row>
                            <v-col>
                                <v-text-field label="First name" outlined v-model="firstname" hide-details></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field label="Last name" outlined v-model="lastname" hide-details></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-text-field label="Mobile phone" length="9" outlined v-model="mobilePhone" hide-details></v-text-field>
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
            mobilePhone: '',
            error: false,
            success: false,
      }
  },
  computed: {
    getMessage() {
        return this.$store.state.message
    }  
  },
  methods: {
    signup () {
        const data = {
            email: this.email,
            password: this.password,
            reTypedPassword: this.reTypedPassword,
            firstname: this.firstname,
            lastname: this.lastname,
            mobilePhone: this.mobilePhone
        }
        console.log(data)

    this.$store.dispatch('register', data)
        .then(() => {
            this.success = true
        })
        .catch(() => {
            this.error = true
        })
      }
  }
}
</script>
