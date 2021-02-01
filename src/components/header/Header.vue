<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">zawazawa</a>
    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <div class="spinner-border spinner-border-sm text-light" role="status" v-if="this.$store.state.isLogining">
          <span class="sr-only">Loading...</span>
        </div>
        <a href="#" @click="loginByGithub" class="text-light"
          ><i class="fa fa-github"></i
          ><span class="pl-1">登陆</span></a
        >
        <!-- <b-dropdown
          right
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            &#x1f50d;<span class="sr-only">Search</span>
          </template>
          <b-dropdown-item href="#">Ac2tion</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown> -->
      </li>
    </ul>
  </nav>
</template>
<script>
import { getUniqueId } from '@/utils/common.js'
export default {
  mounted () {
    console.log(this.$store.state.isLogining)
  },
  methods: {
    loginByGithub () {
      this.$store.commit('setIsReadyAuthHandle', true)
      window.location.href =
        'https://github.com/login/oauth/authorize?client_id=ced388331bf999f80fa8&state=' +
        getUniqueId() +
        new Date().getTime()
    }
  }
}
</script>
