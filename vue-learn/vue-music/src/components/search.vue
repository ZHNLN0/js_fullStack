<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 搜索框 -->
      <v-searchBox></v-searchBox>
    </div>
  </div>
</template>

<script>
import searchBox from './searchBox'
export default {
  components:{
    'v-searchBox': searchBox
  }
}
</script>

<style>

</style>
