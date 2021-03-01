<template>
  <div>
    <div
      id="header-nav"
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm fixed-top"
    >
      <a class="navbar-brand" href="/">
        <div class="logo">
          <img
            rel="tooltip"
            title=""
            data-html="true"
            data-placement="bottom"
            src="../../static/logo-square.png"
            style="width: 40px"
            data-original-title="Hey! <br> Hope you're doing fine :-)"
          />
        </div>
      </a>
      <h5 class="my-0 mr-md-auto font-weight-normal">zawazawa</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">Features</a>
        <a class="p-2 text-dark" href="#">Enterprise</a>
        <a class="p-2 text-dark" href="#">Support</a>
        <a class="p-2 text-dark" href="#">Pricing</a>
      </nav>
      <div class="btn-wrapper-2">
        <div v-if="!this.$store.state.isLogin">
          <b-button
          pill
          class="m-1 publish-button"
          style="padding-left: 2rem; padding-right: 2rem"
          @click="showPublishModal"
          >发布</b-button
        >
        <b-button
          pill
          class="m-1 login-button"
          style="padding-left: 2rem; padding-right: 2rem"
          @click="loginHandle"
          >登陆</b-button
        >
        </div>
        <div v-if="this.$store.state.zUser.username">
          <b-dropdown
            right
            size="sm"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <!-- <span class="text-dark mr-2">{{ username }}</span> -->
              <b-avatar
                badge
                variant="primary"
                badge-variant="danger"
                :src="avatar"
              ></b-avatar>
            </template>
            <b-dropdown-item href="#">个人中心</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout()">退出</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.scroll)
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
    showPublishModal () {
      document.getElementById('float-publish').click()
      // this.$parent.showPublishModal()
      // const scroll =
      //   document.documentElement.scrollTop || document.body.scrollTop
      // const element = document.getElementById('header-nav')
      // console.log(element)
      // if (scroll > 0) {
      //   element
      //     .classList.add('fixed-top')
      // } else {
      //   element.classList.remove('fixed-top')
      // }
    },
    loginHandle () {
      this.$router.push({ path: '/login' })
    },
    logout () {
      this.$store.commit('setuserInfo', '')
    }
  }
}
</script>
<style  scoped>

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.navbar.fixed-top {
  border-radius: 0;
}
.navbar {
  transition: all 0.15s ease 0s;
  border: 0;
  border-radius: 3px;
  padding: 0.625rem 0;
  margin-bottom: 20px;
  color: #555;
  background-color: #fff !important;
  box-shadow: 0 4px 18px 0 rgb(0 0 0 / 12%), 0 7px 10px -5px rgb(0 0 0 / 15%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.fixed-bottom,
.fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
.fixed-top {
  top: 0;
}
.navbar,
.navbar > .container,
.navbar > .container-fluid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.login-button {
  color: #ffffff;
  background-color: #E45E5B;
  border-color: #E45E5B;
}

.login-button:hover,
.login-button:focus,
.login-button:active,
.login-button.active,
.open .dropdown-toggle.login-button {
  color: #ffffff;
  background-color: #D45452;
  border-color: #E45E5B;
}

.login-button:active,
.login-button.active,
.open .dropdown-toggle.login-button {
  background-image: none;
}

.login-button.disabled,
.login-button[disabled],
fieldset[disabled] .login-button,
.login-button.disabled:hover,
.login-button[disabled]:hover,
fieldset[disabled] .login-button:hover,
.login-button.disabled:focus,
.login-button[disabled]:focus,
fieldset[disabled] .login-button:focus,
.login-button.disabled:active,
.login-button[disabled]:active,
fieldset[disabled] .login-button:active,
.login-button.disabled.active,
.login-button[disabled].active,
fieldset[disabled] .login-button.active {
  background-color: #E45E5B;
  border-color: #E45E5B;
}

.login-button .badge {
  color: #E45E5B;
  background-color: #ffffff;
}

.publish-button {
  color: #ffffff;
  background-color: #5ECDE6;
  border-color: #5ECDE6;
}

.publish-button:hover,
.publish-button:focus,
.publish-button:active,
.publish-button.active,
.open .dropdown-toggle.publish-button {
  color: #ffffff;
  background-color: #54B6CC;
  border-color: #5ECDE6;
}

.publish-button:active,
.publish-button.active,
.open .dropdown-toggle.publish-button {
  background-image: none;
}

.publish-button.disabled,
.publish-button[disabled],
fieldset[disabled] .publish-button,
.publish-button.disabled:hover,
.publish-button[disabled]:hover,
fieldset[disabled] .publish-button:hover,
.publish-button.disabled:focus,
.publish-button[disabled]:focus,
fieldset[disabled] .publish-button:focus,
.publish-button.disabled:active,
.publish-button[disabled]:active,
fieldset[disabled] .publish-button:active,
.publish-button.disabled.active,
.publish-button[disabled].active,
fieldset[disabled] .publish-button.active {
  background-color: #5ECDE6;
  border-color: #5ECDE6;
}

.publish-button .badge {
  color: #5ECDE6;
  background-color: #ffffff;
}
</style>
