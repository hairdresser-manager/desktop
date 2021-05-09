<template>
    <div>
        <v-btn 
            :disabled="0 < index ? false : true"
            @click="() => {if (0 < index){eventOnClick(index-1)}}"
            class="ma-4"
            v-if="direction == 'left'"
            icon
            fab>
            <v-icon
                large
                color="blue darken-2"
            >mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn 
            :disabled="noOfDays > index+1 ? false : true"
            @click="() => {if (noOfDays > index+1){ eventOnClick(index+1)}}"
            class="ma-4"
            v-else-if="direction == 'right'"
            icon
            fab>
            <v-icon
                large
                color="blue darken-2"
            >mdi-chevron-right</v-icon>
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
    },
    
}
</script>