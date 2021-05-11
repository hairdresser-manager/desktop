<template>
<v-dialog v-model="show" max-width="600px">
  <v-card class="pa-5" >
    <div v-if="loggedIn">
    <v-card-text>
    <v-row align="center">
        <div class="text-h5 mx-auto">Choose the employee</div>
        <v-list v-if="getTeamMembers">
        <v-list-item-group
            v-model="members"
            active-class="pink--text"
        >
            <div v-for="item in availableDates.dates" :key="item.employeeId">
                <v-list-item :id="item.employeeId" @click="choosedMember(item.employeeId)">
                    <v-list-item-title >
                        <div>{{ item.employeeName }}</div>
                    </v-list-item-title>
                </v-list-item>
            </div>
        </v-list-item-group>
    </v-list>
    </v-row>
    </v-card-text>
    <v-card-text v-if="employeeIndex">
        <v-row align="center">
            <NavButton :direction="'left'" :index="dateIndex" :eventOnClick="changeDate" :noOfDays="getDatesLength"/>
            <v-spacer></v-spacer> 
            <v-card-title v-if="getDatesLength">{{ getDate }}</v-card-title>
            <v-spacer></v-spacer>
            <NavButton :direction="'right'" :index="dateIndex" :eventOnClick="changeDate" :noOfDays="getDatesLength"/>
        </v-row>
        <v-divider></v-divider>
        <v-list v-if="getDatesLength">
            <v-list-item-group
                v-model="selected"
                active-class="pink--text"
            >
            <div v-for="item in getHours" :key="item.id">
                <v-list-item v-if="splitHours(item)[0] < 12">
                    <v-list-item-title >
                        {{ item }}
                    </v-list-item-title>
                </v-list-item>
            </div>
            </v-list-item-group>
        </v-list>
    </v-card-text>
    <v-card-actions>
        <v-btn color="#E10050" text @click.stop="show=false">Close</v-btn>
        <v-btn v-if="( selected >=0 && members >=0 )" color="#E10050" text @click="send">Apply</v-btn>
    </v-card-actions>
    </div>
    <div class="text-h5 text-center" v-else>You must first log in</div>
  </v-card>
  
</v-dialog>
</template>

<script>
import NavButton from './NavButton'

export default {
    props: {
        value: Boolean
    },
    components: {
        NavButton
    },
    data: () => ({
        selected: null,
        members: null,
        employeeIndex: null,
        dateIndex: 0,
        availableDates: {
            date: '',
            dates: []
        },
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }),
    methods:{
        changeDate(e){
            this.dateIndex = e
        },
        splitHours(hours){
            return hours.split(':')
        },
        choosedMember(id){
            console.log(id)
            this.employeeIndex = id
        },
        getTeamMembers() {
            return this.availableDates.dates.map(({employeeId}) => employeeId).join(' ')    
        },
        send(){
            console.log('success')
        }
        
    },
    computed: {
        show: {
            get () {
                return this.value
            },
            set (value) {
                this.$emit('input', value)
            }
        },
        getDatesLength() {
            return this.getEmployeeDates.length
        },
        getEmployeeDates(){
            const employee = this.employeeIndex
            return this.availableDates.dates[employee-1].availableDates
        },
        getDate(){
            const dateIndex = this.dateIndex
            return this.getEmployeeDates[dateIndex].date
        },
        getHours(){
            const dateIndex = this.dateIndex
            console.log(...this.getEmployeeDates[dateIndex].hours)
            return this.getEmployeeDates[dateIndex].hours 
        },
        loggedIn() {
            return this.$store.getters.loggedIn
        },
        
    },
    created() {
        this.$store.dispatch('fetchDates')
            .then(result => {
                this.availableDates.dates = result.data
            })
    }
}
</script>
