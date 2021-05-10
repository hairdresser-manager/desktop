<template>
    <div>
    <v-card class="mx-auto pa-6" >
        <h2 class="pb-5">User Profile</h2>
        <v-divider></v-divider>
        <v-subheader>Twoje dane</v-subheader>
        <v-form>
            <v-col>
                <v-text-field label="First name" v-model="firstName" outlined hide-details></v-text-field>
            </v-col>
            <v-col>
                <v-text-field label="Last name" v-model="lastName" outlined hide-details ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field label="Mobile phone" length="9" outlined v-model="mobilePhone" hide-details></v-text-field>
            </v-col>
            <v-col>
            <v-btn elevation="2" outlined
                width="100%"
                class="my-3"
                color="#E10050"
                @click="editAccount">Zapisz dane</v-btn>
            </v-col>
        </v-form>
        <v-divider></v-divider>
        <v-subheader>Zmiana hasła</v-subheader>
        <v-form>
            <v-col>
                <v-text-field label="currentPassword" type="password" outlined v-model="currentPassword" hide-details></v-text-field>
            </v-col>
            <v-col>
                <v-text-field label="newPassword" type="password" outlined v-model="newPassword" hide-details></v-text-field>
            </v-col>
            <v-col>
                <v-text-field label="reTypedNewPassword" type="password" outlined v-model="reTypedNewPassword" hide-details></v-text-field>
            </v-col>
            <v-col>
            <v-btn elevation="2" outlined
                width="100%"
                class="my-3"
                color="#E10050"
                @click="changePassword">Zmien haslo</v-btn>
            </v-col>
        </v-form>
        <ul v-if="errors" class="red--text">
            <li v-for="(v, k) in errors" :key="k">{{ v }}</li>
        </ul>
    </v-card>
    <div class="text-center ma-2">
        <v-snackbar
        v-model="snackbar"
        >
        text

        <template v-slot:action="{ attrs }">
            <v-btn
            color="pink"
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
import { mapState } from "vuex";
export default {
    name: 'profile',
    data: () => ({
        snackbar: false,
        currentPassword: '',
        newPassword: '',
        reTypedNewPassword: ''
    }),
    created() {
        this.$store.dispatch('fetchUser')
    },
    methods: {
        editAccount() {
            const data = {
                firstName: this.firstName,
                lastName: this.lastName,
                mobilePhone: this.mobilePhone
            }
            this.$store.dispatch('updateUser', data)
        },
        changePassword(){
            const data = {
                currentPassword: this.currentPassword,
                newPassword: this.newPassword,
                reTypedNewPassword: this.reTypedNewPassword
            }
            this.$store.dispatch('changePassword', data)
                .then(() => this.snackbar = true)
                
        }
    },
    computed: {
        ...mapState( {
            errors: state => state.auth.errors
        }),
        firstName: {
            get () {
                return this.$store.state.auth.accountUser.firstName
            },
            set (value) {
                this.$store.commit('updateFirstName', value)
            }
        },
        lastName: {
            get () {
                return this.$store.state.auth.accountUser.lastName
            },
            set (value) {
                this.$store.commit('updateLastName', value)
            }
        },
        mobilePhone: {
            get () {
                return this.$store.state.auth.accountUser.mobilePhone
            },
            set (value) {
                this.$store.commit('updateMobilePhone', value)
            }
        }
        
  },
    
}
</script>
