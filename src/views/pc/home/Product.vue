<template>
  <div>
    <p class="title">产 品 服 务</p>
    <el-carousel type="card" :autoplay="false" indicator-position="none" style="padding-bottom:10px">
      <el-carousel-item v-for="(product, index) in productJson" :key="'product' + index">
        <img class="p_img" :src="product.imgUrl" alt="">
       <h2 class="p_title">{{product.title}}</h2>
       <p class="p_content">{{product.content}}</p>
      </el-carousel-item>
    </el-carousel>
    <!-- <el-row class="content">
      <el-col :span="8" v-for="(product, index) in productJson" :key="product.icon" v-if="index < 3">
        <section><i class="iconfont" :class="product.icon"></i></section>
        <section><p>{{product.title}}</p></section>
        <section><article>
          {{product.content}}
        </article></section>
      </el-col>
    </el-row>
    <el-row class="content mt50">
      <el-col :span="8" v-for="(product, index) in productJson" :key="product.icon" v-if="index >= 3">
        <section><i class="iconfont" :class="product.icon"></i></section>
        <section><p>{{product.title}}</p></section>
        <section><article>
          {{product.content}}
        </article></section>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import PRODUCTJSON from '@/json/home/product.json'

export default {
  name: 'Product',
  data () {
    return {
      productJson: PRODUCTJSON
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
.p_img{
  width:100%;
  height:auto;
}
.p_title{
  padding: 0 5px;
  text-indent: 1em;
}
.p_content{
  line-height: 20px;
  padding: 0 5px;
  text-indent: 2em;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient:vertical;
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
