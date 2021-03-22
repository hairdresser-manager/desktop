<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      permament=""
      color="#2C3A47"
      dark
      app
    >
      <v-list-item class="px-2 pt-1">
        <v-list-item-title class="ml-4 text-capitalize">
          My app
        </v-list-item-title>
      </v-list-item>
      <v-list shaped class="clickable">
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['icon-alt']"
            active-class="orange--text"
          >
            <template v-slot:activatior>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              route
              :to="child.route"
              active-class="orange--text"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            active-class="orange--text"
            route
            :to="item.route"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#2C3A47" dark>
      
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="clickable">
          </v-app-bar-nav-icon>
          <v-toolbar-title style="width:300px" class="ml-0 pl-4"></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn class="ma-2" outlined route :to="'/Login'">Login</v-btn>
          <v-btn class="ma-2" outlined route :to="'/SignUp'">Sign up</v-btn>
          <v-btn v-if="isLoggedIn" class="ma-2" outlined @click="logout">Logout</v-btn>
        
    </v-app-bar>
  
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  props: {
    source: String
  },
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
  },
  methods: {
      async logout (){
        await this.$store.dispatch('LogOut')
        this.$router.push('/login')
      }
    },

  data: () => ({
    drawer: false,
    mini: false,
    fab: false,
    items: [
      { icon: "mdi-home", text: "Dashboard", route: "/" },
      { icon: "mdi-account", text: "User", route: "/User" }
    ]
  })
};
</script>

<style>
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
