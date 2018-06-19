export default {
  data () {
    return {
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (to.hash) {
      const anchor = document.getElementById(to.hash.replace('#', ''))
      document.documentElement.scrollTop = anchor.offsetTop - 100
    }
  },
  methods: {
  }
}
