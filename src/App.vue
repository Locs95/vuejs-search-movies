<template>
  <div id="app" class="container">  

    <router-view></router-view>

  </div>
</template>

<script>

   import Vue from 'vue'
   import axios from 'axios'
   import VueAxios from 'vue-axios'
   import store from './store'
  
  Vue.use(VueAxios, axios);

  export default {
      name: 'app',
      store
  }
</script>

<style src="./assets/css/bootstrap.min.css"></style>