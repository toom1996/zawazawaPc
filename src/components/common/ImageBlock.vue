<template>
  <div class="row">
    <div :class="getDiv1Class()" class="pr-1">
      <div
        v-if="images.length >= 1"
        class="publish-editor-image"
        :style="{ backgroundImage: 'url(' + images[0].source + ')', height: images.length === 4 ? '10rem' : '20rem' }"
      >
        <b-iconstack font-scale="2" class="m-1 publish-editor-image-clear" @click="removeImage(0)" v-if="remove === true">
          <b-icon stacked icon="circle-fill" style="color: #190c06"></b-icon>
          <b-icon stacked icon="x" style="color: #ffffff"></b-icon>
        </b-iconstack>
      </div>
      <div
        v-if="images.length === 4"
        class="publish-editor-image"
        :style="{ backgroundImage: 'url(' + images[3].source + ')', height: images.length === 4 ? '10rem' :'' }"
      >
        <b-iconstack font-scale="2" class="m-1 publish-editor-image-clear" @click="removeImage(3)"  v-if="remove === true">
          <b-icon stacked icon="circle-fill" style="color: #190c06"></b-icon>
          <b-icon stacked icon="x" style="color: #ffffff"></b-icon>
        </b-iconstack>
      </div>
    </div>
    <div :class="getDiv2Class()" v-if="images.length >= 2" class="pl-1">
      <div
        v-if="images.length >= 2"
        class="publish-editor-image"
        :style="{ backgroundImage: 'url(' + images[1].source + ')' , height: images.length >= 3 ? '10rem' : '20rem' }"
      >
        <b-iconstack font-scale="2" class="m-1 publish-editor-image-clear" @click="removeImage(1)"  v-if="remove === true">
          <b-icon stacked icon="circle-fill" style="color: #190c06"></b-icon>
          <b-icon stacked icon="x" style="color: #ffffff"></b-icon>
        </b-iconstack>
      </div>
      <div
        v-if="images.length >= 3"
        class="publish-editor-image"
        :style="{ backgroundImage: 'url(' + images[2].source + ')', height: images.length >= 3 ? '10rem' : '20rem' }"
      >
        <b-iconstack font-scale="2" class="m-1 publish-editor-image-clear" @click="removeImage(images.length === 3 ? 2 : 3)"  v-if="remove === true">
          <b-icon stacked icon="circle-fill" style="color: #190c06"></b-icon>
          <b-icon stacked icon="x" style="color: #ffffff"></b-icon>
        </b-iconstack>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['images', 'remove'],
  methods: {
    getDiv1Class () {
      if (this.images.length === 1) {
        return 'col-sm-12'
      } else {
        return 'col-sm-6'
      }
    },
    getDiv2Class () {
      if (this.images.length >= 2) {
        return 'col-sm-6'
      } else {
        return 'col-sm-6'
      }
    },
    removeImage (i) {
      console.log(i)
      this.images.splice(i, 1) // 结果arr=['a','c','d']（下标1开始，删除1个）
      console.log(this.images)
    }
  }
}
</script>
<style>
.publish-editor-image {
  background-size: cover;
  background-clip: content-box;
  padding: 0.1rem;
  border-radius: 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
}
.publish-editor-image-clear {
  cursor: pointer;
}
</style>
