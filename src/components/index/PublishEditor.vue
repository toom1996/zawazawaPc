<template>
<div class="item-address">
    <!-- <span class="publish-editor-placeholder">说点什么吧</span> -->
    <div
      ref="area"
      id="area"
      class="publish-editor__textarea"
      contenteditable="true"
      @input="changeText"
    >
      <span>{{ content }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeText (e) {
      this.$emit('publishContent', e.target.innerText)
    },
    blurFunc () {}
  },
  mounted () {
    const ele = document.getElementById('area')
    console.log(this.$refs.area.focus())
    if (this.content) {
      ele.innerText = this.content
    }
  }
}
</script>
<style scoped>
.publish-editor__textarea {
  box-shadow: none;
  outline: none;
  border: none;
  min-height: 10rem;
}
.publish-editor-placeholder {
    position: absolute;
}
</style>
