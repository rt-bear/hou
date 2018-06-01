<template>
  <div>
    <p class="title">解决方案</p>
    <el-row class="content">
      <el-col :span="6" v-for="item in cases" :key="item.id">
        <div class="sol sol5" @mouseenter="item.show = true" @mouseleave="item.show = false">
          <div class="sol_bg" v-if="item.bgUrl"
          :style="{ background: 'url('+ item.bgUrl +')', backgroundSize:'cover' , backgroundRepeat: 'noRepeat'}"></div>
          <div :class="item.show?'moveup':'movedown'">
            <section style="padding-top:115px;"><i class="iconfont icon-zhizuo"></i></section>
            <section><p>{{item.title}}</p></section>
          </div>
          <div :class="item.show?'opacityup':'opacitydown'">
            <section>
              <article>
              {{item.content}}
            </article>
              <button type="text">查看详情</button>
            </section>
          </div>
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
      show: false,
      cases: [
        {
          id: 'case1',
          show: false,
          title: '在线课程建设解决方案',
          content: '本方案旨在为学校信息化建设的核心领域——“教”与“学”提供一体化解决方案，助力学校建立起一整套先进、完善、可持续的信息化教学服务体系',
          bgUrl: 'http://p9hf7mh5h.bkt.clouddn.com/homeSol5.png'
        },
        {
          id: 'case2',
          show: false,
          title: 'VR+专业实训室建设解决方案 ',
          content: 'VR虚拟现实是职业教育领域新型教学手段，它改变了传统的“以教促学”的学习方式，营造了“自主学习”的新型学习环境。点为公司率先将VR技术融入教育教学，推出了“VR+专业实训室建设解决方案',
          bgUrl: 'http://p9hf7mh5h.bkt.clouddn.com/homeSol4.png'
        },
        {
          id: 'case3',
          show: false,
          title: '智慧校园建设解决方案 ',
          content: '点为智慧校园建设解决方案突出规划和设计，融合业务和技术，强调安全和运维，用未来校园的视角重构校园业务领域、业务流程和业务模式，建立基于通信、环境、数据和服务的框架和标准体系，旨在通过校园智能化推动教育现代化发展 ',
          bgUrl: 'http://p9hf7mh5h.bkt.clouddn.com/homeSol6.png'
        },
        {
          id: 'case4',
          show: false,
          title: '职业院校教学服务信息化建设一体化解决方案 ',
          content: '本方案旨在为学校信息化建设的核心领域——“教”与“学”提供一体化解决方案，助力学校建立起一整套先进、完善、可持续的信息化教学服务体系',
          bgUrl: 'http://p9hf7mh5h.bkt.clouddn.com/homeSol7.png'
        }
      ]
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
    position: relative;
    height:423px;
    &:hover{
      background-color:#249befb3;
    }
  }
  .sol_bg{
    position: absolute;
    top:0;
    left: 0;
    width:100%;
    height:423px;
  }
}
.sol5{
  background-repeat: no-repeat;
  background-size: cover;
}
.moveup{
  transform: translateY(-100px);
  transition: all 0.5s;
}
.movedown{
  transform: translateY(0);
  transition: all 0.5s;
}
.opacityup{
  transform: translateY(-100px);
  opacity: 1;
  transition: all 0.5s;
}
.opacitydown{
  opacity: 0;
  transition: all 0.5s;
}
</style>
