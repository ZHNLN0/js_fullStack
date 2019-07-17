<template>
  <div class="hello">
    <v-menu></v-menu>
    <v-button size='small' @click.native="handleClick">按钮</v-button>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'
export default {
  name: 'HelloWorld',
  provide() {
    return {
      name: this.obj
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: {
        name: '蜗牛'
      }
    }
  },
  components:{
    "v-button":button,
    "v-menu":menu
  },
  methods: {
    handleClick(val) {
      // console.log(val)
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
