<template>
  <div id="head" class="main">
    <div style="display:flex;justify-content:space-between;">
      <section class="logo">
        <img class="logo_img" src="@/assets/head/mobile_logo.jpg" alt="">
      </section>
      <section style="padding: 1.5vh 3vw; position:relative">
        <i class="iconfont icon-menu logo_icon" @click.stop="openMenu"></i>
      </section>
    </div>
    <div class="verticalMenu" v-if="menuShow" @click.stop>
      <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect"
      background-color="#00000066" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item v-if="item.children.length === 0" v-for="item in headJson" :index="item.index" :key="item.index">{{item.name}}</el-menu-item>
        <el-submenu v-else :index="item.index" popper-class="center_item" :key="item.index">
          <template slot="title">{{item.name}}</template>
            <el-menu-item v-for="child in item.children" :index="child.index" :key="child.index">{{child.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import HEADJSON from '@/json/head.json'

export default {
  name: 'Head',
  data () {
    return {
      activeIndex: '1',
      headJson: HEADJSON,
      menuShow: false
    }
  },
  mounted () {
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.menuShow = false
    },
    openMenu () {
      this.menuShow = !this.menuShow
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
  width:28vw;
  padding: 1.5vh 3vw;
}
.logo_img{
  width: 100%;
  height:auto;
  vertical-align: middle;
}
.logo_icon{
  font-size:40px;
  color: #999;
}
.center_item{
  text-align: center
}
.verticalMenu{
  width:100%;
  position: absolute;
  opacity: 1;
}
</style>
