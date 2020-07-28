<template>
  <div id="app">
    <p>this is the App</p>
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components:{
    'app-header': Header
  },
  methods:{
    
  },
  mounted: async function(){
    
  }
}
</script>

<style scoped>

</style>
