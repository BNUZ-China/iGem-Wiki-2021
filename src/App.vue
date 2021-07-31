<template>
  <div id="app">
    <top-navigation-bar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";

export default {
  name: 'App',
  components: {
    TopNavigationBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
