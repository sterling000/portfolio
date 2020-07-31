<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
     <app-footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

export default {
  components:{
    'app-header': Header,
    'app-footer': Footer
  },
  methods:{
    
  },
  mounted: async function(){
    
  }
}
</script>

<style lang="scss">
@import "./assets/styles/config.scss";
* {
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;
}

body {
  @include background;
  background: $primary-color;
  color: set-text-color($primary-color);
  padding: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
}

.text-secondary {
  color: $secondary-color;
}
@import "./assets/styles/mobile.scss"
</style>
