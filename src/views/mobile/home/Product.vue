<template>
  <div>
    <p class="title">主要产品</p>
    <div>
      <div class="content"  v-for="product in productJson" :key="product.icon">
        <section><i class="iconfont" :class="product.icon"></i></section>
        <section class="_right">
          <h3>{{product.title}}</h3>
          <article>
          {{product.content}}
        </article>
        </section>
      </div>
    </div>

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
  font-size: 30px;
  font-weight: 200;
  color: #555;
  text-align: center;
  line-height: 60px;
}
.content{
   display:flex;
   width:90%;
   margin:5px auto;
   padding: 3% 2%;
   border: #d4d4d4 solid 0px;
   box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
   border-radius: 5px;
  .iconfont{
    font-size:1.5rem;
    color:#36A0DA;
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
  ._right{
    margin-left: 10px;
    padding: 2% 2%;
  }
  p{
    font-weight: bold;
    font-size: 18px;
    margin-top: 8px;
  }
  article{
    width:60%;
    font-size: 14px;
    font-weight: 200;
    line-height: 22px;
  }
}
.mt50{
  margin-top:50px;
}
</style>
