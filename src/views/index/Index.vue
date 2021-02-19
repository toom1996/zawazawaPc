<template>
  <div class="container">
    <div class="row">
      <!-- Main Content -->
      <div class="col col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
        <div class="zawazawa-center-block mb-1">
          <div class="ui-block">
            <div class="post-block mb-4">
              <div class="post__author inline-items text-left mb-2">
                <img
                  class="mr-2"
                  src="http://v.bootstrapmb.com/2019/6/mmjod5239/img/avatar7-sm.jpg"
                  alt="author"
                />
                <div class="post__author">
                  <a class="post__author-name" href="#">Elaine Dreyfuss</a>
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
              <div class="post-attachment-block">
                <img
                  class="mr-2"
                  src="http://toomhub.image.23cm.cn/14993df391fc3c455040e5978e8f85b8.jpg"
                  alt="author"
                />
                <img
                  class="mr-2"
                  src="http://toomhub.image.23cm.cn/tmp_fd0a16ca8e2d7203d215d1e43d4acd52ecd0fd31ba1b8ead.jpg"
                  alt="author"
                />
                <img
                  class="mr-2"
                  src="http://toomhub.image.23cm.cn/tmp_c9566ac6e863b86fed927e92c480ca1c41b4219d57e9a48a.gif"
                  alt="author"
                />
              </div>
              <div class="control-block-button post-control-button">
                <a
                  v-b-popover.hover="popoverConfig"
                  variant="primary"
                  href="#"
                  class="btn btn-control mb-1"
                  ><i class="fa fa-heart"></i
                  ><span
                    class="control-block-like-count badge-dark"
                    style="bottom: 0px; right: -0.3rem"
                    >10+</span
                  ></a
                ><a href="#" class="btn btn-control mb-1"
                  ><i class="fa fa-comment"></i></a
                ><a href="#" class="btn btn-control"
                  ><i class="fa fa-heart"></i
                ></a>
              </div>
            </div>
            <div class="post-block mb-1">
              <div class="post__author inline-items text-left mb-2">
                <img
                  class="mr-2"
                  src="http://v.bootstrapmb.com/2019/6/mmjod5239/img/avatar7-sm.jpg"
                  alt="author"
                />
                <div class="post__author">
                  <a class="post__author-name" href="#">Elaine Dreyfuss</a>
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
                  ><i class="fa fa-heart"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="zawazawa-publish-modal" @shown="focusPublishEditorHandle">
      <div class="zawazawa-publish-container-block">
        <div class="row">
          <div class="col-md-2">
            <b-avatar icon="plus"></b-avatar>
          </div>
          <div class="col-md-10">
            <span
              v-show="publish.zawazawaContent === ''"
              class="publish-editor-placeholder"
              >说点什么吧</span
            >
            <div
              ref="textarea"
              id="textarea"
              class="publish-editor__textarea"
              contenteditable="true"
              @input="changeText"
            >
              <span contenteditable="true"></span>

            </div>
            <!-- <b-form-input ref="focusThis"></b-form-input>
            <publish-editor :content="publish.zawazawaContent" @publishContent="changePublishContentHandle" v-model="publish.zawazawaContent"></publish-editor> -->
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-10">
            <div
              contenteditable="false"
            >
              <span contenteditable="false"><img
                  class="mr-2"
                  src="https://www.baidu.com/img/flexible/logo/pc/result.png"
                  alt="author"
                /><b-button class="float-right" pill variant="primary" @click="test()"> OK </b-button></span>
            </div>
            <!-- <b-form-input ref="focusThis"></b-form-input>
            <publish-editor :content="publish.zawazawaContent" @publishContent="changePublishContentHandle" v-model="publish.zawazawaContent"></publish-editor> -->
          </div>
        </div>
      </div>
      <template #modal-footer="{ ok, cancel, hide }">
        <div class="row" style="display:contents">
          <div class="col-md-2">
          </div>
          <div class="col-md-10">
            <a v-b-tooltip.hover.top="'上传图片'" class="m-2" href="javascript:void(0);"><b-icon icon="images" scale="1.5" shift-v="1.5" aria-hidden="true"></b-icon></a>
            <b-button class="float-right" pill variant="primary" @click="test()"> OK </b-button>
          </div>
        </div>
      </template>
    </b-modal>
    <div class="float-button">
      <a href="javascript:void(0);" v-b-modal.zawazawa-publish-modal
        ><b-avatar icon="plus" v-b-tooltip.hover.top="'发!'"></b-avatar
      ></a>
    </div>
  </div>
