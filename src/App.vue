<template>
  <v-app id="app">

    <v-main>
      <Header />
      <transition name="component-fade" mode="out-in" >
        <router-view></router-view>
      </transition>
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

.sub-title{
  color: rgba(0, 0, 0, 0.57);
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
