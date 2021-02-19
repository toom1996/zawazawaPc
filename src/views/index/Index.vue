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
    <b-modal
      size="lg"
      id="zawazawa-publish-modal"
      @shown="focusPublishEditorHandle"
    >
      <div class="zawazawa-publish-container-block">
        <div class="row">
          <div class="col-md-2">
            <b-avatar icon="plus"></b-avatar>
          </div>
          <div class="col-md-10">
            <p
              v-show="publish.zawazawaContent === ''"
              class="publish-editor-placeholder text-black-50"
            >
              说点什么吧...
            </p>
            <div
              ref="textarea"
              id="textarea"
              class="publish-editor__textarea"
              contenteditable="true"
              @input="changeText"
            >
              <span contenteditable="true"></span>
            </div>
            <div contenteditable="false">
              <span style="pointer-events: none" contenteditable="false">
                <div class="publish-editor-image-block">
                  <div class="row">
                    <div
                      class="col-sm-6"
                      style="
                        background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161226%2F67eb3c852f6943cebb3f6cd12e32c38c_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615132692&t=0b863e6405908770d7bad1587172a92b);
                        background-size: cover;
                        height: 20rem;
                        background-clip: content-box;
                      "
                    >
                      <!-- <b-img
                        class="mr-2"
                        rounded
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161226%2F67eb3c852f6943cebb3f6cd12e32c38c_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615132692&t=0b863e6405908770d7bad1587172a92b"
                        alt="author"
                      /> -->
                    </div>
                    <div
                      class="col-sm-6"
                      style="
                        background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161226%2F67eb3c852f6943cebb3f6cd12e32c38c_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615132692&t=0b863e6405908770d7bad1587172a92b);
                        background-size: cover;
                        height: 20rem;
                        background-clip: content-box;
                      "
                    >
                      <!-- <b-img
                        class="mr-2"
                        rounded
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161226%2F67eb3c852f6943cebb3f6cd12e32c38c_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615132692&t=0b863e6405908770d7bad1587172a92b"
                        alt="author"
                      /> -->
                    </div>
                  </div>

                  <!-- <b-img
                    class="mr-2"
                    rounded
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Fmw690%2F002pzDKdly1gm6si0ihr4j60ku6bdnpe02.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615172020&t=9fb5973edbec5f980a8193a92e11590a"
                    alt="author"
                  /> -->
                </div>
              </span>
            </div>

            <!-- <b-form-input ref="focusThis"></b-form-input>
            <publish-editor :content="publish.zawazawaContent" @publishContent="changePublishContentHandle" v-model="publish.zawazawaContent"></publish-editor> -->
          </div>
        </div>
      </div>
      <template #modal-footer="{ ok, cancel, hide }">
        <div class="row" style="display: contents">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <a
              @click="openFileModal"
              v-b-tooltip.hover.top="'上传图片'"
              class="m-2"
              href="javascript:void(0);"
              ><b-icon
                icon="images"
                scale="1.5"
                shift-v="1.5"
                aria-hidden="true"
              ></b-icon
              ><b-form-file
                multiple
                id="file"
                v-model="file"
                class="mt-3"
                plain
              ></b-form-file>
            </a>
            {{ publish.zawazawaContentLength }}
            <b-button
              class="float-right"
              pill
              variant="primary"
              @click="test()"
            >
              OK
            </b-button>
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
import { getGithubAOuthInfo } from "@/api/user.js";
import { sessionData } from "@/utils/common.js";
import avatarGroup from "@/components/common/AvatarGroup";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    "avatar-group": avatarGroup,
  },
  data: function () {
    return {
      publish: {
        zawazawaContent: "",
        zawazawaContentLength: 0,
      },
      file: [], //上传文件对象
    };
  },
  methods: {
    openFileModal() {
      document.getElementById("file").click();
    },
    //获得输入框中字符长度
    getLength(val) {
      let emoji_exp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;

      function estring(str) {
        const ms = [...str.matchAll(emoji_exp)];
        if (!ms || !ms.length) return str.length;

        let emojiSize = 0;
        for (const m of ms) emojiSize += m.length - 1;
        return str.length - emojiSize;
      }

      return estring(val); // 4
    },
    changeText(e) {
      console.log(e);
      this.publish.zawazawaContent = e.target.innerText;
      this.publish.zawazawaContentLength = this.getLength(e.target.innerText);
    },
    insertAtCursor(jsDom, html) {
      console.log(1111111)
      
      if (jsDom != document.activeElement) {
        console.log(2222)
        // 如果dom没有获取到焦点，追加
        jsDom.innerHTML = jsDom.innerHTML + html;
        return;
      }
      var sel, range;
      if (window.getSelection) {
        // IE9 或 非IE浏览器
        // debugger;
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          range = sel.getRangeAt(0);
          range.deleteContents();
          // Range.createContextualFragment() would be useful here but is
          // non-standard and not supported in all browsers (IE9, for one)
          var el = document.createElement("div");
          el.innerHTML = html;
          var frag = document.createDocumentFragment(),
            node,
            lastNode;
          while ((node = el.firstChild)) {
            lastNode = frag.appendChild(node);
          }
          range.insertNode(frag);
          // Preserve the selection
          if (lastNode) {
            range = range.cloneRange();
            range.setStartAfter(lastNode);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }
      } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
      }
    },
    focusPublishEditorHandle() {
      const ele = document.getElementById("textarea");
      ele.addEventListener("paste",  (e) => {
        if (e.clipboardData) {
          var text = e.clipboardData.getData('text')
          //取消浏览器的默认动作，一般一定要有，请谨慎使用
          e.preventDefault();
          console.log(e.clipboardData.getData('text'))
          this.insertAtCursor(ele, text);
          return false;
        }
      });
      if (this.publish.zawazawaContent !== "") {
        ele.innerText = this.publish.zawazawaContent;
      } else {
        this.$refs.textarea.focus();
      }
    },
    test() {
      console.log(this.file);
    },
  },
  created() {
    const queryParam = this.$route.query;
    const loginState = sessionData("get", "login");

    if (loginState === "true") {
      this.$store.commit("setIsLoginingHandle", true);
      sessionData("clean", "login");
      getGithubAOuthInfo(queryParam)
        .then((res) => {
          console.log(res);
          this.$store.commit("setuserInfo", res.data);
          this.$store.commit("setIsLoginingHandle", false);
        })
        .catch(() => {
          this.$store.commit("setIsLoginingHandle", false);
        });
    }
  },
  computed: {
    popoverConfig() {
      // Both title and content specified as a function in this example
      // and will be called the each time the popover is opened
      return {
        html: false,
        content: () => {
          const count = 5;
          return <avatar-group text={count}></avatar-group>;
          // Note this is called only when the popover is opened
          // return 'The date is:<br><em>' + new Date() + '</em>'
        },
      };
    },
  },
};
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
