<template>
  <div class="vacation">
    <div class="vacation-top">
      周末去哪儿
    </div>
    <ul>
      <li class="vacation-item" v-for="item in vacationList" :key=item.id>
        <div class="img-container">
          <img :src="item.imgUrl" alt="item.title">
        </div>
        
        <div class="vacation-text">
          <div class="vacation-title">{{item.title}}</div>
          <div class="vacation-msg">{{item.msg}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
   props:['vacationList'],
  data (){
    return {
    }
  }
}
</script>


<style scoped lang="stylus">
  @import '~css/common.styl';
  .vacation{
    margin-top:.2rem;
    font-size:.28rem;
    height:0;
    padding-bottom: 37.43%;
    background:#fff;
  }
  .vacation-top{
    padding:.2rem;
    background:#f5f5f5;
  }
  .vacation-item{
    margin-bottom:.2rem;
    width:100%;
    background:#fff;
  }

  .vacation-item img{
    width:100%;
  }
  .vacation-text{
    padding: .2rem;
  }
  .vacation-title{
    color:#212121;
    line-height:.44rem;
  }
  .vacation-msg{
    font-size:.2rem;
    line-height:.42rem;
    color:#616161;
    padding-right:1.4rem;
    textOverflow();
  }
</style>