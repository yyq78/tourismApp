<template>
  <div class="wrapper" ref="container">
    <div class="content">
      <!--hot-->
      <div class="hot">
        <div class="hot-top">
          热门城市
        </div>
        <ul class="hot-list">
          <li class="hot-item" v-for="item in hotCities" :key=item.id @click="changeCity(item.name)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <!--sort-->
      <div class="sort">
        <div class="sort-top">字母排序</div>
        <ul class="sort-list">
          <li v-for="(item,key) in cities" @click='changeSort(key)'>{{key}}</li>
          
        </ul>
      </div>

      <!--list-->
      <div class="list">
        <div v-for="(val,key) in cities" :ref="key">
          <div class="item-title">{{key}}</div>
          <ul class="item-msg">
            <li v-for="item in val" :key=item.id @click="changeCity(item.name)">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll';
import {mapMutations} from 'vuex'
export default {
  props:["hotCities","cities"],
  data(){
    return {
      scroll:''
    }
  },
  methods: {
    changeCityName(){},
    changeSort(sortName){
      var dom=this.$refs[sortName][0];
      this.scroll.scrollToElement(dom);
    },
    changeCity(cityName){
      this.$store.commit('changeCityName',cityName);
      // changeCityName(state,cityName);
      this.$router.push('/');
    },
    // ...mapMutations(['changeCityName'])
  },
  mounted() {
    let wrapper =this.$refs['container'];
    this.scroll = new BScroll(wrapper);
  }
}
</script>

<style>
  .wrapper{
    position:absolute;
    left:0;
    right:0;
    bottom:.88rem;
    top:.88rem;
    overflow:hidden;
  }
  .hot-top{
    font-size:.24rem;
    padding:.2rem;
  }
  .hot-list{
    overflow:hidden;
    position:relative;
   
  }

  .hot-list:before{
    content:" ";
    position:absolute;
    left:33.33%;
    width:33.33%;
    height:100%;
    border-right:.02rem solid #ddd;
    border-left:.02rem solid #ddd;
  }
  .hot-list li{
    position:relative;
    float:left;
    width:33.33%;
    font-size:.28rem;
    line-height:.9rem;
    text-align: center;
    border-bottom: .02rem solid #ddd;
    margin-bottom:-1px;
  }
 .sort-top{
    font-size:.24rem;
    padding:.2rem;
  }
  .sort-list{
    overflow:hidden; 
  }
  .sort-list li{
    float:left;
    width:16.66%;
    font-size:.28rem;
    line-height:.9rem;
    text-align: center;
  }

  .item-title{
    font-size:.24rem;
    padding:.2rem;
  }
  .item-msg{
    overflow:hidden;
    position:relative;
  }
  .item-msg li{
    position:relative;
    float:left;
    width:25%;
    font-size:.28rem;
    line-height:.9rem;
    text-align: center;
    border-bottom: .02rem solid #ddd;
    margin-bottom:-1px;
  }
  .item-msg:before{
    content:" ";
    position:absolute;
    left:25%;
    width:50%;
    height:100%;
    border-right:.02rem solid #ddd;
    border-left:.02rem solid #ddd;
  }
  .item-msg:after{
    content:" ";
    position:absolute;
    right:50%;
    width:0;
    height:100%;
    border-left:.02rem solid #ddd;
  }
 
</style>