<template>
<v-dialog v-model="show" max-width="600px">
  <v-card class="pa-5">
    <v-card-text>
        <v-row align="center">
            <NavButton :direction="'left'"/>
            <v-spacer></v-spacer>
            <v-card-title>Today</v-card-title>
            <v-spacer></v-spacer>
            <NavButton :direction="'right'"/>
        </v-row>
        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="item in availableDates" :key="item.id">
                <v-list-item-title>
                    {{ item }}
                </v-list-item-title>
            </v-list-item>
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
        employeeIndex: 1,
        dateIndex: 1,
        availableDates: [],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }),
    computed: {
        show: {
            get () {
                return this.value
            },
            set (value) {
                this.$emit('input', value)
            }
        },
    },
    created() {
        const employee = this.employeeIndex
        const date = this.dateIndex
        this.$store.dispatch('fetchDates')
            .then(result => {
                this.availableDates = result.data[employee].availableDates[date].dates
            })
    }
}
</script>