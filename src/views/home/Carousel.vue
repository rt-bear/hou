<template>
  <div id="carousel">
    <el-carousel>
      <el-carousel-item><img src="@/assets/Carousel/banner01.jpg" alt=""></el-carousel-item>
      <el-carousel-item><img src="@/assets/Carousel/banner02.jpg" alt=""></el-carousel-item>
      <el-carousel-item><img src="@/assets/Carousel/banner03.jpg" alt=""></el-carousel-item>
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
  margin-top:60px;
  img{
    width:100%;
    height:auto
  }
}
</style>
