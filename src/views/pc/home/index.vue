<template>
  <div>
    <Carousel></Carousel>
    <!-- <Business></Business> -->
    <Product></Product>
    <Cases></Cases>
  </div>
</template>

<script>

import Carousel from './Carousel'
import Business from './Business'
import Product from './Product'
import Cases from './Cases'

export default {
  name: 'Home',
  components: {
    Carousel,
    Business,
    Product,
    Cases
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
