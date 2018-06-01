<template>
  <div>
    <p class="title">业务体系</p>
    <el-row class="content">
      <el-col :span="8">
        <section><i class="iconfont icon-zhizuo"></i></section>
        <section><p>内容制作</p></section>
        <section><article>
          以职业教育专业人才培养模式与课程体系改革为目标，制作动画、视频、虚拟、VR等各类多媒体素材，形成微课、慕课、电子教材、在线课程、实训软件、教学系统等数字资源，为职业教育提供海量优质资源
        </article></section>
      </el-col>
      <el-col :span="8">
        <section><i class="iconfont icon-yanfa"></i></section>
        <section><p>平台研发</p></section>
        <section><article>
          以学生为中心，以应用为导向，以云计算、大数据、移动互联网等新一代信息技术为支撑，研发符合职业教育用户特点的软件产品，提升职业院校管理和服务水平，提高人才培养质量
        </article></section>
      </el-col>
      <el-col :span="8">
        <section><i class="iconfont icon-yunying"></i></section>
        <section><p>数据运营</p></section>
        <section><article>
          在深化职业教育内容与平台服务的基础上，凭借对职业教育的深刻理解和持续服务，构建职业教育互联网服务体系，汇集职业教育教学全过程数据，并进行深入挖掘和分析，为用户进一步提供精细化服务
        </article></section>
      </el-col>
    </el-row>
    <div class="bannerSma">
      <p>扎根职教  服务职教</p>
      <article>点为专注职业教育产品与服务，致力于内容制作、平台研发、数据运营三大业务，为职业院校专业建设、教学服务、数字校园、智慧教育、创新创业教育、集团化办学等提供解决方案。扎根职教，服务职教，以技术推动中国职业教育改革和发展</article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Business',
  data () {
    return {
    }
  }
}
</script>

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
    font-size:72px;
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
      font-size: 18px;
      color: #333;
      line-height: 44px;
      text-align: center;
  }
  article{
      font-size: 13px;
      color: #777;
      line-height: 24px;
      margin-top: 12px;
      text-align: center;
      padding:0 70px;
  }
}
.bannerSma{
  width: 100%;
  text-align: center;
  margin-top: 50px;
  padding: 45px 0;
  background: url('http://p9hf7mh5h.bkt.clouddn.com/smallBannerBg.jpg') no-repeat center top;
  background-size: cover;
  p{
    font-size: 40px;
    font-weight: bold;
    color: #fff;
  }
  article{
    width: 60%;
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    padding-top: 24px;
    margin:0 auto;
    font-weight: 200;
  }
}
</style>
