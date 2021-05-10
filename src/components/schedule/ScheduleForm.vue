<template>
<v-dialog v-model="show" max-width="600px">
  <v-card class="pa-5">
    <v-card-text>
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
            <v-list-item v-for="item in getHours" :key="item.id">
                <v-list-item-title>
                    {{ item }}
                </v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn color="#E10050" text @click.stop="show=false">Close</v-btn>
    </v-card-actions>
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
        selected: [],
        employeeIndex: 1,
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
            return this.availableDates.dates.length
        },
        getDate(){
            const dateIndex = this.dateIndex
            return this.availableDates.dates[dateIndex].date
        },
        getHours(){
            const dateIndex = this.dateIndex
            return this.availableDates.dates[dateIndex].dates
        }
    },
    created() {
        this.$store.dispatch('fetchDates')
            .then(result => {
                const employee = this.employeeIndex
                this.availableDates.dates = result.data[employee].availableDates
            })
    }
}
</script>