<template>
  <div id="app" class="app">

    <Cars></Cars>

  </div>
</template>

<script>
  import Cars from './Cars.vue'
export default {
  name: 'app',
  components: { Cars  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  body {
    font-family: Arial, sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .app {
    width: 95%;
    padding: 0 35px;
  }

</style>
