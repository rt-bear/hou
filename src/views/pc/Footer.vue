<template>
  <div class="footer">
    <div style="width:100%;margin-bottom:10px;">
      <el-row class="font_size_h3" style="margin-bottom:10px;">
        <el-col :span="4" :offset="2" class="font_size_h3">关于我们</el-col>
        <el-col :span="4" >产品服务</el-col>
        <el-col :span="4" >解决方案</el-col>
        <el-col :span="4" >职教创新</el-col>
        <el-col :span="4" >人才合作</el-col>
      </el-row>
      <el-row>
        <el-col :span="4" :offset="2">
          <ul>
            <li>企业概况</li>
            <li>企业文化</li>
            <li>产业背景</li>
            <li>社会责任</li>
          </ul>
        </el-col>
        <el-col :span="4" >
          <ul>
            <li>专业教学资源库平台</li>
            <li>职教云平台</li>
            <li>数字教育资源</li>
            <li>3D虚拟仿真系列</li>
            <li>网络培训系统</li>
          </ul>
        </el-col>
        <el-col :span="4" >
          <ul>
            <li>院校定制方案</li>
            <li>云平台智慧教育</li>
            <li>在线课程建设</li>
            <li>智慧校园建设</li>
            <li>数字资源建设</li>
            <li>职业院校教育信息化建设</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div style="width:90%;margin:0 auto;border-top:1px solid #60606d;padding-top:10px;">
      <section>
        <span>CopyRight 2011-2017 All Rights Reserved</span>
      </section>
      <section>
        <span>辽ICP备18009745号</span>
      </section>
      <!-- <section>
        <span>电话：13704266460</span>&nbsp;&nbsp;&nbsp;
        <span>联系人：侯经理</span>
      </section> -->
      <!-- <section>
        <span>地址：辽宁省大连高新技术产业园区高新街2号</span>
      </section> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer{
  width: 100%;
  line-height: 25px;
  text-align: center;
  padding:20px 0 10px;
  color: #ccc;
  background: #06060b;
  span{
    font-size: 14px;
  }
  li{
    list-style: none;
    cursor: pointer;
    line-height: 25px;
    font-size:12px;
  }
}
</style>
