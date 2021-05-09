<template>
    <div class="header">
        <v-app-bar>
            <v-container>
                <v-row>
                <v-btn depressed route :to="'/home'">
                    <v-img
                    :src="require('./assets/logo.png')"
                    contain
                    height="20"
                    />
                    Hairdresser
                </v-btn>
                <v-spacer></v-spacer>
        
                <v-btn class="red-btn mx-3" outlined dark @click.stop="showSchedule=true">book now</v-btn>
                <ScheduleForm v-model="showSchedule" />
                <v-btn v-if="!loggedIn" text route :to="'/login'">
                    <v-icon class="mr-3">mdi-account-circle</v-icon>
                    Login in
                </v-btn>
                <v-btn 
                    v-if="loggedIn"
                    class="red-btn"
                    light
                    text
                    route
                    :to="'/userboard'"
                    >
                    <v-icon class="mr-3">mdi-account-circle</v-icon>
                    Profile
                    </v-btn>
                </v-row>
            </v-container>
        </v-app-bar>
        
    </div>
</template>

<script>
import ScheduleForm from './components/schedule/ScheduleForm'
export default {
    name: 'Header',
    data() {
        return {
            items: [
                { title: 'Profile', path: '/userprofile', icon: 'mdi-account-circle'},
                { title: 'Logout', path: '/logout', icon: 'mdi-logout'}
            ],
            showSchedule: false
        }
    },
    components: {
        ScheduleForm
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn
        },
    },
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
