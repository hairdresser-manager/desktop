<template>
    <v-card class="mx-auto pa-6" >
        <h2>Employees</h2>
    </v-card>
</template>

<script>
export default {
    name: 'employees',
    created(){
        this.$store.dispatch('fetchEmployees')
            .then(result => console.log(result))
    }
}
</script>