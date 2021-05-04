<template>
    <v-card class="mx-auto pa-6" >
        <h2 class="pb-5">User Profile</h2>
        <v-divider></v-divider>
        <v-subheader>Twoje dane</v-subheader>
        <v-form>
            <v-col>
                <v-text-field label="First name" v-model="updateAccount.firstName" outlined hide-details></v-text-field>
            </v-col>
            <v-col>
                <v-text-field label="Last name" v-model="updateAccount.lastName" outlined hide-details ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field label="Mobile phone" length="9" outlined v-model="updateAccount.mobilePhone" hide-details></v-text-field>
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
    name: 'userprofile',
    data: () => ({
        updateAccount: {
            firstName: '',
            lastName: '',
            mobilePhone: ''
        },
        changePassword: {
            currentPassword: '',
            newPassword: '',
            reTypedNewPassword: ''
        }
    }),
    created() {
        this.updateAccount.firstName = this.$store.getters.getUser.firstName
    },
    methods: {
        editAccount() {
            console.log(this.updateAccount.firstName, this.updateAccount.lastName)
        }
    },
}
</script>
