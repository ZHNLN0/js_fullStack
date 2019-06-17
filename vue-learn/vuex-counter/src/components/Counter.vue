<template>
  <div>
    {{$store.state.count}} times,
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  props: ['count'],
  methods: {
    increment() {
      
    }
  },
}
</script>

<style>

</style>
