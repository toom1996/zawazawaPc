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
              @paste="changeText"
              οndragstart="return false"
            >
              <span contenteditable="true"></span>
            </div>
            <div contenteditable="false">
              <div class="publish-editor-image-block">
                <div class="m-0 row">
                  <div :class="getPic1Class()"> 
                    <div
                    class="publish-editor-image"
                    :style="{backgroundImage: 'url(' + (publish.zawazawaContentImage[0].source) + ')'}"
                  >
                    <b-iconstack font-scale="2" class="m-1 publish-editor-image-clear" @click="test(0)">
                      <b-icon
                        stacked
                        icon="circle-fill"
                        style="color: #190c06"
                      ></b-icon>
                      <b-icon stacked icon="x" style="color: #ffffff"></b-icon>
                    </b-iconstack>
                  </div>
                  
                  </div>
                  <div class="col-sm-6"> 
                    <div :class="getPic2Class()" v-if="publish.zawazawaContentImage.length >= 2"> 
                    <div
                    class="publish-editor-image"
                    :style="{backgroundImage: 'url(' + (publish.zawazawaContentImage[1].source) + ')'}"
                  >
                    <b-iconstack font-scale="2" class="m-1 publish-editor-image-clear" @click="test(1)">
                      <b-icon
                        stacked
                        icon="circle-fill"
                        style="color: #190c06"
                      ></b-icon>
                      <b-icon stacked icon="x" style="color: #ffffff"></b-icon>
                    </b-iconstack>
                  </div>
                  </div>
                <img
                  class="mr-2 col-sm-12"
                  src="http://toomhub.image.23cm.cn/tmp_c9566ac6e863b86fed927e92c480ca1c41b4219d57e9a48a.gif"
                  alt="author"
                />
                  </div>
                  <!-- 图片 -->
                  <div
                    v-for="(item, index) in publish.zawazawaContentImage" v-bind:key="index"
                    class="publish-editor-image"
                    :class="{'col-sm-12':publish.zawazawaContentImage.length === 1, 'col-sm-6':publish.zawazawaContentImage.length >= 2}"
                    :style="{backgroundImage: 'url(' + (item.source) + ')'}"
                  >
                    <b-iconstack font-scale="2" class="m-1 publish-editor-image-clear" @click="test(index)">
                      <b-icon
                        stacked
                        icon="circle-fill"
                        style="color: #190c06"
                      ></b-icon>
                      <b-icon stacked icon="x" style="color: #ffffff"></b-icon>
                    </b-iconstack>
                  </div>
                </div>
              </div>
            </div>
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
              ><input v-show="false" id="file" type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
            </a>
            <b-button
              class="float-right"
              pill
              variant="primary"
              @click="test()"
            >
              OK
            </b-button>
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
        zawazawaContent: '',
        zawazawaContentLength: 0,
        zawazawaContentImage: [
          {
            source:'data:image/jpeg;base64,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'
          },
          {
            source:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABp6ADAAQAAAABAAABCwAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgBCwGnAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAG//aAAwDAQACEQMRAD8A/fyiiigAooooAQ9DiuZ8QSwp9n851Tl/vf7tdPXOa592H6N/Kg0p7ieHpIpI5jGwb5h905rpKwND/wBXJ9RW/QKpuFFFFBAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAAa5HxDJbpLD5rKrYOAepNddXNa3/rYvoaDSludAnJJHf/CpOajTt/ntUtBEtz//0P38ooooAKKKKACuX1/7kHzf3v5V056VzHiCTyxB948v90E/w0GlPcm8P/6mX5s/MK6Kub0CXfFJww+YdVb+tdJQKe4UUUUEBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFcn4h/wBZFz2NdZXJ6++JYl+bkN0HH40GlPc6ZP4f89qmqFP4f89qmoJluf/R/fyiiigAooooAK5zXPuw/Rv5V0dc3rnKRDno/wDKg0p7kuh/6uT6it+uf0FcQydfvDrXQUCnuFFFFBAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAAelcvrf+uh+hrqD0rl9a/10PXoaConRilpBS0BI/9L9/KKKKACiiigArl9ek2CD5N/3v5e9dRXOa592H6N/KgunuN8PtujlPl7PmH93+ldLWBof+rk+orfoCe4UUUUEBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUABrkfED7ZYV2bsg8111c1rf+ti+hoNKW5vp/D/AJ7VNUSdv89qloIluf/T/fyiiigAooooAD0rl9fWN0g8zb/F/KuoPSuY8QeZtt/L65f/ANBqZGlPck0BVWGQIoA3DpXR1zeg+b5Um/H3h03f1rpKcRT3CiiimQFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVymv7PNi3YztbFdXXK6/wCb50Wz0ag0p7nSJ/D/AJ7VNUKZ+XPX/wCtU1BEtz//1P38ooooAKKKKACuW1+SNFg3/wC1/KuprnNc+7D9G/lQaU9w8PsjQy7GB+YdK6OsDQ/9XJ9RW/QKpuFFFFBAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUmQaGxtOa+c/jH+098JPgnFJD4p1ZZtVILR6fakTXLHHGUyAik8EkgDrWdSrGKvIuFNydkfRRxjisvVNV0vRLR7/AFe7hsbaIEtLPII0X1yW4Ar8Qvip/wAFG/il4qeay+HVnD4V0xtwEhH2m9dfXewCp/wFSR/e718w2Hg79ob9oHUhfQafrPi6YsT58wleBS54/eykRqPxAHrXi1s/gny0ldnoQy12vOVj91/FP7Xv7O/hIvHqHjOzuZo87o7Mm5cEdv3YOa8Z1P8A4KPfs72LlLVNY1HbzmC0Vc4/66yx/rXwz4W/4JvfHPWY0n8Q3WnaCHwSsszXEi57bYQ6/rXt+lf8EukZFOt+Pijd0trEMM+xeRcfl+FZPFY+WsYaGnsMMvilc9ZH/BTX4EMdp0HxEue/2ez/AKXddHpf/BRr9nW/kAvDq2mDuZ7LcAPfynk4+leTH/gl54PEZz47v92P+fSH/wCLrmNV/wCCXDBWbQvH/mSEHC3NgU/AvHOc+/FT7bMesBcmE2UrH3R4Z/a0/Z68XFI9K8bWUUr4+S6Y2rc/9dVAH4mvoDT9QsNUtY73TbmO7t5RuSWJ1dGHsy8Gvwm8Xf8ABOX48aGskugS6d4ijQHAhm+zyHHYCbjP149a+d5tF/aG/Z61Q3TW2t+EJg2PNUSx27kekiAxOPYAg03m9anrVpfMbwNOX8KVz+nI0ox9K/Dr4V/8FIPiP4eeHTvibp0PifTOFNzDtt75AOpJUtFJjrhlUnoSK/Ur4Q/tH/Cf402y/wDCG6yh1Hbuk0+4Jiu4/wDtm+CwHquRXqYXMaFZ2g9Tiq4OrDVrQ99opucgU6vQOUKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA9K5TX3RZYg2MlWx611Z6VzWt/wCth+hoKiby9F/z2p9IKWgJH//V/fyiiigAooooAK5fXhIVt9j7PvfyrqK5vXJNiw/Rv5UF09w8PKwjm3tuO4c4xXSVgaG+6OTr1HUYrfoCe4UUUUEBRRRQAUUUUAFFFFABRRRQA1xlSOuQetfkz4j+KHxc/aK/aivvgp4H8U3XhLwhoUkyXUli3lXEkdqQsshkH7zLN8qKfl9a/Wc9DX5gal8Fvit8CP2ltR+OHw28PN4x8N6+0xvbG2ljjvIluWBdUWTG7a43AZ56V5mZ8/KrbXO3B2u+9j6dsf2XfDdnbItz4y8WXUwA3yNrM43H+9tXgVB4g+CXgjwjo13r3iL4g+KtO02zQyTTy6/cIiqoz1HPAHbmtK3/AGgtXkhAuvhZ4vtpT1QWCuM/76yY/Gvnf44adYfHtrWLxb4N+Itvp9nnbZWdtbxQF+zlHWTJHrmlVnTjG8dxU4zer2PgL42ftJSPrjaT8FPFHiiHS7Rmjlv77VpJHuj6xwn5FQerctXN/Bj9lT4x/tBX3/CQRRvp+kzSbp9X1BpD5hJ58kH55j6kfKDX2L4M/Z4+DPhHxDb+IZfhV491r7JgpbX9pFJb7gchiiGMMfbHNfb1r8dtQsbeK0t/hR4rhgiUIiR6egVVX7oC+ZxXj08tdSftK8rdl3PRni3GPLTOD+EX7C/wV+GK29/qmn/8JVrMIBNxqADxK3UmOD/VqQehIJr7MsrO0sbaO1soUt4IxtRI1VUUDsAvAr55/wCGgdWz/wAkt8Xf+ACf/HKd/wANA6v/ANEs8Xf+ACf/AByvfpOjTVoRseXU9rJ3mfSG2jbXzf8A8NA6v/0Szxd/4AJ/8co/4aB1f/olni7/AMAE/wDjla/WImXs5H0hto2183/8NA6v/wBEs8Xf+ACf/HKP+GgdX/6JZ4u/8AE/+OUfWIh7OR9HkYBNUL6wsdTtXstRt47qCQENHLGJEbPqDwRXz/8A8NA6x2+Fni7/AMAE/wDjlEnx/wBZVCzfC7xb05xYoSPoPMp+3pvRjVKV7o8o+Lv7BXwX+IqXOoeG7X/hEdYlDFZbLP2d3IPMlufl691wcV+TXxd/Zr+M/wCzjqket3iSNYW7/wCj6zpsknlDB+Xey/vI34/j6H7vav1/T9tv4Vab4jg8MePNO1rwZe3LBU/taxkgTk43FjyAO5xtA5zX1rINI8R6UVlWG/03UIuQwEsU0Ug7g8FSOoPBFePiMtw+Ib9nujshi6tL49j8g/2cf+ChWpaa1r4R+O7G8swFjj1mNVE8eSAv2pE+QqP+ei8gctX6+aTq2l69ptrq+j3Md3Z3aCSGWI5V0PIK+3rX5RftQ/sBo0d147+B0JSRd8t1o244IxuZrVzyD/0zbqeF7V8lfs0/tU+M/wBnvXxoOsrPdeFZpW+2adIG8y2k3BXeAH7rLjOz+M8VzUcbPDy9jiNuhvUwsay9pR+Z/RTgcU+uO8E+MPDfj7w3p/i7wlex32l6igeGWNt3BHKnH3SDwRXY19NBppNbHkyTTswoooqiQooooAKKKKACiiigAooooAKKKKAEPSuR8Q7/ADIdr7Rg8Yrr65bXHxLEOeQaDSnudJH/AJ/KpahXqv8AntU1BDP/1v38ooooAKKKKACuc1z7sP0b+VdGelcx4hj3iD52Tl/u/wC7QaU9yxof+rk+orfrnfD67IZRuLfMPvV0VAqm4UUUUEBRRRQAUUUUAFFFFABRRRQAhOAT1rE1/XdJ8M6Pfa/r1wlpp2nwvPPNIcKkcalnJ9gBW02dpwMnFfjL/wAFC/2im1jVR8DvCd1iwsysuryxHPmzfwQfSPrIP72B/BXFmGLVGk59TfDUfaTUT57/AGgP2q/iP8aviQE8C399pmjW0ptdMs7R5I5p2LbdzBDh5HPRc8rxX6o/sn/AXxX8NdBTxL8StdvdX8UajGoME13LcQWMR52Luchnb+J8e1fM3/BPz9mdLS2t/jv41tdtzcg/2PbyL/q0PDXX1bpH/s1+swxXm5ZhHJ/WKu72O3HVopeyh0Ex0zT6KK9+55gUUUUCA9KZ256UrfdPfivyh+IX7WXxm8ffHK4+BvwBS2tDb3b2RvpovNeV4BmeY7l2xogVxkAk4rmxOJVNbXNaNJzdkfq4NpPA5p3zV8haL8E/j/JbxzeJ/jffG8KgullpdrHECf4Rv37gPXaprpF+DPxaUAH4zauf+4fZf/EURqzavyBKnFO3NY+mee9MOR06V82/8Ka+LP8A0WXV/wDwAsv/AI3TW+DPxZKkf8Ll1cZH/QPsf6x0e0kteQXs4Wtzngv/AAUis/DUvwRtLvUxEurxajCti5/1oBB80J/s7fve1exfsT3mr337M/gqfW2ZpxDcxpv+95EV1LHD+Hlqteba7+wxo3j7xDb698XPH+veMZLQ/LDcGKOApnJTYibQD0O3FfcGh6Lpnh7S7PRNHt0tbKxjWKGJBhEReAB/WuPDYeft3VmraHROuvZqmnc1iBtOa/N/9sz9jm0+JVhd/Ez4c2iw+K7dC93bKdiajEgJJz/DOAMbv4x8p61+kPc5prcj612YrCwxEPZz2MKVZ05KSP54f2Tf2l9Y+AHjQ6D4nkkl8J6lPtv4ZBhrWbdsNwo/hcf8tB/Eor+g3TNQsNYsbbVdNlWe1u0WWGReQyOMgj8OtfkN/wAFAP2ZItNkm+OfgezxBcuP7ZtkGFWR+Fuh6Bukn+1g1uf8E8f2iHuGb4GeLLrzGHmT6LLK3OxRl7f6nl4x6B68PL688PW+rS26Ho4qiqsPaxP1x7/SnUi9KWvpTygooooEFFFFABRRRQAUUUUAFFFFAAelcvrf+uh+hrqD0rk9fTdLE29hhTwOh+tBUTpxS0xei/57U+gJH//X/fyiiigAooooAK5bX+Eg+X+9/KuprnNc+7D9G/lQaU9xfD7Zhl+XHzCuirA0P/VyfUVv0CqbhRRRQQFFFFABRRRQAUUhOASaotqFirFDcRqw65Yf1oAv0h6HtVH+0dP/AOfqL/vtaT+0dP8A+fqL/v4tAHjX7QfxYtfgv8Kda8bSbPtcKC3soz0ku5siJT7L94+wr8If2a/hRqn7RPxqtbLWme6sTM+pavM/R4fM3srf9dG+Ra/o4u20S/i8m9e3uI85Al2OM+wNS2OmaVYjfp1tDb7+rRIqA/lXm4vL/a1I1Ox10MVyRce5Lp1la6XZW+mWiCK3tkSKJB2SNQAPwArRpg60+vSUbKxzSCiq8tzbQ8TSqn+8wH86g/tHT/8An6i/77Wgkv0VQ/tHT/8An6i/77WkOo6fjm6i/wC+1oAvP9xvoa/EaXRfEX7Jv7Xt/wDEPxJot3c+DtRvLyRb23iMqC1vyz5JHO6Avt299tftlFNBMv7l1Yf7LZpJoYp12TRq6+jc5/A1w47Be2UX2dzejX5dO58/6T+1L+zzrFrHeW/j3S0DAMUmmELg+jI+CCK02/ab/Z9T7/xA0b/wKSvWD4d8Pu+99Mti57mFCf5U5vD+gIpZtOtlAGSTCmAPyrX97e5DcG3Y8i/4ah/Z4/6KDo3/AIFpR/w1D+zx/wBFB0b/AMC0r1JrDwip+a1sc/7kVH2Hwh/z7WP/AHxDT/ei908t/wCGof2eP+ig6N/4FpR/w1D+zx/0UHRv/AtK9S+w+EP+fax/74hpRYeEicLbWWT0wkRp/vQ908s/4ah/Z4/6KDo3/gWlH/DUP7PPb4g6N/4FpXr48P6Cwyun2zA+kKf4Uf8ACO6F/wBA22/78p/hS/ej908K1j9of9mfxFpF5omreOtFvLLUIpIZYmukw6OpVlwOeQcV+APjCO0+EfxcnuPhrrsGqWmh3kdzpd/ay71aIHzYs444A2mv6cj4d0HBzptt/wB+U/wqhJo/hINtms7EH0aOOvOx+BqVkm5WsdWHxCp3scl8FviRp3xb+GmgePtPwDqduhnj/wCeVwg2zR/8AcEV6xWLavothF5Fk9vbxZ+7GUUZ+gq3/aOn/wDP1F/32tetCLSs3c457tl+is/+0dP73UX/AH2tW0kSQBo2DKe4NWSS0UUUAFFFFABRRRQAUUUUAB6Vymvf66Hjsea6s9K5rW/9bD9DQVE3/T6/0p1IKWgJH//Q/fs9qWm/406mwCiiikAVy+vxRyLAJF6bv5V1Fc1r3meXF5fo/wDKgunuP8PxpHDKEGPmFdFXO6Bv8uTeuDkV0VAVNwooooIGtt2ndjGOc9MV5d4u+JmheDvFXhTwfqMoGpeLLx7e3TP8McZkd2/4EAi+5r1M1+Gn7c/jzXbX9pRZdLuXtp/CNvZG2ZG5WdkW5yPp5mawrVeRXOjDUeeXKfuPjOCKVlBU9uK8F/Z++NGifG/4fWfiWwKJqFvi21G1U5MFyq/Mv0b7y/7NVf2gvHmseG/Dtn4O8GEv4u8ZzHTtNWP70RYbp7j6RJlvwrVVLx5jJ0rScTzu9ufEH7RPjXWPDOh6tc6D8PPDE32K9ubBzDc6teD/AFkEcy4McMI+U7eWY10Vl+yx+zVdzXFhH4ctb+9tGVbhnuZZ5wzdDIzyE7jXsvwz8BaT8NPA2leCtG5h0+EK8pGHnmPMsx95HJY/Wvk/wd8J/BHxK+N/xhm8YWc16LLUNOSKOO6ubZAGtTklIpUy3+1WLjHdq5uqjasnax6XJ+y1+y7FNLbz+E9NiktY1lkQyODHE/AZsycAnuapf8M3/skf9ATR/wDwK/8Atlcp8O/hn4O0T9oX4ieCLWxFxoNx4f0oyWl3JJdRnzZZyVPntISD6Zr3o/s+fA8gg+A9EIPb7BB/8TS5I9IBKbW8zzD/AIZs/ZMk+SHRNKEjcKUuvnyem3EnX0rm/EHhrXf2Zng8b+Cr+61DwBFKiazo95M9ytlA5Aa5tJJMsqxk7nUcYH5UP2Z/hV8Mtf8AC2s6zrHhTS7u9tPEeqRxTvaQtIixzjYEcDIC4GAK+1L/AEyw1LTZ9J1CBLizuomhliK/I8TAgrj0wcYq40/KxPtOl7hp2oWmq2NvqdhIJLa7RZo3H8auuQfyrw342fEfXfDraL8P/h+I5fGvi6Uw2JcBks4U/wBfeSAggpEpwoK4LY6iuB+EXidfg9qfiD4IeNrspZeFYJNT0e9mORPo2SSpb+/btlCP7tavwC0rUvG+uav+0J4nieO68SA2ujQSf8umkQtiM/787fO3tirdToHs7akunfsn/De8iF98SEuvG+uT/Nc3mpXMrgyHqEiVkRUB+6AKsyfsp/sz21xb2U/g6wWa53LHGzyAy7BuPG/nFerfFnVtX8P/AA48Q+INDuhZX+lWkt3DIyb1zAN+1h3DbcH2NfH/AIq8U/E++X4deOPiH4m8J+Dm2Nq2n284uvneS2VHDliAWjFxjaDk5wDWVW0XrG5cOaW0rHsK/su/svyas+hL4U099SSFbh4PNkM3lMdiybd/AJTGasW/7Kf7M909xBbeD7GaW2by5drvuQgbgD89fOUHxAuYPiNdfEmL4t+DDqd1psOlPE0FyLcRQSvKpBMhw2Xra0nxt8VvB3w78ceOfAWu+FvFtjaX95qN61ul2ZVnuRG7In8GIw275uPXis1Uhe1rDdOe97nsmq/sreFNCjOr/Bq5uvBGv2qkwSWlzM1tMwGQlxA7lGUngkdq9B+CPxKvfiBoN3Z+JrdbDxZ4buW0/WbVBhUuYxxJHnnypV5jPpmvSfCc9xd+F9JuL64F5cy2du0kxG0Su8asWA9GNfNvxaik+DvxD0z48aWp/sa98rSvFEad4GIFvet7wMcN/sNXQopaoy5nLRn1nNPDbwSXFw4jjiUuzHgKqjJJPoBXxfpOn67+1Bqt74h1nU7vS/hja3D2um2NlI1vJqpiOHuLiZTuMBYYRQRz3zXW/HvxJqPiqfRfgX4LujFqnjdS15dxN89noyEG4nHr5oUxD3avofw5oOl+E9CsPDmh2629hpsCW0ESHCokYwo47kck1D9/QaThr1PBl/ZE/Z2TBfwZbORyWeSVyzerM7kk1j2f7Nn7KF/rN54c0/w1pkup6eA09rHM7SRB+hZN/Gau/Gz4sXWj3n/Cu/CGp2+j6ncIh1DWbtwlpo9vNyrMW4NxL0giP1zivk6xi8FQSWlt4c1DRfCWvWEk00fi9PE1td3txLjcWuoBGhminPytHvO0cD3iTpx0RpFVJauVj7B/4ZF/Z0PH/CE2o/4FJ/8AF1nal+yt+zXp1r59z4Vs9P3OsaSrNLA4kchUVXV87mJAGOc9K4i3+PHiDWfDXho6hbNpeuR+JNBsbt4DmzvbK/uPLSeCX+OGaPLAdjxXoH7VVzLD8ONKeBtjHxFoYBBxkG8j4zTioS2Jk6kdL3OQP/CQ/sz+KtJgutYu9b+GWvTpZlr9zcXGj3Uh2xESnLvDIxwS33RzX2GJFPIIJPHXjOM8fUVzHjfwfo3j3wrqfg7XYvMsNUgeF/7yEj5XQ9mU8g+or490f47a78OfhtrPw98Tg3nxF8KzxaLYwscSak1z8llcqvdCpBc+imnzuOjJUOc77xv4h8WfF/4j3nwg+H+qy6FoXh5FPiLVrbK3Bkk5SztpB9yTHMjdlNa9v+yN8AUiC3/hn+07huXnvZ5553bPzMztJnLd/wCH2ruvgr8Nx8NPAttpl3KbvWr9je6pdPw1xfXB3TMxHoSVH0qn8ZfEPg2z0ePwx420TWNb07Vhl4tKsLy6OInDKHktPmj5A4z81VyK12Cm17sTmP8AhkX9nUdPBNr/AN9SD/2esnRv2Yf2W/EFkNQ0Hwrp17aF2jDwyO6b0JDAHf1BHNfMGhaL8D28XeIbzVPh34qk8OyR2g01F07WS3EZ8+Q7SG+Z8LyaZ8QvDfwNfwVf2Pw3+Gviq01l3gMJOma2FCGYebjL4DmPzMe/WsnODNpRmj63b9kX9nXaf+KKtV46hpAR7/friPE/wu1z4B20vxB+CFxdPpmmDztT8OXE73NrcWiDdL9k8xy0MsaAsoHDHtW38H/E3wj0PWv7B+HnhLxFo/8AbUv7yW603U1tt8eQC8tzlIu/oDX1fKiNGySAMrAghhkEHrkelaQjF6oylJrRnOeE/E2i+NfD2meK/D04utO1OITwyAdQwxz7jlTXTODgkY6d+lfI3w4Zvgt8Wr74NXe6Pwx4o36p4dZzlIZzzeWQbthjvjX+7mvonxx420D4e+FtQ8YeJp1tdN0+EzSMTyxxwq/7RPAHrWqqGU6fQ4bxZ8Y/D/g/4reEfhlqTBbjxWlz5bk/6uWIjyg3/XX5lX3r2yv5wPHPxq8R/Ev432/xQui0MqX1v9khP/LvBCwKxL9QMt776/ozs5ftNvDMw+/Gj/iw5rGhW52/I1xFDkUS5RRRXQcwUUUUAB6VyPiCNGlhLLzg4rrq5bXd/nRbemDQaUtzo042j/PSpqhXqv8AntU1BD3P/9H9+wKWk6UtFwCiiigArltfkjRYN/8Atfyrqa5bX496QZ5+9/Kg0p7k3h9kaGXYwPzDpXR1znh9VSGTC4+YV0dAp7gelIDxQehrzX4oaf8AEK/8LTj4Y6pDpmvQ5khNzF50M20Z8twcbd3QHIx/KZSsiYq7sejsQeMV+Qn7evwR1fVPFD/GDwkP7StTbxQ6rFCytLbmFSiTFOu1htBbtXzx8Yvj3+1Qmp3HhH4kavfaA6gpJbQRJZxOucZVoQrOrDszNkdjXm3wXsPi34i8b2138O7mePULRvNubqeVltYYgcsbuVuNmMkqeMZrz61dTXKeth8I4P2jPoX/AIJ+aprml/FrVLiJzDoKaZcTam5/1UaxHKM3uCK/RX4JWc/xQ8a6r+0PrcZFpdh9O8NQv/yy06Nir3Hs9wwJP+yK8t+IuleBNK+Bmoaj8O106KXx5q+nabrN9pOTayvLIkFwUfqY8BsY4yx7Zr7t0fS7DQtOs9G0qFYLKyhSCFF6JHEoVF/LmtqMbJI58TV5nc2e1fLPwU/5LT8bP+wlpv8A6SmvqbtXyz8FP+S0/Gz/ALCWm/8ApKa6KhyR2JPCf/J2Xj3/ALF3Rv8A0ZPX0+3T8K+YPCf/ACdl49/7F3Rv/Rk9fT7cDPtRH4RT6Hyx+yN/yT7X/wDsZtZ/9H19UHhSScY718n/ALH7b/h3r5/6mbV//Ror6wY4H4U4aK5df42j87/2vNNn+KPiTSvAXgjSF1XW/CVrLrOpuG27LHbtNjvxz9pGfk77a+1Php4r0Lxv4G0fxL4aCpp15bJ5cQ/5YlRtaL6xsNn4V4h+y3CuraD4s+IOoDdrPiTX9Qe5d/voltL5EEH+7GiY/Gn/AAChj0D4k/FzwNpuV0jTdWtL22jH3IZNRgMk8afR03H/AHqzt1Lk/dt2PpnU9NstWs59P1OBbq1uFKvG4yrKRggj0PevEvi3oV3BqPhvxzY6B/wk8fhk3UVxp6IkkzWd0iB5IY5OHljMaEKOWHAr3uT7p4zxX5eeFPFOmTeIfHtv4l8T+OLYweKdaWKDQYbyS1WH7UwUeZBE4U57bhTrTtYinC59E3Hx5+B3kNZ23hvULvUcELYR+H5xcF/7vzwrFkHj75Fb/wAA/h9eWfgrxJN4w0RNIPjjUby9l0pVVVtrS5G2OBxHwG8rAYepr5Vt/FfhKT4hXOkP4p+J39lw6ZDcJtbVDP5zyujbohET5e1V2HH391dFp3jFbT4w/DPSPCvijxlf2uoapNFd2/iCC5ig8pbWUphriGEls+7fQ1kpXOmULI/Ru1tbextYrOyjEUMCqiKBwqrwAK474j3XhKx8Ca7ceNxF/wAI+llL9sWX7jQFDlfqegru2wVwelfKv7TMQ1qb4c+Br8L/AGX4j8SW8d+jHKSwQRPMYm9VdlAI9K2n8JyU/iPFv2JI/wCztW8Q2HjaO8i8XzWtlLp51FszyeHin+i7fcNu8z3xX6JjgE18pfG+CDQviZ8I/GmmjytS/ttdGk2nBms71GR429VT/WD6V9Wc7TiijsVVd9T5d/ae1PTtJ8Br4dhjFrdeMtQt7B54rL7dMibd08ywAEystujIPQkV82eIJHk8Majplj4pmuy9pNbxQjwHJC0h8oqqGcICrN03A8Hmvof42arNF8Yvh1ZW7kPZ2PiHU0IGSskFqsaEcHoJH7H6Vxnh7Wf2jtY+Clp8Th4z0hVudC/tIwNpDtKuYRN/rVuAu/b0JjxnqKzluzopfCZ3jkzL+z78FUZWEkOreEY5Q6FGDRvHG2Q/K/OBxXpf7XbAfDXSCf8AoY9E/wDSpao6nYeI/il8F/hVqzr9q1E6l4Y1O9KDAxFLG9w+3sBkn2qx+2ASnw10XZz/AMVJow/K4FV9kzn8SPqkFQjMxwBuyfSvzL8Z6lq/ib4pzftU+HNNgvfC3w1u10tUEe6e+tY98V5cxnt5BkLIf7oNfZH7RWvaj4Z+BnjHWNIkMN3Fp8kUci/ej84rEXHuobI+ldN8P/CGg6B8NNF8HWNqn9mR6fFCYz91xJF+8Lf75Y5+tEle0RQnyXn8jstG1PT9a0201nSZ1urK+ijnglQ5R45BuVh/vA5rRvYjcWU8C9ZI2UZz3GO3P5c18zfsrSy2fgnXvCayNNY+FvEWraZYsf8An1gnIiA9lBIr3jxf4o0/wZ4Z1HxRqiu1tp0BmdI8b3OMBVyQNxPAyRz3q29LGLhyvlPzT+FfgfXtV8IW0o8D+K9c8ia6tnmtvFUdhb+bDcSLIEt/tMckXKjgjJr0S5+G3iCOJpIfhr4ysdoJMi+NYjtA/ixJetnHXlT9D0r0tLTXbP4y+IdB+E2sx6PfzWdrrGoadqEDXFhcS3RZGkiVSkkLZUFyrkEt0qzdQ/Fv4g+J9T+FHijxbpuiCOwiub+PRrOVp5rS6d4tkdxcN+73BSCVQkZ4bNYOF0dym0bX7HsNx/wovSby4WVPt95qNyqzyrPKqPeS4Dyr8rtkdRX1IehxzXnPge78G6Q03wy8JMIj4PhtLeW2UZ8qOSPdEC3clcMa9HrpjGyOGpK8meI/HL4bz/EjwS8GhyC18RaPKuo6PcDGYbyD/Vj/AHJANj+xNfCv7Vni7XPjH+zJofjHRLdkOm6j5fiGzX79tcxIY3WTH8CydPZlr9V2+6fpXx1o2m6HpH7QvxM8J3UEcvh3xJoVtq+oW8gzD5+54Z9wPUyx/MfpWNeF0a0J8rufld+z/wDBq31vxHpXjf4nahb+FfBlncrI1zqM0Vut7JGQwjg8z/WA4wW/hr98PDnifwv4rslv/C+q22q2pxiS1mWVQpxjlOO1fi7+0f4O1L4z6o3xR+EOuL4z8P2cCQHTbNdlzpEcIKhBb90JHL18wfDfQ/jHN4hSz+GNrrEOpltubATwyRsDz5jL8qgHqTwK8+lV5Hy8tz0q1H2i5+ax/TJgAjipK+T/ANnP4Y/GHw1YReIPjV4wvda1aRAsWn+ez21qh/56Z/1sn+0elfWFetB3V7WPHnGzte4UUUVRIh6VymvvGskSsRkq31rqz0rl9cGZYj6KaConRL0X/Pan030+v9KdQEj/0v366/hTqQDFLSQ2FFFFMQHpXL+IPM2wbPR/5V1B6VzGvyRxrb7/APa/lUyNKe5LoG/y5N/XIroq5vw9Ikkcuz+8K6SnEVTcKDwM0UUyDm9f8MeGvFNsLLxHpNrrECnIjuoY51U+wkBwa/KL/goPejwcnhX4Z+FLaLRvDtxBNezW1lGsEc0qOI1+VMAkZ71+wB4BNfkv/wAFL7WBbvwNdp/ryl5F+A2NXLjPgO3L52qo84/Y1nPxM8I+Pv2d9aufLtNStRf6dJ/DbXkTZaRfq/lyH6V+m/wC+ImoeO/CT2PieP7L4s8NStpus27ffW4hG3zP92ZQHFfHX/BPf4Lat4d07U/i3r0DW7a1Ettpscn3vs2fMkmP+y7BRH/sZr6A+K8b/Bv4maX8edOQroWqCLSvE8ado2YC2vG/2omO1/8AYqMNpFMrEy5ptH16RxXyz8FP+S0/Gz/sJab/AOkpr6dguIriBLiBg8cqqyMOjKRkH8a+X/hiV0j9o74s6DMNj6mmk6lF/wBNIvIMTH8JCa6Z9zkj1RP4T/5Oy8e/9i7o3/oyevpy4lSC3eeQ4WNSx+gGTXy/8Pz/AGl+0/8AFHVIfmi07TdFsWP/AE1KyTEf98ster/F/wAVQ+C/hd4l8Ryn5raymSJR955pQYoUHu0jACl9kdveSPGv2MYmX4NtetwL/WNTmU+o88p/7JX1mwyMGvGf2fvB1z8P/g34S8K3423drZrJcA9RPcMZpAf+BuRXszdP8atbE1Nz4U1vxrB+y58QPFK65Ez+EPGaz6xpYQfd1cBRcWn/AG2IDivbP2efA+teF/Cl34k8Yqf+Eq8YXbavqYP/ACykmGI4B7Qx4X868K+LWg6z+0z481TwX4YvfsGi/DkNKt2PuTeIiN0Mf+7bDPmf7RFfR/wO+I5+JPgqG+v4mtNb0qV9P1W2f78F7b/LIG9m4YfWs4/EdE/gPZGr5c/ZfO2z+Iq/3fGeu/rdNX1G9fKXwXkHhT4xfFL4bah+5lv9QXxFYq3SS3vk2SmP/cdAD/vVb+Ixj8LNjS5iP2tfEEJ+6fCWnH/ycuKz/jqM/Fb4Jp3/ALduiPoLRs1pWEMi/ta6zOfuv4QsgPwvp6xPGkn/AAmP7T/gLw1ZnzE8FWN/rF8V+7HLdhLe3B9yA/8A31Udyz6ubOzgZPpXifx38Aah8QvAklr4ekW38QaNPFqukTH7i31r80e72fLIfY17aeADXz9+0B481bwr4bs/Cvg3D+LvGM503S1Bx5cjjM07HsIkyxq6vwmdL4jxf4UeJtS/aX+I+lfEO+sJNM8P/D2MwC1l6vr00f8ApH4W6lVX/er7o7V8LeGPCcP7KXxA8P6dZXEs/gjxvHDYXksh3NDrsYwtw3ot1yH/ANrFfcoKFMkjHB49OxpU/hKq+R8efGFBcftBeHI/+fbwl4gm/wC+wq10fw9/5M50z/sTW/8ASJqbc6c/iv4++Mb5F8yHw/4Wh0n/ALeb55J2/wDHAtYvgbWrW0/YtgvrhsLYeGLi0k/34IntnH/faGs18XyLfwI9g+AJA+CPgUnp/Ytj/wCiVryr9sAtL4H8KaePv3nizSIxj0Ejyf8Aslew/Bawn0v4Q+CdNusedBomnq4P9/7Om79TXk3xqt5PGHxd+Ffw/s/3n2O/l8QXn/TO2sU2Izf78jhVql8BF/fZ9E+KfDeneMfDOq+FtWBay1a2mtZcHDBJVKMQfUA8V8VaL8bNc+GXw21f4W66De/Efwxcx6Hpdv0fUVn4sblV/u+Ucsf9g196nakbHso/QV+Z/jDUPEHiz4l3H7V/hqwjvfDXw5uxpkMSx7p9Rs4t8d9dxHt5ZkPln+6DU1dkVT3Z9wfBr4er8MPh7pnhWSb7RfKrXN/P3mvLgl53/FycfSvP/i4bn4heJNC+DmjgtAbqDVNdlTpbWNo4kihb/buJVGz/AGUNe9aFq2m+IdHsde0m4W4stRhSe3lTo8Uo3ow/3lwTVy10+ys5557WFIZLp/MlKj5nYjAJrTlujPms2fLPxEstT+Fnxitfjnb6fLqnh6+0v+xdaS3UvLZxpKssN0IxzIoI2vjkCvYPCNl4H8S+Ibn4ueENSXUn1qxt7IzQSB4DHA7yKQo+ZWyxDA46YIr1SRQ0bKwyCCDXgGufBttO1Wfxl8IbweE/EEh3zxBS2m3+O1zbL8gJ6eZHhxnPJos1sHMnuep6V4O0TR/Ems+KrCNk1HX/ACPtbFtyt9mXZHhe3yk112MD1ryH4ffE3/hJ76Xwt4lsW0DxZYRLLc2EjB45I24E1pKPlngbs45U/KwzXrjH5TVJpbCknfUwfE/iLR/Cegah4j1+5FtYadDJNPIeyIpY/jivzB+LWr+J9D+AHjL4y64j2mv/ABZuLa1hj6/Y9H5EMP8A20jy3/A6+o/ilIfjL8T9P+BdkzNoWiGHVvEkgxhkHzWtkPeVhuk/2K9B/aB+ENv8YPhRqvge3Mdve+WJrB2HypcQ/cz/ALL/AHT7GueXNJu3Y6IKMGrn4j/soazq+j/tB+CZNHmMbXl9HbSherQTELIG9tpNf0ZDOBnrX8/P7LfhrUfC/wC1b4W8NeKrRrK/0+8uFlgk+8siQyeWp9gcMtf0D1ngItQ1OjNJJzVgoooruPMCiiigArlNf8zzY9vTa2a6uuU8QOiyRK3UhsUGlPc6VP4f89qmqFP4f89qmoJluf/T/fnHIzT6TGeaWm2AUUUUgCuc1z7sP0b+VdHXL6/92D59n3v5UGlPcs6H/q5PqK3653w//qZfm3fMK6KgVTcKKKKCBCQASelfPHxD/Z88LfFbx9o3jLx7I+oWGgQ7LTTfuw+a5y7y/wB/joK+iKKTQ0ynb20FpCltboI4YlVERRtVEUYUAe1ZviDw/pXifRb7w7rcAuLHUYXhmjPG5JFKt+hreprMApJz+HWnbQfMfJ3wF8S6h4UvtQ/Z+8a3OdX8KMBpM83ym/0ggi3kT+9JGFKuB2/Gu6+I3wck8X+IdL8beFNduPCPirSoXtY723ijnSW1bkwSxSDDpk5U/wALc+1dF8SfhH4L+KFva/8ACR28sV9p5Js7+zlaG7tH7NFKnPB5wwI9RXl6/Aj4nWyiCw+NGvxQIcKslvaXDqvYGRo9x+prnf8AhubJ315rHp3wr+F1h8MNGu7VL+fWNU1S5a81DUrraJbu4frIwTgDHAFaXijwVF4u1fQ21eQNpWkT/bfsgzie6i4gMnbZF98D++Ae1eRf8KO+LX/RbNc/8ArL/wCN0f8ACjvi1/0WzXP/AACsv/jdXH0sTKN/tn03/DhOAOmOcY9q8M+OnxNk8CeHE0Pw1i78Z+I3Fho9opDSPPL8omYdkiB3MfQfly5+BnxWIIf4166VPUC0s1OPqEyPqK7P4ffAvwj4E1aTxXPPeeI/E067JNV1Sc3N1tPVU3fLGvstUybKOt7m58JPhzZfC7wFpvhWCQ3FzEpnvLg/eubuY75pG92c8fSvFPH4b4HfF61+Llqhj8JeLzFp3iMKMJbXIIFrfseygHy39ua+vG59s1m6xo+ma/pt1o2tW0d5YXsbRSwyDKujjDBh3BBxRy9QUi1a3Nve20V1aSCaGZA6OpyrowyCD7ivJviV8KLDx/c6b4h0/UZvD/ibRCzWOp2wDPGJBgxyISBJE3RkJG4ZHevOR+zdf+HGeD4ZfELXfCOmyOWWxieO7t4Sx5ES3IbYp9BU/wDwo74tf9Fs1z/wCsv/AI3UylcaVn8Vignw6/aGXxXL4s/4SHw79rk08aabz7Dc+f5CzNKr+UZPL3gtkDoTx0r1f4Y/CnSfhzDqN6bqXWNd1uQT6jqVz/rbmQZwNvREX+FR0rzb/hR3xb/6LXrn/gFZf/G6U/A/4tAZ/wCF1622O32KyGf/ABynEqX+M+i9X1XS9C0y61bV7iOzs7RGkkmmbbGiqMkknsAOa+YvgtZXXxP8c6p+0HrsMkdjMraf4YimG1o9OQ4kudv964bnP92tC2/Zpi1q4hl+K3jPWPHVtburpZXkggsyynIMkEOFfHbPFfTVpa29lBFaWsQhhhQIiINqoi8AAewpON2K9lvc434k+AdJ+JfgrVfBet5FvqMJRZEOHhlXmOVD2ZGwwPqK8u+AHxFv9d0ef4f+OJEg8b+DnNjqMJIDzKn+puo17xTR4O71Br6NY4BHTivGPiL8EPCHxEv7bX7h7rRfENkNttqumytBdxD+6WXKsp7hgQfpVuHUUJrZnR+AvCX/AAitlqM11KLvU9ZvJb+8mUY3yyfIF/7Zxqif8BrxbVf2bJdQur/w9Z+Lbuz8B6tfG/u9BS3jYO7uJJIUuG+aO3eQb2QDk5Gasj4HfFNfktvjRryRr8qhrS0dse5ePLfWn/8ACjfi1/0WzXP/AACsv/jdROV/s3LSS2lY+l1iWFFSMBFjXC89AO35CuD8PeCrTSvFOteOr+Y3esa0Vi8xgVEFnD/qIEH8IHLv6uxNeR/8KO+LQ5/4XXrn/gFZf/G6R/gX8UZFP2z40688ZB3LHbWcLEdwGCcH37URv0VhO3V3F+P3jPUL6Oy+C3gO5P8AwlXjE/Z5Gi+d9O048XF04/gwhKrnqa9w8MeDPD/hPwjZ+CNLtUXSrG2FqsTAMrR7dp3juXyc+ua5b4a/Bzwd8MPtV1o0M15q2okNe6neytcXtyw7ySPyB6BcCvWs8HtxT5W9yZStotj49+EN/N8GfH+ofAPX5fK0e8dr/wALTTNgPbysTLYg9MwMflHfP0r7Brz34hfDPwj8TdF/sXxbY/aY428yGRGMc9vIPuvDKvzIwxnI/oK8dj+AfxD09Ba6H8Y/ENrZJwkU0Vrduq/wqJZI95C+9OzWwNQl1sfUlB6H5a+X/wDhR3xa/wCi2a5/4BWX/wAbpf8AhR3xb/6LZrn/AIBWX/xuk5P+UXs49JHsnjHwNpnjGO1lnZrHUdNkM1jfwkCe1lbqyE9UccOh4YZB9uW+I3xJi+FPw/bWvEbx3Wuugt7O1gJBvL1/lijiU/N8zbd/Yc1wZ+B3xbx/yWzXP/AKy/8AiK6XwZ+z/wCGvDfiOHxt4l1O/wDGXiWAbYb/AFWYzG3GelvEPkj9yOlF79LA1brctfAT4f3/AIE8HfafEz/aPFPiKU6prEx+815ccmM+0IISvdD0paKuJDZ5B40+DHgnxv4k0nxpfW32bxHok0ctrqFv+7mAjYMI3P8AEhI5HcV60i4UKxyQACT3I71LRTEFFFFABRRRQAHpXL63/rofoa6g9K5TXv8AXQ/Pt4PHrQVE6YUtN9Pr/SnUBI//1P38ooooAKKKKAA9K5jxDIUEGEZ+X+7/ALtdPXOa592H6N/Kg0p7h4fZnhlJUr8w+91ro6wND/1cn1Fb9Aqm4UUUUEBRRRQAUUUUAFFFFABRRRQBUv4p57G5gtZzazSRuqSqocxsVIDhWBBKnnBGD3r4K8I/tr6RoPjS9+FH7QFhH4T1/TLhrc38f/IPmUH5JMMS0asuMtllBySVFffzfdOfSvze/by/Zvf4ieFk+KnhC1EniHw9CRdQouWu7IcnA7tDy6/7Oa87MXVjD2lLdHRhlCUuSXU/QvSNY0nXNPg1TRbyK/s7kBo5oGWSNge4ZOK1itfgh+xH+0+fhD4lX4feNLll8IatLtjd+TY3Odu/H8Mbk4c9uvav1T139pbwj8PfFkXhH4qK3huPUDu03UyPM028ibkFZ0+4QOu7gdc4qMJmdOcL9eppiMLKErI+nAKcawdD8QaH4lsYdU8PX8Go2cwBWa3kWVWB9xW6ehr0009Ucsk1uRv8qMTnAB6cmvz4/a6/bLf4KXUfgPwHDBfeKZU8y5llO6GxQ/cyDgO7dgeB3r6l+NHxo8G/BLwheeJfFFyiTCNhZ2qsDLdTbTtREznBbhm7Cv5n/GPivV/HnirVfGevymbUdYuHuZif4fMO7Z/wEgV4Wc5i6UeSO7PQy7C+0d3sfpt8FP8AgpBrbazFpHxssYHsZ2AGo2cTRyW+4gfvIjwyAckpzjpmv0/X4vfC658KnxuninTjoapvN39qjMYwN209cP8A7P3s8AZr+WWivDwvEFaC5ZHoVsrpuXun7c+OP+Clvw20HW3sPB+g3niK0jYo92ZFtYyV7xq+5nH/AAFc19L/AAF/aj+GXx9he38OXDadrkA3Tabdsq3IUdWTH+sX/aHSv5r+RyDg+tdB4Y8UeIfBWu2fiXwrevpup6cytBLGR+7IIPzKeGBPUHrWtHPqyneew55PBxstz+sogHFLjtXwZ+zN+2v4M+LtnbeGvGs8WgeLYsR+XK22C7IGN8LN0Ynqrd/u19keKfFvhrwXodx4j8V6lDpemW6lnnncIoGM/LjliewHJ7V9Zh8VCpHmieFUoyjLlZ1JXvQK/FD9oX/goX4n8Q3k3hr4KO2iaVGzo+pyIDdz44zGG4iT3++e3NeL/Cb9un44fD3WY5PEuqzeLtIlbNxaag4klAzyYZf9Ypx0DfJnrxXlzz+jGp7M7P7NqcvMz+hjgUde1fKPgX9sv9n3xvoseqnxXb6JOyjzbXUG+zzRNj5gd/ysPQisvxn+3B+zl4QtpJY/Ew125wQtvpsb3DEgcDOBHz65xXpPHUeXmcrHGqE72sfX7kBSTwAOa+WvGv7RukJ48sPgv8MjFr/jTUZCkxjfdaaZEnMstzIP40TLCPq2MV+XHx1/b1+JPxRin8O+Ao28J6FPujfymV76dTkYeU/KgYHBVea++f2Hf2crj4S+EZPG3jC3K+LvEiq7rKdz2lofmSIn/nq33pffFcVLMvbVOWk7rqdLwahHnnufdkCOscayvvcY3NjG7jqR6Z6VcpOmKWvY8jhYUUUUCCiiigAooooAKKKKACiiigAPSuT199ssS7GOVPI6D611h6Vy+t/66H6GgqJ0K9F/z2p9IKWgJH//1f38ooooAKKKKACua12PekX0b+VdKelcxr/mf6P5ab+X747UF09yxoK7IpBz1HWt+ub8PbhHLvUKdw6HNdJQE9wooooICiiigAooooAKKKKACiiigAPSonClSjchhg/Q1KelMC55NO2mom30PxG/bc/ZGm8F3938W/hzZ+ZoF62+/sohtWykPLOh4xC/U+jVxHwM+PHg7xv4QH7PX7R7G88PTkLpesSELLpsrfKodjwgUnKnon3T1r967u1t7y1mtLqNZYZkZHRxuVkYYIIPUEcEV+Lf7WP7DN/4Ye6+InwYtDeaOd817pi5MlsPvGSEDl0zyR1Ar5jH5fOlJ1qKvHrHuezhsXGcVTnv0Pm/4pfCn40/sqeI1vfD2t30Oi3hBsda0yWWCC4UneqSGHKhtvrkNWTH+2J+0qLIWi+PL1owNuTHA8gz33hBIT+tdX8EP2qdQ8DaO/wz+KOnf8Jh4BuR5cljcAGW1XO3MJcg/Kc/LnPoQa7fx7+yboHjnQ5/iV+yrrC+K9DYGSXSGfbf2YI3FI0kAZgDnCttJ6LurxXCc054d69V2PQW9qvyPibxL4u8U+NdSk1rxbq11q98/Wa7meaTHoM/dHtXOVf1HTr/AEi/uNO1S3ks7q1YxyxTJsdG9DVCvLqXv72/U7o7BR9KKMkcrkEdMdfwrNjSu7FvTtP1DVL2HS9Ktnu7u5dUijjUu7yOcKqqOWYk4AHU19Xan+zVoPwt0KDXPj74rXw/eXiCS30LT4lvNVkVhkb90iRwg9MspI7jjFepfsU+HdD8J+GviD+0lr8CTr4Fs2i05ZPuC6ZC/H+0NyKP9+vhvxj4w8RePfE2oeLvFF093qWqSNJK8nUfNlUX2C16aowowUpbs45VZylaOyHeI9R8Kz3DReFNJnsLaFsLJd3IuLiVR/ESscKk+yxjb2LVnah4j1/V7eKz1XVbq8ggGI45pneNAOgVT0rHorgbu7nSFFFXLmwu7VEe5iaIOMqH++R6j/ZoLiU6Pxx9Bn9O9PiilmkSGBDLJIQqoBuLMeAMd8ntX6vfsl/sL3F3NZfEn412jwwRN5tlpEvLv0KyXJ/9BWurCYGeIlyLYwxFaNNcz3K/7DP7I0up3lj8aPiZZeXZQETaRYTDPmuTkXEp7qhAaL+82H7V+xyqqccADAxjAHoBUVvDHbxrDCoSOMBFVRhVVRwAKtV99gsHChDkgfL4jESqSuwooorsOcKKKKACiiigAooooAKKKKACiiigArltdTM0TegNdQelcl4g8zzYdqAjByc9KDSludQvVf8APapqhT+H/PapqCJbn//W/fyiiigAooooAK5zXPuw/Rv5V0dcvr6RssBk7bv5UF09yzof+rk+orfrnPD6oIZdij7wro6AnuFFFFBAUUUUAFFFFABRRRQAUUUUAFFFFACHpUb8Icen1/lUtIaLgj4E/aK/YX8DfFl7nxP4J2eF/FD/ADO0ceLW6bt5qL90k9XT6nNfkdr3g349fst+MIrm4F94Zv0c+Te27t9luFB4JlQGOVT3VgTjjFf00nBGPX8awvEPh3RfE+l3GjeIrKHUbG5BWSCdPMRsjA4OcflXi4zJIVJe0g7M76WOnHSWx+E9t+1R8NfixaQ6L+034Eh1SdV2Lr2lqlvfx9vnTOXHf74z/drR079k34J/FOXz/gt8X7Iy3HKadrMRiugT0QMHUkA8cRN9TX2X8VP+Ccnwr8WPPqXw+vZvCV9JllgA+0WRJ/6ZyEuvP91sf7PavgLx5+wV+0P4MeWXSdHTxNYpkrNp0yNJgf8ATGXy5QfZEb6141fB4iP8aPOvyPRhWptfupWPTP8Ah2X8Zi++HxHoUqH7riSfGPwgz+VaUP8AwT+0HweRefF/4r6RokEHLRRBSxHcK08kRzjp8jc/wnpXyda+Lf2lPhC5tUv/ABD4d8j5dkguYo1x2xJmMj8K66H9tL9oUKsGo67baqqDGL6wtblvzePNctOtg470rM0dHEbKV0e7fHr40/A7wb8EJv2cf2fke9tL6ZJNRvjnYfLkEjfOfmllZ40BwNoVfSvzjit7mQgRQu5PTC5P4CvqZ/2xfiq+S+l+Hnf+8NEs9/6xkfpVKb9sL49Mpj03WrXS1IIzYafa2bDPbdHCD+RH1rHE1aVVpuV7fgaU6E4Hmfhn4IfF/wAYMp8OeDtUuon6TG0mii57+Y/yY9xXbv8AAK28Mf6R8VPGuj+Gdv3rSCVdTvxjqPs9qXVW9A8qnPaqU+t/tI/GKUWb3HiLxJ5xx5SCaWM7uOigqQfQgj2r2DwD+wB+0H4veGfWtPg8L2UnJkvplabHc+Sm9gfYqKzp4VSf7qNypzcdZSseC6t4r+Hnh3/Q/hnoss8yfK2r6v5Utyzf34beMLDCAeQWMrjruU81P8L/AIIfFr47ayY/CWl3F+HY/aL+53R20ZPQyTHjI6gLz6V+uPwq/wCCdnwi8FyQan46ml8W6hFgmOYeVYg9eIVJLc/3mwf7vavvnR9H0vQNPg0rRbWOysrZQscMShEVR2AFe1hsinN3qu3l3OGrmcUrQdz4w/Zz/Yo8BfBh7bxD4g2+JPFKBSLmaMeRasMH/RkbkEHo/Xvwa+5FwAABgDim9TnNSV9PRowprlgrHj1aspu8gooorYzCiiigAooooAKKKKACiiigAooooAKKKKAA9K5rW/8AWw/Q10p6VymvojSxFuoVsUFROmFLTF6L/ntT6Akf/9f9/KKKKACiiigANcx4h8zFv5fXL/8AoNdPXMa9923/AOBfyoNKe5JoHm+VJ5jD7w6DFdHXO+H/APVzf7wroqBT3CiiiggKKKKACiiigAooooAKKKKACiiigAooooAKKKKACg0UUAVLqztL6Mx3kKToeMOoIwfY1wup/CX4Xaw5fVvCGkXzt1M9hBJn65Q16LRUygnuVGTWx43/AMM9fAbcX/4V14d3Hv8A2Ta//G66PTvhX8MtGdZNI8J6TYsvAMFjbxkfQqgP5V6CelR0lTj2E5N7kFta21pGIrWJYkHRUXaPyq3TB1p9UklsIKKKKYBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAB6Vymv+b5kOwjoe1dWelcj4h/10P0NBpS3OoTPy56//AFqmqFP4f89qmoIluf/Z'
          },
          {
            source:'data:image/jpeg;base64,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'
          }
        ]
      },
      file: [] // 上传文件对象
    }
  },
  methods: {
    addImg (e) {
      console.log(e)
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i]
        console.log(file)
        // 上传大小限制 10M
        if (file.size >= 1048576) {
          alert('请选择5M以内的图片！')
          return false
        }
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.publish.zawazawaContentImage.push({ source: reader.result })
          console.log(this.publish.zawazawaContentImage)
        }
      }
    },
    // 第一张图片的样式
    getPic1Class() {
      if (this.publish.zawazawaContentImage.length == 1) {
        return 'col-sm-12'
      } else {
        return 'col-sm-6'
      }
    },
    // 第二张图片的样式
    getPic2Class() {
      if (this.publish.zawazawaContentImage.length == 2) {
        return 'col-sm-6'
      } else {
        return 'col-sm-6'
      }
    },
    // 第三张图片的样式
    getPic3Class() {
      if (this.publish.zawazawaContentImage.length == 2) {
        return 'col-sm-6'
      } else {
        return 'col-sm-6'
      }
    },
    // 第张图片的样式
    getPic4Class() {
      if (this.publish.zawazawaContentImage.length == 2) {
        return 'col-sm-6'
      } else {
        return 'col-sm-6'
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

      return estring(val) // 4
    },
    // 内容改变事件
    changeText (e) {
      console.log(e)
      if (e.type === 'input') {
        if (e.inputType === 'insertFromDrop') {
          console.log('dd')
          e.preventDefault()
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
      const ele = document.getElementById('textarea')
      if (this.publish.zawazawaContent !== '') {
        ele.innerText = this.publish.zawazawaContent
      } else {
        this.$refs.textarea.focus()
      }
    },
    test (i) {
      this.publish.zawazawaContentImage.splice(i, 1) // 结果arr=['a','c','d']（下标1开始，删除1个）
      console.log(this.file)
    }
  },
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
  /** 点击穿透 */
  pointer-events: none;
}
.publish-editor-image-clear {
  cursor: pointer;
}
.publish-editor-image {
  background-size: cover;
  height: 20rem;
  background-clip: content-box;
  padding: 0.5rem;
  border-radius: 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
