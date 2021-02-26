<template>
  <div id="app">
    <Header v-if="$route.meta.showHeader == true" />
    <div id="nav" v-if="$route.meta.showHeader == true">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
    </div>
    <router-view></router-view>
    <footer class="my-5 pt-5 text-muted text-center text-small" v-if="$route.meta.showFooter == true">
      <p class="mb-1">© 2017-2020 Company Name</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Privacy</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Support</a></li>
      </ul>
    </footer>
  </div>
</template>
<script>
import Header from './components/header/Header.vue'
export default {
  components: { Header },
  mounted () {
    console.log('mounted')
  },
  created () {
    console.log('mounted!!!')
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.toast-header {
  display: none !important;
}
</style>
