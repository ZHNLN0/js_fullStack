<template>
  <div class="menu">
    {{message}}
    {{name.name}}
    {{app.user}}
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  inject: ['name','app'],
  data() {
    return {
      message: 'asdasdasd'
    }
  },
  created() {
    let self = this
    bus.$on('todo', (val) => {
      console.log(val)
      self.message = val
    })
  },
}
</script>

<style>

</style>
