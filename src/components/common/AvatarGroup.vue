<template>
  <div>
    <b-avatar-group size="2rem" overlap="0.4">
      <b-avatar></b-avatar>
      <b-avatar text="BV" variant="primary"></b-avatar>
      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
      <b-avatar text="OK" variant="danger"></b-avatar>
      <b-avatar variant="warning"></b-avatar>
      <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
      <b-avatar icon="music-note" variant="success"></b-avatar>
    </b-avatar-group>
    <div>等人都喜欢了</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['text']
}

</script>
