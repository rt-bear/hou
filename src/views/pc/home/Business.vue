<template>
  <div>
    <p class="title">业务体系</p>
    <el-row class="content">
      <el-col :span="8" v-for="business in businessjson" :key="business.icon">
        <section><i class="iconfont" :class="business.icon"></i></section>
        <section><p>{{business.title}}</p></section>
        <section><article>
          {{business.content}}
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
import BUSINESSJSON from '@/json/home/business.json'

export default {
  name: 'Business',
  data () {
    return {
      businessjson: BUSINESSJSON
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
  .icon-fanganzhizuo_huaban{
    color:#36A0DA;
  }
  .icon-yanfa{
    color:#00AE8C;
  }
  .icon-yunyingjingli-{
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
