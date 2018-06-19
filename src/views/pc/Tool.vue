<template>
  <div id="tool">
      <section>
          <div class="toTop" v-show="toTopStatus" @click="toTop()"><i class="iconfont icon-topt01 icon_top"></i></div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Tool',
  data () {
    return {
      scrollTop: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    toTopStatus () {
      return this.scrollTop > 200
    }
  },
  methods: {
    handleScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    toTop () {
      let timer = null
      timer = setInterval(() => {
        if (document.documentElement.scrollTop > 0) {
          document.documentElement.scrollTop -= 20
        } else {
          clearInterval(timer)
        }
      }, 0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.toTop{
  position: fixed;
  bottom: 100px;
  right:50px;
}
.icon_top{
  display: block;
  width:50px;
  height:50px;
  font-size: 48px;
  color:rgb(104,106,112);
  z-index:1000;
}
</style>
