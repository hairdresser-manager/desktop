<template>
   <div></div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('logout')
            .then(() => this.$router.push({path: '/login'}))
            .catch(() => this.$router.push({path: '/login'}))
    }
}
</script>
