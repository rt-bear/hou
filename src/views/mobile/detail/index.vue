<template>
  <div id="mobile_detail">
      <AboutCompany></AboutCompany>
  </div>
</template>

<script>
import AboutCompany from './AboutCompany'

export default {
  name: 'Detail',
  components: {
    AboutCompany
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#pc_detail{
  margin-top:60px;
  img{
    width:100%;
    height:auto
  }
}
</style>
