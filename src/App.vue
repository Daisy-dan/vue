<template>
  <div id="app">
    <router-link to='/home'>home</router-link>
    <br>
    <router-link to='/hello'>hello</router-link>
     <br>
    <router-link to='/todoList'>todoList</router-link>
     <br>
    <router-link to='/todoList2'>todoList2</router-link>
    <br>
    <router-link to='/routejs'>路由编程式导航</router-link>

    <router-view ></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <v-index></v-index> -->
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
    'v-index': Index
  }
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
