<template>
  <div id="head" class="main">
    <el-row>
      <el-col :span="7">
        <router-link class="logo" tag="div" to="/pc/home">
          <div>
            <img class="logo_img" src="@/assets/head/logo_ct.png" alt="">
          </div>
          <div>
            <p class="logo_title">春 藤 科 技</p>
            <p class="logo_en">ChunTeng Technology</p>
          </div>
        </router-link>
      </el-col>
      <el-col :span="14">
        <el-menu router unique-opened :default-active="activeIndex"
         class="el-menu-demo" mode="horizontal">
          <el-menu-item v-if="item.children.length === 0" v-for="item in headJson" :index="'/pc/' + item.index" :key="item.index">{{item.name}}</el-menu-item>
          <el-submenu v-else :index="item.index" popper-class="center_item">
            <template slot="title">{{item.name}}</template>
             <el-menu-item v-for="(child, index) in item.children" :key="'sub' + child.index" :index="'/pc/' + item.index + '/' + index" >{{child.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HEADJSON from '@/json/head.json'

export default {
  name: 'Head',
  data () {
    return {
      activeIndex: '1',
      headJson: HEADJSON
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    _route (index) {
      console.log(index)
      this.$router.push('/pc/detail/' + index)
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  position: fixed;
  top:0;
  width:100%;
  z-index: 1000;
  background: #fff;
  border-bottom: solid 1px #e6e6e6;
  padding: 5px 0;
}
.logo{
  display: flex;
  padding-left: 10vw;
  line-height: 60px;
  // border-bottom: solid 1px #e6e6e6;
}
.logo_img{
  vertical-align: middle;
  width:60px;
  height:auto;
  cursor: pointer;
}
.logo_title{
  text-indent: .5em;
  line-height:35px;
  font-size: 16px;
  color:#666;
  cursor: pointer;
  font-family: '仿宋, Courier New, Courier, monospace';
}
.logo_en{
  line-height:20px;
  color:#666;
  cursor: pointer;
  font-family: '仿宋, Courier New, Courier, monospace';
}
.center_item{
  text-align: center
}
</style>
