<template>
    <div>
        <v-btn 
            class="ma-4"
            v-if="direction == 'right'"
            icon
            fab>
            <v-icon
                large
                color="blue darken-2"
            >mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn 
            class="ma-4"
            v-else-if="direction == 'left'"
            icon
            fab>
            <v-icon
                large
                color="blue darken-2"
            >mdi-chevron-left</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'NavButton',
    props: {
        direction: String,
        index: Number,
        noOfDays: Number,
        eventOnClick: Function
    }
}
</script>