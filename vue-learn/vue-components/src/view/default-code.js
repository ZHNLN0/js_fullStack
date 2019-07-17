const code = 
`<template>
  <div>
    <input v-model="message" >
    {{message}}
  </div>
</template>
<scrit>
  export default {
    data() {
      return {
        message: ''
      }
    }
  }
</scrit>
`
export default code