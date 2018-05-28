<template>
  <div>
    <Head></Head>
    <Carousel></Carousel>
    <Business></Business>
    <Product></Product>
    <Program></Program>
    <Cases></Cases>
    <Footer></Footer>
  </div>
</template>

<script>

import Head from './Head'
import Carousel from './Carousel'
import Business from './Business'
import Product from './Product'
import Program from './Program'
import Cases from './Cases'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    Head,
    Carousel,
    Business,
    Product,
    Program,
    Cases,
    Footer
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
