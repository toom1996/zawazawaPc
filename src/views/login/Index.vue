<template>
  <div>
    <div class="auth-fluid">
      <div
        class="auth-fluid-form-box"
        style="/* float: right; */ /* left: 127px; */ /* right: 0px; */"
      >
        <div class="align-items-center d-flex h-100">
          <div class="card-body">
            <div class="auth-brand text-center text-lg-left">
              <a href="index.html">
                <span
                  ><img src="assets/images/logo-light.png" alt="" height="18"
                /></span>
              </a>
            </div>

            <h4 class="mt-0">欢迎光临!^_^</h4>

            <div class="form-group">
              <b-form-input
                class="mb-2"
                id="input-1"
                type="email"
                v-model="login.mobile"
                :state="checkMobile"
                :disabled="isSendSms"
                trim
                placeholder="手机号"
                aria-describedby="input-live-help input-live-feedback"
                required
              ></b-form-input>
              <b-form-invalid-feedback id="input-live-feedback">
                请输入正确的手机号码
              </b-form-invalid-feedback>
            </div>
            <div class="form-group">
              <b-input-group class="mb-3">
                <b-form-input
                  placeholder="短信验证码"
                  v-model="login.code"
                ></b-form-input>
                <b-input-group-append>
                  <b-button
                    @click="smsSendHandle()"
                    size="sm"
                    text="Button"
                    variant="success"
                    :disabled="isSendSms"
                    aria-autocomplete="off"
                    >发送验证码
                    {{ smsTimer == 0 ? "" : "(" + smsTimer + ")" }}</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </div>
            <div class="form-group mb-0 text-center">
              <b-overlay :show="this.$store.state.isLogining" rounded opacity="0.6"
              ><b-button block variant="primary" @click="registerHandle()"
                >登陆</b-button
              ></b-overlay
            >
            </div>

            <div class="text-center mt-4">
              <p class="text-muted font-16">Sign in with</p>
              <ul class="social-list list-inline mt-3">
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="social-list-item border-primary text-primary"
                    ><i class="mdi mdi-facebook"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="social-list-item border-danger text-danger"
                    ><i class="mdi mdi-google"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="social-list-item border-info text-info"
                    ><i class="mdi mdi-twitter"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="social-list-item border-secondary text-secondary"
                    ><i class="mdi mdi-github-circle"></i
                  ></a>
                </li>
              </ul>
            </div>

            <footer class="footer footer-alt">
              <p class="text-muted">
                Don't have an account?
                <a href="pages-register-2.html" class="text-muted ml-1"
                  ><b>Sign Up</b></a
                >
              </p>
            </footer>
          </div>
        </div>
      </div>
      <div class="auth-fluid-right text-center">
        <div class="auth-user-testimonial">
          <h2 class="mb-3">WDNMD!</h2>
          <p class="lead">
            <i class="mdi mdi-format-quote-open"></i> It's a elegent templete. I
            love it very much! . <i class="mdi mdi-format-quote-close"></i>
          </p>
          <p>- Hyper Admin User</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { validateMobile } from '@/utils/common.js'
import { smsSend, register } from '@/api/user.js'
export default {
  mounted () {
    // 如果已经登陆过的用户, 访问此页面将会返回首页
    if (this.$store.state.isLogin === true) {
      this.$router.push({ path: '/' })
    }
  },
  data () {
    return {
      login: {
        mobile: '',
        code: ''
      },
      smsTimer: 0, // 短信验证码计时器
      isSendSms: false // 发送短信按钮禁止状态
    }
  },
  methods: {
    // 发送短信处理函数
    smsSendHandle () {
      // 验证是否填写了手机号码
      if (!validateMobile(this.login.mobile)) {
        this.$toast('请输入正确的手机号码')
        return false
      }

      this.smsTimer = 10
      this.isSendSms = true
      // if (this.login.mobile)
      this.timerHandle = setInterval(() => {
        this.smsTimer--
        if (this.smsTimer === 0) {
          this.isSendSms = false
          this.smsTimer = 0
          clearInterval(this.timerHandle)
        }
      }, 1000)
      smsSend({
        mobile: this.login.mobile
      }).then((e) => {
        if (e.code === this.code.SUCCESS) {
          this.$toast(e.msg)
        }
      })
    },
    // 登陆处理函数
    registerHandle () {
      if (!validateMobile(this.login.mobile)) {
        this.$toast('请输入正确的手机号码')
        return false
      }

      if (this.login.code === '' || this.login.code.length < 6) {
        this.$toast('请填写正确的6位数验证码')
        return false
      }

      this.$store.commit('setIsLoginingHandle', true)
      register(this.login).then((res) => {
        if (res.code === this.code.SUCCESS) {
          this.$store.commit('setuserInfo', res.data)
          this.$router.push({ path: '/' })
        }
        this.$store.commit('setIsLoginingHandle', false)
      }).catch((e) => {
        this.$store.commit('setIsLoginingHandle', false)
      })
    }
  },
  computed: {
    // 检查是否是正确的手机号码
    checkMobile () {
      if (this.login.mobile === '') {
        return null
      }
      return validateMobile(this.login.mobile)
    }
  }
}
</script>
<style>
.auth-fluid {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 100vh;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  background: url(../../static/bg-auth.jpg) center;
  background-size: cover;
}
.auth-fluid .auth-fluid-form-box {
  max-width: 480px;
  border-radius: 0;
  z-index: 2;
  padding: 3rem 2rem;
  background-color: #fff;
  position: relative;
  width: 100%;
}
.auth-fluid .auth-fluid-form-box {
  max-width: 480px;
  border-radius: 0;
  z-index: 2;
  padding: 3rem 2rem;
  background-color: #fff;
  position: relative;
  width: 100%;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}
.auth-user-testimonial {
  position: absolute;
  margin: 0 auto;
  padding: 0 1.75rem;
  bottom: 3rem;
  left: 0;
  right: 0;
}
.auth-fluid .auth-fluid-right {
  padding: 6rem 3rem;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
