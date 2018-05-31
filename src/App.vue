<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.initSreen()
  },
  methods: {
    initSreen () {
      if (this.IsPC) {
        this.$router.push('/home')
      } else {
        window.alert(1)
      }
    },
    IsPC () {
      var userAgentInfo = navigator.userAgent
      // Mozilla/5.0 (Windows NT 6.1; WOW64; rv:46.0) Gecko/20100101 Firefox/46.0
      console.log(userAgentInfo)
      var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break }
      }
      return flag
    }
  }
}
</script>
<style>
*{
  margin: 0;
  padding:0;
  font-size: 12px;
  font-family: '微软雅黑';
}
</style>
