<template>
    <v-container>
        <v-row align="center">
            <v-avatar
            color="primary"
            size="56"
            class="mr-3"
            ><span class="white--text headline">{{ review.initials }}</span></v-avatar>
            <v-col>
                <h3>{{ review.name }}</h3>
                <v-row align="center" class="mb-1">
                    <v-rating
                    background-color="orange lighten-3"
                    color="orange"
                    size="24"
                    readonly
                    :value="3"
                    length="5"
                    ></v-rating>
                    <v-subheader>{{ review.date }}</v-subheader>
                </v-row>
                <p class="mb-0">{{ review.text }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'Review',
        props: {
            review: Object
        }
    }
</script>

<style scoped>

    .v-rating .v-icon{
        padding: 0!important;
    }
</style>