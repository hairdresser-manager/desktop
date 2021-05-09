<template>
    <v-container>
        <v-row>
            <v-col justify="center" class="col-4">
                <v-card
                    class="mx-auto py-5"
                    max-width="300"
                    tile
                >
                    <v-list dense>
                    <v-subheader :class="colors[getRoles].text"><v-icon class="mr-3" :color="colors[getRoles].avatar">mdi-account-circle</v-icon>
                   {{ getUser.firstName }}</v-subheader>
                    <v-list-item-group
                        color="#E10050"
                        v-for="(item, i) in checkRole()"
                        :key="i"
                    >
                        <v-list-item
                            color="#E10050"
                            :to="item.path"
                        >
                        <v-list-item-content >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
            colors: {
                user: {
                    text: 'cyan--text lighten-1',
                    avatar: 'cyan lighten-1'
                },
                employee: {
                    text: 'light-green--text lighten-1',
                    avatar: 'light-green lighten-1'
                },
                adminemployee: {
                    text: 'orange--text lighten-1',
                    avatar: 'orange lighten-1'
                },
                admin: {
                    text: 'red--text lighten-1',
                    avatar: 'red lighten-1'
                }
            },
            items: {
                user: [
                    { title: 'Opinie', path: '/userboard/reviews'},
                    { title: 'Ustawienia konta', path: '/userboard/profile'},
                    { title: 'Wyloguj', path: '/logout'}
                ],
                employee: [
                    { title: 'Wizyty', path: '/userboard/appointments'},
                    
                ],
                admin: [
                    { title: 'Pracownicy', path: '/userboard/employess'},
                    { title: 'Harmonogram', path: '/userboard/schedule'},
                    { title: 'Usługi', path: '/userboard/services'}

                ],
                
            },
        }
    },

    methods: {
        checkRole() {
            let allItems = this.items
            const allRoles = this.$store.state.auth.user.roles
            let arrayRoles = [];
            let result

            allRoles.map( item => {
                arrayRoles.push(...allItems[item.toLowerCase()])
                result = arrayRoles.concat(allItems['user'])
            })

            return result

        }
    },
    computed: {
        getUser() {
            return this.$store.getters.getUser
        },
        getRoles() {
            return this.$store.getters.getUser.roles.join('').toLowerCase()
        },
        
    }
    
}

</script>

