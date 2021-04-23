<template>
    <div>
        <h1>User</h1>
        <v-list>
            <v-list-item
            v-for="(item, index) in jwtDecode"
            :key="index"
            >
            <v-list-item-title>
                {{ item.name }}
            </v-list-item-title>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import parse from '../helpers/jwtDecode'
export default {
    data(){
        return {
            jwtDecode: []
        }
    },
    created() {
        const jwtDecode = parse()
        if(jwtDecode) {
            this.jwtDecode = jwtDecode
            console.log(this.jwtDecode)
        }
    }
    
}

</script>

