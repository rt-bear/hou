<template>
  <div id="AboutProduct">
      <section>
        <img :src="product.imgUrl" alt="">
      </section>
      <div class="container">
          <h2 class="c_title">{{product.title}}</h2>
          <h2 class="c_content">{{product.content}}</h2>
      </div>
  </div>
</template>

<script>
import ABOUTPRODUCT from '@/json/home/product.json'

export default {
  name: 'aboutProduct',
  components: {
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      if (to.params.index) {
        // this.$router.go(0)
        this.product = this.aboutProduct[this.$route.params.index]
        console.log(this.product)
      }
    }
  },
  data () {
    return {
      aboutProduct: ABOUTPRODUCT,
      product: {}
    }
  },
  mounted () {
    this.product = this.aboutProduct[this.$route.params.index]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#AboutProduct{
    margin-top:60px;
    img{
        width:100%;
        height:auto
    }
    .container{
        width:100%;
        max-width: 1200px;
        margin:0 auto;
        margin-top:60px;
    }
    .c_title{
        font-size: 26px;
        color:#333;
        line-height: 40px;
        font-weight: 200;
        margin-bottom: 15px;
    }
    .c_content{
        height: auto;
        line-height: 200%;
        color: #555;
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 200;
        text-indent: 2em;
    }
}
</style>
