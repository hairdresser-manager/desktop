<template>
    <div class="signin pl-3 pt-3">
        <h1>Sign in</h1>
    </div>
</template>

<script>
export default {
  name: 'signin',
  components: {

  },

  data() {
      return {
          name: '',
          password: '',
      }
  },

  methods: {
      submit () {
          console.log(this.name, this.password)
      }
  }
}
</script>
