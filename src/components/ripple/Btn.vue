<template>
  <button type="button" v-ripple="'#fff'">Click and test ripple</button>
</template>

<script>
  import ripple from './ripple'

  export default {
    name: "Btn",
    mixins: [ripple]
  }
</script>

<style scoped>

</style>