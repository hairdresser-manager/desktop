<template>
    <v-card class="mx-auto pa-6" >
        <h2>User Appointments</h2>
        <div v-for="appointment in appointments" :key="appointment.id">
            <v-card class="ma-6">
                 <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">
                            {{ appointment.date }}
                            {{ appointment.hour }}
                        </div>
                        <v-list-item-title class="headline mb-1">
                            {{ appointment.serviceName }}
                        </v-list-item-title>
                        <v-list-item-subtitle><strong v-html="appointment.employeeName"></strong></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                        
                    >
                     <img :src="appointment.employeeLowQualityAvatar"  />
                    </v-list-item-avatar>
                    
                    </v-list-item>
                    <v-card-actions>
                    <v-chip
                        small
                        text
                        light
                        outlined
                        :text-color="appointment.rated ? 'green' : 'red'"
                    >
                       {{ appointment.rated ? 'rated' : 'unrated'}}
                    </v-chip>
                    </v-card-actions>
            </v-card>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'appointments',
    data: () => ({
        appointments: []
    }),
    created() {
        this.$store.dispatch('fetchAppointments')
            .then((result => this.appointments = result.data))
            .catch(error => console.log(error))

    }
}
</script>
