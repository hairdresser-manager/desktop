<template>
    <v-container>
        <v-row>
            <v-col justify="center" class="col-4">
                
                <v-card
                    class="mx-auto"
                    max-width="300"
                    tile
                >
                    <v-list dense>
                    <v-subheader><v-icon class="mr-3">mdi-account-circle</v-icon>{{ getUser.firstName }}</v-subheader>
                    <v-list-item-group
                        color="#E10050"
                    >
                        <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        :to="item.path"
                        >
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                        
                        </v-list-item>
                    </v-list-item-group>
                    </v-list>
                    
                </v-card>
            </v-col>
            <v-col>
                <router-view></router-view>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'userboard',
    data(){
        return {
            items: [
                { title: 'Wizyty', path: '/userboard/userappointments'},
                { title: 'Opinie', path: '/userboard/userreviews'},
                { title: 'Ustawienia konta', path: '/userboard/userprofile'},
                { title: 'Wyloguj', path: '/logout'}
            ],
        }
    },
    computed: {
        getUser() {
            return this.$store.getters.getUser
        }
    }
    
}

</script>

