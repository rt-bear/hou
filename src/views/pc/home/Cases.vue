<template>
  <div>
    <p class="title">解决方案</p>
    <el-row class="content">
      <el-col :span="8" v-for="(_case, index) in caseJson" :key="'case' + index" v-if="index < 3">
        <section><i class="iconfont" :class="_case.icon"></i></section>
        <section><p>{{_case.title}}</p></section>
        <section><article>
          {{_case.content}}
        </article></section>
      </el-col>
    </el-row>
    <el-row class="content mt50">
      <el-col :span="8" v-for="(_case, index) in caseJson" :key="'case2' + index" v-if="index >= 3">
        <section><i class="iconfont" :class="_case.icon"></i></section>
        <section><p>{{_case.title}}</p></section>
        <section><article>
          {{_case.content}}
        </article></section>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CASEJSON from '@/json/home/case.json'

export default {
  name: 'Cases',
  data () {
    return {
      caseJson: CASEJSON
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
