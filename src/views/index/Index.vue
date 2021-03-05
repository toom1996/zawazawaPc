<template>
  <div class="container">
    <Notify text='点我下载APP' />
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
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3368953305,3282153653&fm=26&gp=0.jpg"
                  alt="author"
                />
                <img
                  class="mr-2"
                  src="https://mmbiz.qpic.cn/mmbiz_gif/ZK1xPdHuks9bGV9mjWhgNTm1fQK0mEVEicUYPtFux5AWonf0ur6EpoibS1qmRFC5tAicufZ31iafdZthicD7Xiakd3tg/640?wx_fmt=gif"
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
    <b-modal
      size="lg"
      id="zawazawa-publish-modal"
      @shown="focusPublishEditorHandle"
      @show="publishEditorModalShow"
      :no-close-on-backdrop="isPublishing"
    >
      <div class="zawazawa-publish-container-block">
        <div class="row">
          <div class="col-md-2">
            <b-avatar variant="primary" badge-variant="danger" size="lg" :src="this.$store.state.zUser.avatar"></b-avatar>
          </div>
          <div class="col-md-10">
            <p
              v-show="publish.zawazawaContent.length === 0"
              class="publish-editor-placeholder text-black-50"
            >
              说点什么吧...
            </p>
            <div
              ref="textarea"
              id="textarea"
              class="publish-editor__textarea"
              contenteditable="plaintext-only"
              @input="changeText"
              @paste="changeText"
              οndragstart="return false"
            >
              <span contenteditable="true"></span>
            </div>
            <div contenteditable="false">
              <div class="publish-editor-image-block">
                <image-block
                  :images="publish.zawazawaContentImage"
                  :remove="true"
                ></image-block>
                <!-- 图片 -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <template #modal-footer="{ ok, cancel, hide }">
        <div class="row" style="display: contents">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <b-button
              @click="openFileModal"
              v-b-tooltip.hover.top="'上传图片'"
              size="sm"
              variant="primary"
            >
              <b-icon
                icon="images"
                scale="1.5"
                shift-v="1.5"
                aria-hidden="true"
              ></b-icon>
            </b-button>
            <input
              v-show="false"
              id="file"
              type="file"
              class="upload"
              @change="addImg"
              ref="inputer"
              multiple
              accept="image/png,image/jpeg,image/gif,image/jpg"
            />
            <b-overlay
              :show="isPublishing"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="primary"
              class="d-inline-block float-right"
            >
              <b-button
                pill
                variant="primary"
                @click="published()"
                :disabled="isPublishing"
              >
                发布
              </b-button>
            </b-overlay>
            {{ publish.zawazawaContentLength }} / 255
          </div>
        </div>
      </template>
    </b-modal>
    <div class="float-button" v-show="false">
      <a href="javascript:void(0);" id="float-publish" @click="showPublishModal"
        ><b-avatar icon="plus" v-b-tooltip.hover.top="'发!'"></b-avatar
      ></a>
    </div>
    <b-toast id="uploading-toast" variant="info" solid :no-auto-hide="true">
      <p class="text-left mb-0">
        <span aria-hidden="true" class="spinner-grow spinner-grow-sm"
          ></span
        >
        {{ this.uploadProcessingMessage }}
      </p>
    </b-toast>
  </div>
