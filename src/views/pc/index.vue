<template>
  <div>
    <Head></Head>
    <router-view/>
    <Footer></Footer>
    <Tool></Tool>
  </div>
</template>

<script>

import Head from './Head'
import Footer from './Footer'
import Tool from './Tool'

export default {
  name: 'Home',
  components: {
    Head,
    Footer,
    Tool
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
