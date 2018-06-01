<template>
  <div>
    <p class="title">解决方案</p>
    <el-row class="content">
      <el-col :span="6">
        <div class="sol sol5">
          <section style="padding-top:115px;"><i class="iconfont icon-zhizuo"></i></section>
          <section><p>在线课程建设解决方案</p></section>
          <section>
            <article>
            本方案旨在为学校信息化建设的核心领域——“教”与“学”提供一体化解决方案，助力学校建立起一整套先进、完善、可持续的信息化教学服务体系
           </article>
            <button type="text">查看详情</button>
          </section>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Cases',
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
  width: 100%;
  height:100%;
  padding: 0 5%;
  overflow: hidden;
  background: #373d41;
  text-align: center;
  .iconfont{
    font-size:72px;
    color:#fff;
  }
  p{
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;
    text-align: center;
    color: #fff;
    width: 60%;
    margin: 38px auto auto auto;
  }
  article{
    width: 80%;
    font-size: 14px;
    line-height: 22px;
    margin: 30px auto auto auto;
    color: #FFF;
    text-align: center;
  }
  button{
    font-size: 14px;
    margin: 55px auto auto auto;
    text-align: center;
    border: 1px solid #fff;
    color: #FFF;
    display: block;
    width: 142px;
    height: 35px;
    line-height: 35px;
    background: transparent;
  }
  .sol{
    height:423px;
  }
}
.sol5{
  background: url('http://p9hf7mh5h.bkt.clouddn.com/homeSol5.png') no-repeat;
}
</style>