</template>
<script>
import { getGithubAOuthInfo } from '@/api/user.js'
import { sessionData } from '@/utils/common.js'
import avatarGroup from '@/components/common/AvatarGroup'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'avatar-group': avatarGroup
  },
  data: function () {
    return {
      publish: {
        zawazawaContent: ''
      }
    }
  },
  methods: {
    changeText (e) {
      console.log(e)
      this.publish.zawazawaContent = e.target.innerText
      const ele = document.getElementById('textarea')
      ele.value = this.publish.zawazawaContent
    },
    focusPublishEditorHandle () {
      const ele = document.getElementById('textarea')
      ele.addEventListener('paste', function (e) {
        console.log(e)
        if (e.clipboardData) {
          // 阻止默认行为
          e.preventDefault()
          var clipboardData = e.clipboardData
          // 获取剪贴板的文本
          var text = clipboardData.getData('text')
          // console.log(text)
          // if (window.getSelection && text !== '' && text !== null) {
          // 为input添加监听事件方便对剪贴板内容进行二次修改

          // 使用ClipboardApi来设置剪贴板里的内容
          // 参考张鑫旭的博客， 需要的文末有地址
          // var clipboardData = e.clipboardData || window.clipboardData
          if (!clipboardData) {
            return
          }
          // var text = window.getSelection().toString()
          console.log(text)
          if (text) {
            clipboardData.setData('text/plain', 'ddddd')
          }
          clipboardData.setData('text/plain', 'ddddd')
          // 执行复制操作
          if (document.execCommand('copy')) {
            console.log('复制成功')
          } else {
            console.log('复制失败')
          }
          // return false
          // var range2 = document.createRange()
          // range2.setStart(ele, 0)
          // range2.setEnd(ele, 0)
          // // 创建文本节点
          // var textNode = document.createTextNode(text)
          // // 在当前的光标处插入文本节点
          // var range = window.getSelection().getRangeAt(0)

          // // 插入文本
          // range.insertNode(textNode)

          // range.removeAllRanges()
          // 删除选中文本
          // range.deleteContents()
          // }
          // return false
        }
      })
      if (this.publish.zawazawaContent !== '') {
        ele.innerText = this.publish.zawazawaContent
      } else {
        this.$refs.textarea.focus()
      }
    },
    test () {
      console.log(this.publish.zawazawaContent)
    }
  },
  created () {
    // 是否存在登陆信息
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
        html: false,
        content: () => {
          const count = 5
          return <avatar-group text={count}></avatar-group>
          // Note this is called only when the popover is opened
          // return 'The date is:<br><em>' + new Date() + '</em>'
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
.inline-items > * {
  display: inline-block;
  vertical-align: middle;
}
.post__author-name {
  text-decoration: none;
  color: #515365;
  font-size: 0.875rem;
  font-weight: 700;
}
.post__author-block {
  line-height: 0.7;
}
.post__author-date {
  color: #888da8;
  font-size: 0.875rem;
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

.post-add-icon svg,
.post-add-icon img {
  margin-right: 8px;
  width: 20px;
  height: 18px;
}

.friends-harmonic li {
  float: left;
}

.post-bottom-block > * {
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
  bottom: 0.5rem;
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
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  box-shadow 0.15s ease-in-out;
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
  padding: 0.25em;
  line-height: 1;
  border-radius: 10em;
  font-size: 70%;
  font-weight: 700;
  z-index: 1;
}
.float-button {
  position: fixed;
  bottom: 5rem;
  right: 1rem;
}
.publish-editor__textarea {
  box-shadow: none;
  outline: none;
  border: none;
  min-height: 1rem;
}
.publish-editor-placeholder {
  position: absolute;
}
</style>
