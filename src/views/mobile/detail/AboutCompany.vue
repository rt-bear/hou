<template>
    <div id="mobile_AboutCompany">
        <section>
            <img src="http://p9hf7mh5h.bkt.clouddn.com/banner01.jpg" alt="">
        </section>
        <div class="container">
            <el-tabs v-model="activeName" class="tab">
                <el-tab-pane v-for="item in aboutCompany" :name='item.index' :key="item.index" :label="item.title">
                    <h2 class="c_title">{{item.title}}</h2>
                    <p class="c_content" v-for="p in item.content.split('/n')" :key="p">{{p}}</p>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import ABOUTCOMPANY from '@/json/detail/aboutCompany.json'

export default {
  name: 'AboutCompany',
  components: {},
  data () {
    return {
      activeName: 'decription',
      aboutCompany: ABOUTCOMPANY
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#mobile_AboutCompany {
  margin-top: calc(40px + 3vh);
  .el-tabs__item{
      font-size: 18px;
  }
  .el-tabs__nav-scroll{
      padding-left: .5em;
  }
  img {
    width: 100%;
    height: auto;
  }
  .container {
    width: 100%;
    display: flex;
    aside {
      width: 35%;
      margin-right: 5%;
    }
  }
  .c_title {
    font-size: 26px;
    color: #333;
    line-height: 40px;
    font-weight: 200;
    margin-bottom: 15px;
    text-align: center;
  }
  .c_content {
    height: auto;
    line-height: 200%;
    color: #555;
    font-size: 16px;
    font-weight: 200;
    white-space:pre-wrap;
    text-indent: 2em;
  }
}
</style>
