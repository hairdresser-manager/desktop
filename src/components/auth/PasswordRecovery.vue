<template>
    <v-container>   
        <v-row justify="center">
            <v-card class="w-100" width="100%" max-width="720px">
                <h2 class="text-center py-5 sub-title">Password recovery</h2>
                <h4 class="text-center py-5 sub-title">Your email:</h4>
                <v-form v-model="valid" >
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
                            @click="resetPassword"
                            :disabled="!valid"
                        >send</v-btn>
                    </v-col>
                        
                </v-form>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'passwordrecovery',
    data: () => ({
        valid: false,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
    methods: {
        resetPassword() {
            const email = {
                email: this.email
            }
            this.$store.dispatch('resetPassword', email)
        }
    }
}
</script>