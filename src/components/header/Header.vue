<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <img class="mr-3" src="../../static/logo-square.png" alt="" width="48" height="48">
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
        <a
          @click="loginHandle"
          class="text-light"
          v-if="!this.$store.state.isLogin"
          ><span class="pl-1">登陆</span></a
        >
        <div v-if="this.$store.state.zUser.username">
          <b-dropdown
            right
            size="sm"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <span class="text-light mr-2">{{ username }}</span>
              <b-avatar badge  variant="primary" badge-variant="danger" size="sm" :src="avatar"></b-avatar>
            </template>
            <b-dropdown-item href="#">个人中心</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout()">退出</b-dropdown-item>
          </b-dropdown>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  mounted () {
    console.log(this.$store.state)
  },
  computed: {
    // 用户名
    username () {
      return this.$store.state.zUser.username
    },
    // 头像
    avatar () {
      return this.$store.state.zUser.avatar
    },
    // accessToken
    token () {
      return this.$store.state.zUser.token
    }
  },
  methods: {
    loginHandle () {
      this.$router.push({ path: '/login' })
    },
    logout () {
      this.$store.commit('setuserInfo', '')
    }
  }
}
</script>
