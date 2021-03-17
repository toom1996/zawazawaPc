<template>
  <div class="about">
    <a href="https://github.com/login/oauth/authorize?client_id=ced388331bf999f80fa8&redirect_uri=http://localhost:8080/api/v1/user/github-callback">Github 第三方授权登录</a>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  created() {
    console.log('1111111np')
    axios.post("/login").then(response => {
        if (response.data) {
            console.log(response.data)
            alert(response.data.name)
        }
    })
  }
}
</script>