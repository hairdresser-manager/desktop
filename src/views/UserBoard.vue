<template>
    <v-container>
        <v-row>
            <v-col justify="center" class="pt-5 col-4">
                
                <v-card
                    class="mx-auto"
                    max-width="300"
                    tile
                >
                    <v-list dense>
                    <v-subheader><v-icon class="mr-3">mdi-account-circle</v-icon>Adzioski</v-subheader>
                    <v-list-item-group
                        color="primary"
                    >
                        <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        :to="item.path"
                        >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
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
import parse from '../helpers/jwtDecode'
export default {
    name: 'userboard',
    data(){
        return {
            jwtDecode: [],
            items: [
                { title: 'Wizyty', path: '/userboard/userappointments', icon: ''},
                { title: 'Opinie', path: '/userboard/userreviews', icon: ''},
                { title: 'Ustawienia konta', path: '/userboard/userprofile', icon: ''},
                { title: 'Logout', path: '/logout', icon: 'mdi-logout'}
            ],
        }
    },
    created() {
        const jwtDecode = parse()
        if(jwtDecode) {
            this.jwtDecode = jwtDecode
        }
    }
    
}

</script>

