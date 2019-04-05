<template>
  <div class="like">

    <div class="like-top">

      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢" />
      猜你喜欢

    </div>

    <ul class="like-list">

      <li class="like-item  border-bottom" v-for="item in likeList" :key="item.id">

        <div class="like-img">
          <img :src="item.imgUrl" alt="item.title" />
        </div>

        <div class="like-text">

          <div class='like-title'>
            {{item.title}}
          </div>

          <div class='like-message'>
            {{item.msg}}条评论
          </div>

          <div class='like-map'>
            <span class='like-mark'>¥<b>{{item.price}}</b></span>起
            <span class='like-item-map'>{{item.map}}</span>
          </div>

        </div>

      </li>

    </ul>
  </div>

</template>

<script>
  export default {
     props:['likeList'],
    data() {
      return {
      
      }
    }
  }
</script>

<style scoped>
  .like{
    margin-top:.2rem;
    background:#fff;
  }
  .like-top{
    font-size:.28rem;
    padding:.2rem;
  }
  .like-top img{
    width:.3rem;
    height:.3rem;
    vertical-align:-2px;
  }
  .like-list{
    font-size:.28rem;
    overflow: hidden;
  }
  .like-item{
    width:100%;
    overflow:hidden;
    padding:.2rem 0 .2rem .2rem;
    position:relative;
  }
  .like-img{
    width:2rem;
    height:2rem;
    float:left;
  }
  .like-img img{
    width:100%;
    height:100%;
  
  }
  .like-text{
    float:left;
    padding-left:.2rem;
    line-height:.44rem;
    font-size:.24rem;
  }
  .like-text .like-title{
    margin-top:.2rem;
    font-size:.32rem;
    
  }
  .like-text .like-message{
    margin-top:.2rem;
  }
  .like-text .like-map{
    margin-top:.22rem;
  }
  .like-mark{
    color:#ff8300;
    position:relative;
    
  }
  .like-mark b{
    font-size:.36rem;
  }
  .like-item-map{
    position:absolute;
    right:.44rem;
  }
</style>