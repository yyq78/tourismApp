<template>
  <div class="hot">
    <div class='hot-top'>
			
			<img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
			<span>本周热门榜单</span>
			<span class='hot-title'>全部榜单  ></span>

		</div>

    <ul class="hot-list">

      <li class="hot-item" v-for="item in hotList" :key="item.id">
        <img :src="item.imgUrl" alt="item.title">
        <p>{{item.title}}</p>
        <p>
           <span class="hot-mark">￥{{item.price}}</span>起
        </p>
      </li>

    </ul>

  </div>
</template>

<script>
  export default{
    props:['hotList'],
    data () {
      return {
       
      }
    }
  }
</script>

<style scoped lang='stylus'>
@import '~css/common.styl';

  .hot{
    margin-top:.2rem;
    font-size:.28rem;
    background-color:#fff;
  }
  .hot .hot-top{
    padding:.2rem;
    position:relative;
  }
  .hot .hot-top img{
    width:.3rem;
    height:.3rem;
  }
  .hot span.hot-title{
    position:absolute;
    right:.2rem;
  }
  .hot-list{
    height:3rem;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    height:3.5rem;
  }
  .hot-item{
    display:inline-block;
    width:2rem;
    height:2rem;
    padding:.2rem .25rem;
    text-align:center;
  }
  .hot-item img{
    width:100%;
    height:100%;
  }
  .hot-item p{
    text-align:center;
    margin-top:.1rem;
    textOverflow();
  }
  .hot-item p .hot-mark{
    color:#ff8300;
	  font-size:.32rem;
  }
</style>