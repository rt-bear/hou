<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: '大连春藤网络科技有限公司',
    meta: [
      { name: 'keywords', content: '春藤,春藤科技，教育科技，资源库建设，在线课程开发，职教云平台，教育信息化，数字校园，网络课程，在线教育' },
      { name: 'description', content: '春藤科技是一家专注于职业教育专业建设、数字资源开发、互联网服务运营，教育信息化，教育软件研发的创新型教育科技公司。致力于用互联网思维和前沿信息技术改造传统教育，对教育技术、教学方法、虚拟仿真技术进行创新性的研发与应用。' }
    ]
  },
  data () {
    return {
      screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
  },
  mounted () {
    this.initSreen()
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  // watch: {
  //   screenWidth () {
  //     this.watchSreen()
  //   }
  // },
  methods: {
    initSreen () {
      // if (this.IsPC && this.screenWidth >= 1024) {
      //   this.$router.push('/pc/home')
      // } else {
      //   this.$router.push('/mobile/home')
      // }
      this.$router.push('/pc/home')
    },
    watchSreen () {
      const path = this.$route.path
      if (this.IsPC && this.screenWidth >= 1024) {
        this.$router.push(path.replace('mobile', 'pc'))
      } else {
        this.$router.push(path.replace('pc', 'mobile'))
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
  font-family: '微软雅黑';
}
</style>
