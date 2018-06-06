<template>
  <div id="head" class="main">
    <el-row>
      <el-col :span="10">
        <div class="logo">
          <img class="logo_img" src="@/assets/head/logoHead.png" alt="">
        </div>
      </el-col>
      <el-col :span="14">
        <el-menu router unique-opened :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item v-if="item.children.length === 0" v-for="item in headJson" :index="item.index" :key="item.index">{{item.name}}</el-menu-item>
          <el-submenu v-else :index="item.index" popper-class="center_item">
            <template slot="title">{{item.name}}</template>
             <el-menu-item v-for="child in item.children" :index="child.index" :key="child.index">{{child.name}}</el-menu-item>
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
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
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
}
.logo{
  padding-left: 10vw;
  line-height: 60px;
  border-bottom: solid 1px #e6e6e6;
}
.logo_img{
  vertical-align: middle;
}
.center_item{
  text-align: center
}
</style>
