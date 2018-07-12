<template>
  <div>
    <p class="title">解 决 方 案</p>
    <el-row class="content">
      <el-col :span="8" v-for="(_case, index) in caseJson" :key="'case' + index" v-if="index < 3" >
        <div class="container">
          <div class="case_title">
            <section><i class="iconfont" :class="_case.icon"></i></section>
            <section><p class="c_title font_size_h1">{{_case.title}}</p></section>
          </div>
          <div class="case_desc">
            <article class="c_content">{{_case.content}}</article>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="content mt50">
      <el-col :span="8" v-for="(_case, index) in caseJson" :key="'case2' + index" v-if="index >= 3">
        <div class="container">
          <div class="case_title">
            <section><i class="iconfont" :class="_case.icon"></i></section>
            <section><p class="c_title font_size_h1">{{_case.title}}</p></section>
          </div>
          <div class="case_desc">
            <article class="c_content">{{_case.content}}</article>
          </div>
        </div>
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
.container{
  overflow: hidden;
  width:350px;
  height:200px;
  margin:0 auto;
  &:hover .case_title{
    transform:translateY(-200px);
  }
  &:hover .case_desc{
    transform:translateY(-200px);
  }
}
.case_title{
  height:200px;
  padding-top:20px;
  box-sizing: border-box;
  color:#fff;
  background: #99cc33;
  margin-bottom: 10px;
  transition: .5s all;
  cursor: pointer;
}
.case_desc{
  padding-top:20px;
  box-sizing: border-box;
  text-indent: 2em;
  text-align: left;
  font-size: 14px;
  color:#555;
  background: #fff;
  transition: .5s all;
}
.content{
  text-align: center;
  .iconfont{
    font-size:108px;
  }
}
.mt50{
  margin-top:50px;
}
</style>
