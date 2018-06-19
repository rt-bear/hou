<template>
  <div id="carousel">
    <el-carousel height="112px">
      <el-carousel-item><img src="http://p9hf7mh5h.bkt.clouddn.com/banner01.jpg" alt=""></el-carousel-item>
      <el-carousel-item><img src="http://p9hf7mh5h.bkt.clouddn.com/banner02.jpg" alt=""></el-carousel-item>
      <el-carousel-item><img src="http://p9hf7mh5h.bkt.clouddn.com/banner03.jpg" alt=""></el-carousel-item>
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
<style lang="scss" scoped>
#carousel{
  margin-top: calc(40px + 3vh);
  img{
    width:100%;
    height:auto;
  }
}
</style>
