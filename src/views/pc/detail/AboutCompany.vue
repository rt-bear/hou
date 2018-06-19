<template>
  <div id="AboutCompany">
      <section>
        <img src="http://p9hf7mh5h.bkt.clouddn.com/banner01.jpg" alt="">
      </section>
      <div class="container">
          <aside>
            <el-menu router unique-opened :default-active="activeIndex" class="el-menu-demo">
            <el-menu-item v-for="item in aboutCompany" :index='"detail#" + item.index' :key="item.index">{{item.title}}</el-menu-item>
            </el-menu>
          </aside>
          <section class="content">
              <div v-for="item in aboutCompany" :key="item.index" :id="item.index">
                  <h2 class="c_title">{{item.title}}</h2>
                  <p class="c_content">{{item.content}}</p>
              </div>
          </section>
      </div>
  </div>
</template>

<script>
import ABOUTCOMPANY from '@/json/detail/aboutCompany.json'

export default {
  name: 'AboutCompany',
  components: {
  },
  data () {
    return {
      activeIndex: '1',
      aboutCompany: ABOUTCOMPANY
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#AboutCompany{
    img{
        width:100%;
        height:auto
    }
    .container{
        width:100%;
        margin-top:60px;
        display: flex;
        aside{
            width:35%;
            margin-right:5%;
        }
    }
    .c_title{
        font-size: 26px;
        color:#333;
        line-height: 40px;
        font-weight: 200;
        margin-bottom: 15px;
    }
    .c_content{
        height: auto;
        line-height: 200%;
        color: #555;
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 200;
    }
}
</style>
