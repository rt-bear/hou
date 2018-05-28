<template>
  <div id="head" class="main">
    <el-row>
      <el-col :span="10">
        <div class="logo">
          <img class="logo_img" src="@/assets/head/logoHead.png" alt="">
        </div>
      </el-col>
      <el-col :span="14">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">我们</el-menu-item>
          <el-submenu index="2" popper-class="center_item">
            <template slot="title">主要产品</template>
             <el-menu-item index="2-1">实践教学管理系统</el-menu-item>
             <el-menu-item index="2-2">专业教学资源库平台</el-menu-item>
             <el-menu-item index="2-3">云课堂系统</el-menu-item>
             <el-menu-item index="2-4">职教云平台</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">解决方案</template>
             <el-menu-item index="3-1">在线课程建设解决方案</el-menu-item>
             <el-menu-item index="3-2">VR+专业实训室建设解决方案</el-menu-item>
             <el-menu-item index="3-3">智慧校园建设解决方案</el-menu-item>
             <el-menu-item index="3-4">职业院校教学服务信息化建设一体化解决方案 </el-menu-item>
          </el-submenu>
          <el-menu-item index="4">职教研究</el-menu-item>
          <el-menu-item index="5">案例</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      activeIndex: 1
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
