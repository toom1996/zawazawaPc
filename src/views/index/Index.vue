<template>
  <div class="container">
    <div class="row">
      <!-- Main Content -->
      <div
        class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12"
      >
      <div class="zawazawa-center-block mb-1">
        <div
            class="ui-block"
          >
            <div class="post-block mb-4">
              <div class="post__author inline-items text-left mb-2">
                <img class="mr-2" src="http://v.bootstrapmb.com/2019/6/mmjod5239/img/avatar7-sm.jpg" alt="author" />
                <div class="post__author">
                  <a class="post__author-name" href="#"
                    >Elaine Dreyfuss</a
                  >
                  <div class="post__author-block">
                    <span class="post__author-date" datetime="2004-07-24T18:18">
                      9 hours ago</span
                    >
                  </div>
                </div>
              </div>
              <p class="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                consequat.
              </p>
              <div class="control-block-button post-control-button">
                <a v-b-popover.hover="popoverConfig" variant="primary" href="#" class="btn btn-control mb-1"
                  ><i class="fa fa-heart"></i><span class="control-block-like-count badge-dark" style="bottom: 0px; right: -0.3rem;">999+</span></a
                ><a href="#" class="btn btn-control mb-1"
                  ><i class="fa fa-comment"></i></a
                ><a href="#" class="btn btn-control"
                  ><i class="fa fa-heart"></i></a>
              </div>
            </div>
            <div class="post-block mb-1">
              <div class="post__author inline-items text-left mb-2">
                <img class="mr-2" src="http://v.bootstrapmb.com/2019/6/mmjod5239/img/avatar7-sm.jpg" alt="author" />
                <div class="post__author">
                  <a class="post__author-name" href="#"
                    >Elaine Dreyfuss</a
                  >
                  <div class="post__author-block">
                    <span class="post__author-date" datetime="2004-07-24T18:18">
                      9 hours ago</span
                    >
                  </div>
                </div>
              </div>
              <p class="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                consequat.
              </p>
              <div class="control-block-button post-control-button">
                <a href="#" class="btn btn-control"
                  ><i class="fa fa-heart"></i></a
                ><a href="#" class="btn btn-control"
                  ><i class="fa fa-comment"></i></a
                ><a href="#" class="btn btn-control"
                  ><i class="fa fa-heart"></i></a>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { getGithubAOuthInfo } from '@/api/user.js'
import { sessionData } from '@/utils/common.js'
export default {
  created () {
    const queryParam = this.$route.query
    const loginState = sessionData('get', 'login')

    if (loginState === 'true') {
      this.$store.commit('setIsLoginingHandle', true)
      sessionData('clean', 'login')
      getGithubAOuthInfo(queryParam)
        .then((res) => {
          console.log(res)
          this.$store.commit('setuserInfo', res.data)
          this.$store.commit('setIsLoginingHandle', false)
        })
        .catch(() => {
          this.$store.commit('setIsLoginingHandle', false)
        })
    }
  },
  computed: {
    popoverConfig () {
      // Both title and content specified as a function in this example
      // and will be called the each time the popover is opened
      return {
        html: true,
        content: () => {
          // Note this is called only when the popover is opened
          return 'The date is:<br><em>' + new Date() + '</em>'
        }
      }
    }
  }
}
</script>
<style scoped>
.zawazawa-center-block {
  border-radius: 5px;
}
.post-block {
  background-color: white;
  border: 1px solid #e6ecf5;
  position: relative;
  padding: 25px;
  border-radius: 10px;
}
.post__author img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
}
.inline-items >* {
  display: inline-block;
  vertical-align: middle;
}
.post__author-name {
  text-decoration: none;
  color: #515365;
  font-size: .875rem;
  font-weight: 700;
}
.post__author-block {
  line-height: 0.7;
}
.post__author-date {
  color: #888da8;
  font-size: .875rem;
}

.post-bottom-block {
  padding: 20px 0 0;
  border-top: 1px solid #e6ecf5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.post-add-icon svg, .post-add-icon img {
    margin-right: 8px;
    width: 20px;
    height: 18px;
}

.friends-harmonic li {
    float: left;
}

.post-bottom-block >* {
    margin-right: 15px;
}
.friends-harmonic {
    margin-bottom: 0;
    overflow: hidden;
}

.friends-harmonic li:first-child a {
    margin-left: 0;
}
.friends-harmonic a {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    overflow: hidden;
    border: 2px solid #fff;
    display: block;
    margin-left: -12px;
}
img {
    vertical-align: unset;
    max-width: 100%;
    height: auto;
    display: inline-block;
}
ul {
    list-style: none;
    padding: 0;
}
.post-block .control-block-button {
    top: 0.5rem;
    right: -2.4rem;
}

.post-block .control-block-button {
    position: absolute;
}
.post-control-button .btn-control {
    display: block;
    margin-bottom: 6px;
    margin-right: 0;
    background-color: #9a9fbf;
    width: 34px;
    height: 34px;
    line-height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    font-size: inherit;
    font-weight: 400;
    line-height: 1;
    max-width: 100%;
    max-height: auto;
    text-align: center;
    overflow: visible;
    position: relative;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.control-block-button .btn-control {
    margin-right: 20px;
    margin-bottom: 0;
    fill: #fff;
}
.btn-control {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    line-height: 54px;
    padding: 0;
    fill: #fff;
    font-size: 20px;
}

.post-control-button .btn-control {
    display: block;
    margin-bottom: 6px;
    margin-right: 0;
    background-color: #9a9fbf;
    width: 34px;
    height: 34px;
    line-height: 36px;
}

.post-block .btn {
    margin-bottom: 25px;
}
.control-block-button .btn-control {
    margin-right: 20px;
    margin-bottom: 0;
    fill: #fff;
}
.control-block-like-count {
  position: absolute;
  min-height: 1.5em;
  min-width: 1.5em;
  padding: .25em;
  line-height: 1;
  border-radius: 10em;
  font-size: 70%;
  font-weight: 700;
  z-index: 1;
}

</style>
