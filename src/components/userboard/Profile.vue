<template>
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
                <v-text-field label="currentPassword" type="password" outlined v-model="changePassword.currentPassword" hide-details></v-text-field>
            </v-col>
            <v-col>
                <v-text-field label="newPassword" type="password" outlined v-model="changePassword.newPassword" hide-details></v-text-field>
            </v-col>
            <v-col>
                <v-text-field label="reTypedNewPassword" type="password" outlined v-model="changePassword.reTypedNewPassword" hide-details></v-text-field>
            </v-col>
            <v-col>
            <v-btn elevation="2" outlined
                width="100%"
                class="my-3"
                color="#E10050"
                @click="editAccount">Zmien haslo</v-btn>
            </v-col>
        </v-form>
    </v-card>
</template>

<script>
export default {
    name: 'profile',
    data: () => ({
        changePassword: {
            currentPassword: '',
            newPassword: '',
            reTypedNewPassword: ''
        }
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
        }
    },
    computed: {
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
