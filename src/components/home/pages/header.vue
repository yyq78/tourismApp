<template>
  <div class="header">
    <div class="header-left">
      <span class='iconfont'>&#xe600;</span>
    </div>
    <div class="header-search">
      <span class='iconfont'>&#xe632;</span> 输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link to='/city'>
          {{city}}<span class='iconfont'>&#xe607;</span>
      </router-link>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
      computed: {
        ...mapState(['city'])
      }
  }
</script>
<style lang='stylus' scoped>
@import '~css/var.styl';

  .header{
    width:100%;
    line-height:.88rem;
    background-color: $bgcolor;
    color:$textcolor;
    font-size:.36rem;
    display: flex;
  }
  .header-search{
      flex:1;
      background:#fff;
      height:.6rem;
      margin:.14rem 0;
      border-radius:.1rem;
      color:#e4e7ea;
      line-height:.6rem;
      font-size:.28rem;
      padding-left:.2rem;
  }
  .header-left{
    width:.4rem;
    padding:0 .2rem;
    text-align:center;
    font-weight:bold;
  }
  .header-right{
    font-size:.28rem;
    padding:0 .2rem;
  }
  .header-right a{
    color:#fff;
  }
</style>