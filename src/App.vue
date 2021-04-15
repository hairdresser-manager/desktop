<template>
  <v-app id="app">

    <v-main>
      <Header />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  name: "App",
  props: {
    source: String
  },
  components: {
    Header
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

.red-btn,
.red-btn span{
  border-color: #E10050;
  color: #E10050;
}

</style>
