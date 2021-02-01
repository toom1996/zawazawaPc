<template>
    <div>
        sdfsdf
    </div>
</template>
<script>
import { getGithubAOuthInfo } from '@/api/user.js'
export default {
  created () {
    const queryParam = this.$route.query
    if (queryParam.code && queryParam.state) {
      this.$store.commit('setisLoginingHandle', true)
      console.log('222222')
      getGithubAOuthInfo(queryParam).then((res) => {
        console.log(res)
        this.$store.commit('setisLoginingHandle', false)
        this.$router.push('/')
      })
    }
  }
}
</script>
