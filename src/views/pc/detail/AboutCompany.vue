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
                  <div v-for="(child, index) in item.children" :key="'child' + index" style="margin-bottom: 20px;">
                      <h3 class="font_size_h3" style="line-height:40px;color:#333">{{child.title}}</h3>
                      <ul>
                          <li v-for="(txt, index) in child.content" :key="'txt' + index" class="c_link">
                              <span style="font-family:Wingdings">Ø</span>
                              <a class="c_link_a font_size_h4" :href="txt.link" target="_blank">{{txt.text}}</a>
                          </li>
                      </ul>
                  </div>
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
        text-indent: 2em;
    }
    .c_link{
        line-height: 30px;
        list-style: none;
        text-indent: 3em;
        &:hover{
            color:#99cc33;
        }
    }
    .c_link_a{
        text-decoration: none;
        color:#555;
        &:hover{
            color:#99cc33;
        }
    }
}
</style>
