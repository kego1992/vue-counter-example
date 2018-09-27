<template>
  <div>
    <h1>Vue Counter App</h1>
    <counter/>
  </div>
</template>

<script>
import Counter from './Counter'

export default {
  components: { Counter }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>