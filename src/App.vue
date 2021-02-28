<template>
  <div id="app">
    <Header v-if="$route.meta.showHeader == true" />
    <div id="nav" v-if="$route.meta.showHeader == true">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
export default {
  components: { Header, Footer },
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
