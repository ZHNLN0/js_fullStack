<template>
  <div id="app">
    <counter 
    :count="count"
    v-on:increment="incrementCount" />
    <!-- <counter-brother :count="count" /> -->
  </div>
</template>

<script>
// 两个组件都要用到count 状态，怎么办
import Counter from './components/Counter'
import CounterBrother from './components/CounterBrother'
export default {
  name: 'App',
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  components: {
    'counter': Counter,
    'counter-brother': CounterBrother
  },
  methods: {
    incrementCount() {
      this.count++;
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
