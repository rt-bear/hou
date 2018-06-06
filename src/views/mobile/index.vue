<template>
  <div @click="closeMenu">
    <Head ref="mobilehead"></Head>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

import Head from './Head'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    Head,
    Footer
  },
  data () {
    return {
    }
  },
  methods: {
    closeMenu () {
      this.$refs.mobilehead.menuShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
