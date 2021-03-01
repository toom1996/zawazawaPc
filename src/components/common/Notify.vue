<template>
  <div>
    <div id="ofBar">
      <div id="ofBar-logo">
        <img
          alt="creative-tim-logo"
          src="../../static/logo-square.png"
        />
      </div>
      <div id="ofBar-content" v-html="text">
        🔥
      </div>
      <div id="ofBar-right">
        <a
          href="https://www.creative-tim.com/campaign?ref=demos-2021"
          target="_blank"
          id="btn-bar"
          >View Offers</a
        ><a id="close-bar" @click="hideNotify">×</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    hideNotify () {
      document.getElementById('ofBar').style.display = 'none'
    }
  },
  data () {
    return {}
  },
  props: ['text']
}
</script>
<style>
#ofBar {
    background: #1A1E21;
    z-index: 999999999;
    font-size: 16px;
    color: #fff;
    padding: 16px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 20px;
    width: 80%;
    border-radius: 5px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
}

#ofBar-logo img {
    height: 3rem;
}

#ofBar-right {
    display: flex;
    align-items: center;
}

#btn-bar {
    opacity: 1;
}
#btn-bar {
    background-color: #fff;
    color: #40312d;
    border-radius: 4px;
    padding: 10px 20px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    font-size: 12px;
    opacity: .95;
    margin-right: 20px;
    box-shadow: 0 5px 10px -3px rgb(0 0 0 / 23%), 0 6px 10px -5px rgb(0 0 0 / 25%);
}

a:focus, a:hover {
    color: #89229b;
    text-decoration: none;
}

#close-bar {
    font-size: 17px;
    opacity: 0.5;
    cursor: pointer;
}

#close-bar:hover {
    opacity: 1;
}

a:not([href]):not([tabindex]), a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {
    color: inherit;
    text-decoration: none;
}
</style>