</template>
<script>
import { getQiniuToken } from '@/api/user.js'
import { publishPost } from '@/api/post.js'
import axios from 'axios'
import avatarGroup from '@/components/common/AvatarGroup'
import imageBlock from '@/components/common/ImageBlock'
import HttpCode from '@/utils/code.js'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'avatar-group': avatarGroup,
    'image-block': imageBlock
  },
  data: function () {
    return {
      publish: {
        zawazawaContent: '', // 发布的内容
        zawazawaContentLength: 0, // 发布内容的长度
        zawazawaContentImage: [] // 发布的图片
      },
      data: {
        content: '', // 内容
        attach: [] // 附件
      },
      isPublishing: false, // 是否为发布中状态
      uploadProcessingMessage: '' // 发布中状态toast提示信息
    }
  },
  methods: {
    // 发布新内容
    published () {
      console.log(this.publish.zawazawaContentImage)
      this.$bvToast.show('uploading-toast')
      this.isPublishing = true
      const url = 'http://up-z1.qiniup.com/'

      this.uploadProcessingMessage = '正在申请token'
      // 申请七牛云上传token
      getQiniuToken().then((e) => {
        if (e.code === HttpCode.SUCCESS) {
          const fileObj = this.publish.zawazawaContentImage
          const uploadLength = fileObj.length
          const totalProcess = uploadLength
          const uploadProcess = []
          let isComplete = false
          for (let i = 0; i < uploadLength; i++) {
          // 文件名
            const timeStamp = new Date().getTime()
            const key = fileObj[i].file.name + '_' + timeStamp + '_' + Math.random(100000, 999999)

            // withCredentials 禁止携带cookie，带cookie在七牛上有可能出现跨域问题
            const axiosInstance = axios.create({ withCredentials: false })

            const data = new FormData()
            data.append('token', e.data) // 七牛需要的token，叫后台给，是七牛账号密码等组成的hash
            data.append('key', key)
            data.append('file', fileObj[i].file)
            axiosInstance({
              method: 'POST',
              url: url, // 上传地址
              data: data,
              timeout: 30000, // 超时时间，因为图片上传有可能需要很久
              onUploadProgress: (progressEvent) => {
                uploadProcess[i] = Math.round(progressEvent.loaded * 100 / progressEvent.total)
                let t = 0
                uploadProcess.forEach((e) => {
                  t += e
                })
                const process = Math.round(t / totalProcess)
                console.log(process)
                if (process === 100) {
                  isComplete = true
                }
                this.uploadProcessingMessage = '正在上传图片' + Math.round(t / totalProcess) + '%'
              }
            }).then(data => {
              console.log('---------------i--->', i)
              console.log('------------------>', data.data)
              console.log('this.data.attach', this.data.attach)
              if (typeof this.data.attach === 'string') {
                this.data.attach = JSON.parse(this.data.attach)
              }
              this.data.attach[i] = data.data
              // 如果全部上传完成, 隐藏上传toast
              if (isComplete === true && this.data.attach.length === uploadLength) {
                console.log('完成了啊------------------------------------》')
                this.data.attach = JSON.stringify(this.data.attach)
                this.data.content = this.publish.zawazawaContent
                publishPost(this.data).then((e) => {
                  console.log(e)
                  this.$bvToast.hide('uploading-toast')
                  this.isPublishing = false
                  // TODO 关闭modal
                  this.$bvModal.hide('zawazawa-publish-modal')
                  // toast 发布成功
                  this.$bvToast.toast('发布成功', {
                    autoHideDelay: 2000,
                    solid: true,
                    variant: 'success'
                  })
                })
              }
            // document.getElementById('uploadFileInput').value = '' // 上传成功，把input的value设置为空，不然 无法两次选择同一张图片
            // 上传成功...  (登录七牛账号，找到七牛给你的 URL地址) 和 data里面的key 拼接成图片下载地址
            }).catch(function (err) {
              console.log(err)
            // 上传失败
            })
          }
        }
      })
    },

    // 显示发布modal
    showPublishModal () {
      if (!this.$store.state.isLogin) {
        this.$toast('请先登陆~')
        return false
      }
      this.$bvModal.show('zawazawa-publish-modal')
    },

    addImg (e) {
      console.log(e)
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i]
        if (this.publish.zawazawaContentImage.length > 3) {
          this.$toast('最多只能上传4张图片', {
            autoHideDelay: 2000,
            variant: 'warning',
            appendToast: false
          })
          return false
        }
        // 上传大小限制 10M
        if (file.size >= 10485760) {
          this.$toast('请选择10M以内的图片！')
          return false
        }
        this.publish.zawazawaContentImage.push({
          source: URL.createObjectURL(file),
          file: file
        })
      }
    },

    // 打开上传图片按钮
    openFileModal () {
      document.getElementById('file').click()
    },

    // 获得输入框中字符长度
    getLength (val) {
      const emojiExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g

      function estring (str) {
        const ms = [...str.matchAll(emojiExp)]
        if (!ms || !ms.length) return str.length

        let emojiSize = 0
        for (const m of ms) emojiSize += m.length - 1
        return str.length - emojiSize
      }
      // 如果最后一个字符串是换行符就去掉
      if (val.charAt(val.length - 1, 1) === '\n') {
        val = val.slice(0, val.length - 1)
      }
      return estring(val) // 4
    },

    // 内容改变事件
    changeText (e) {
      console.log(e)
      if (e.type === 'input') {
        if (e.inputType === 'insertFromDrop') {
          console.log('dd')
          // e.preventDefault()
        } else if (e.inputType === 'deleteContentBackward') {
          if (e.target.innerText === '\n') {
            e.target.innerText = ''
          }
        }
      } else if (e.type === 'paste') {
        if (e.clipboardData) {
          var text = e.clipboardData.getData('text')
          // 取消浏览器的默认动作，一般一定要有，请谨慎使用
          e.preventDefault()
          console.log(e.clipboardData.getData('text'))
          this.insertAtCursor(text)
        }
      }
      console.log(e.target.innerText)
      this.publish.zawazawaContent = e.target.innerText
      this.publish.zawazawaContentLength = this.getLength(e.target.innerText)
    },

    // 游标粘贴
    insertAtCursor (content) {
      var sel, range
      if (window.getSelection) {
        // IE9 或 非IE浏览器
        // debugger;
        sel = window.getSelection()
        if (sel.getRangeAt && sel.rangeCount) {
          range = sel.getRangeAt(0)
          range.deleteContents()
          // Range.createContextualFragment() would be useful here but is
          // non-standard and not supported in all browsers (IE9, for one)
          var el = document.createElement('div')
          el.innerHTML = content
          var frag = document.createDocumentFragment()
          var node
          var lastNode
          while ((node = el.firstChild)) {
            lastNode = frag.appendChild(node)
          }
          range.insertNode(frag)
          // Preserve the selection
          if (lastNode) {
            range = range.cloneRange()
            range.setStartAfter(lastNode)
            range.collapse(true)
            sel.removeAllRanges()
            sel.addRange(range)
          }
        }
      }
    },

    // modal触发焦点
    focusPublishEditorHandle () {
      // TODO: 登陆权限的验证

      const ele = document.getElementById('textarea')
      if (this.publish.zawazawaContent !== '') {
        ele.innerText = this.publish.zawazawaContent
      } else {
        this.$refs.textarea.focus()
      }
    },

    publishEditorModalShow () {
      if (!this.$store.state.isLogin) {
        this.$bvToast.toast('请先登录', {
          autoHideDelay: 2000,
          solid: true,
          variant: 'warning'
        })
        return false
      }
      console.log(this.$store.state.isLogin)
    },

    test (i) {
      this.publish.zawazawaContentImage.splice(i, 1) // 结果arr=['a','c','d']（下标1开始，删除1个）
    }
  },
  created () {},
  computed: {
    test1 () {
      console.log(this.publishProcessing)
      return this.uploadProcessing
    },
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
.container {
  padding-top: 6rem
}
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
  min-height: 8rem;
}
.publish-editor-placeholder {
  position: absolute;
  /** 点击穿透 */
  pointer-events: none;
}
.login-wrapper {
  background-color: white;
  border: 1px solid #e6ecf5;
  position: relative;
  border-radius: 10px;
}
.l-login-header {
  font-size: 16px;
  line-height: 1;
  color: #252526;
  margin-bottom: 20px;
}
.auth-block {
  cursor: pointer;
}
/deep/ .modal-content {
  border-radius: 2.3rem;
}
</style>
