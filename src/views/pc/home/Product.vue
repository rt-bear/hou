<template>
  <div>
    <p class="title">主要产品</p>
    <el-row class="content">
      <el-col :span="8">
        <section><i class="iconfont icon-zhizuo"></i></section>
        <section><p>实践教学管理系统</p></section>
        <section><article>
          精准 安全 联动 高效，全方位掌控 全流程服务 全过程数据
        </article></section>
      </el-col>
      <el-col :span="8">
        <section><i class="iconfont icon-yanfa"></i></section>
        <section><p>专业教学资源库平台</p></section>
        <section><article>
          国家级职业教育专业教学资源库运行平台
        </article></section>
      </el-col>
      <el-col :span="8">
        <section><i class="iconfont icon-yunying"></i></section>
        <section><p>云课堂系统</p></section>
        <section><article>
          打造助教、助学、助训环节，形成闭环
        </article></section>
      </el-col>
    </el-row>
    <el-row class="content mt50">
      <el-col :span="8">
        <section><i class="iconfont icon-zhizuo"></i></section>
        <section><p>职教云平台</p></section>
        <section><article>
          以服务学生为中心，以应用为导向，注重过程数据的累积与分析
        </article></section>
      </el-col>
      <el-col :span="8">
        <section><i class="iconfont icon-yanfa"></i></section>
        <section><p>数字教育资源</p></section>
        <section><article>
          一体化资源开发服务  支持在线课程和专业教学资源库建设
        </article></section>
      </el-col>
      <el-col :span="8">
        <section><i class="iconfont icon-yunying"></i></section>
        <section><p>虚拟仿真软件</p></section>
        <section><article>
          将职业体验与实践教学相结合，利用虚拟现实技术把工作现场植入教学
        </article></section>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.title{
  font-size: 45px;
  font-weight: 200;
  color: #555;
  text-align: center;
  line-height: 150px;
}
.content{
  text-align: center;
  .iconfont{
    font-size:54px;
  }
  .icon-zhizuo{
    color:#36A0DA;
  }
  .icon-yanfa{
    color:#00AE8C;
  }
  .icon-yunying{
    color:#E95532;
  }
  p{
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin-top: 8px;
  }
  article{
    width:60%;
    font-size: 14px;
    font-weight: 200;
    line-height: 22px;
    text-align: center;
    margin: 16px auto 0;
  }
}
.mt50{
  margin-top:50px;
}
</style>
