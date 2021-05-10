<template>
    <v-card class="mx-auto pa-6" >
        <v-row no-gutters justify="space-between">
            <h2>Employees</h2>
            <v-btn class="red-btn" outlined dark @click.stop="addEmployee=true">add</v-btn>
            <AddEmployee v-model="addEmployee" />
            <EmployeeDialog v-model="showEdit" />
        </v-row>
            <v-card class="ma-6" v-for="employee in getEmployees" :key="employee.id" @click="editEmployee(employee.id)">
                <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">
                        {{ employee.email }}
                        {{ employee.phoneNumber }}
                    </div>
                    <v-list-item-title class="headline mb-1">
                        {{ employee.firstName + " " + employee.lastName }}
                    </v-list-item-title>
                    <v-list-item-subtitle><strong v-html="employee.description"></strong></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                    
                >
                    <img :src="employee.avatarUrl"  />
                </v-list-item-avatar>
                
                </v-list-item>
                <v-card-actions>
                    <v-chip
                    small
                    text
                    light
                    outlined
                    :text-color="employee.active ? 'green' : 'red'"
                >
                    {{ employee.active ? 'active' : 'inactive'}}
                </v-chip>
                </v-card-actions>
            </v-card>
    </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import AddEmployee from './AddEmployee'
import EmployeeDialog from './EmployeeDialog'
export default {
    name: 'employees',
    data: () => ({
        addEmployee: false,
        showEdit: false,
    }),
    components: {
        AddEmployee,
        EmployeeDialog
    },
    created(){
        this.$store.dispatch('fetchEmployees')
            .then(result => {
                console.log(result)
            })
    },
    methods: {
        editEmployee(id){
            this.showEdit = true
            this.$store.commit('setEmployeeId', id)
        }
    },
    computed: {
        ...mapGetters(['getEmployees','getEmployeeId'])
    }
}
</script>