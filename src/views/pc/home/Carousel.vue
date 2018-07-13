<template>
  <div id="pc_carousel">
    <el-carousel>
      <el-carousel-item><img src="http://p9hf7mh5h.bkt.clouddn.com/%E9%A6%96%E9%A1%B5-%E6%99%BA%E6%85%A7%E8%81%8C%E6%95%99%E4%BA%91%E5%B9%B3%E5%8F%B0.jpg" alt=""></el-carousel-item>
      <el-carousel-item><img src="http://p9hf7mh5h.bkt.clouddn.com/%E9%A6%96%E9%A1%B5-%E6%95%99%E8%82%B2%E4%BF%A1%E6%81%AF%E5%8C%96%E5%BB%BA%E8%AE%BE.jpg" alt=""></el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#pc_carousel{
  margin-top:60px;
  img{
    width:100%;
    height:auto;
  }
  .el-carousel__container{
      min-height:403px;
  }
}
</style>
