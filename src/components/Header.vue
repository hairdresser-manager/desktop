<template>
    <div class="header">
        <v-app-bar>
            <v-container>
                <v-row>
                <v-btn depressed route :to="'/home'">
                    <v-img
                    :src="require('../assets/logo.png')"
                    contain
                    height="20"
                    />
                    Hairdresser
                </v-btn>
                <v-spacer></v-spacer>

                <v-toolbar-items>
                    <v-btn 
                        depressed
                        v-for="item in menuItems"
                        :key="item.title"
                        :to="item.path">
                        {{ item.title}}
                    </v-btn>
                </v-toolbar-items>

                <v-spacer></v-spacer>

                <v-btn class="red-btn mx-3" outlined dark>book now</v-btn>
                <v-btn v-if="!loggedIn" text route :to="'/login'">
                    <v-icon class="mr-3">mdi-account-circle</v-icon>
                    Login in
                </v-btn>
                <v-menu v-if="loggedIn" offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        Dropdown
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        >
                        <v-list-item-title>
                            <v-btn :to="item.path">
                                {{ item.title }}
                            </v-btn>
                        </v-list-item-title>
                        </v-list-item>
                    </v-list>
                    </v-menu>
                </v-row>
            </v-container>
        </v-app-bar>
        
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            menuItems: [
                { title: 'Our service', path: '/services' },
                { title: 'Meet the team', path: '/team'},
                { title: 'Reviews', path: '/reviews'}
            ],
            items: [
                { title: 'Profile', path: '/userprofile', icon: 'mdi-account-circle'},
                { title: 'Logout', path: '/logout', icon: 'mdi-logout'}
            ]
        }
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn
        }
    }
}
    
</script>

<style>
.header{
    position: relative;
}
.v-app-bar{
    z-index: 2;
}
.home__Box{
  position: absolute;
  left: 50%;
  bottom: -60px;
  transform: translateX(-50%);
  color: white;
  font-weight: 200;
  width: 333px;
  height: 115px;
  background: #E10050;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}
.home{
  position: relative;
}
</style>
