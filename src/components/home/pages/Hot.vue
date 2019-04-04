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
    data () {
      return {
        hotList:[
          {
            id:"01",
            imgUrl:"http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_250x250_145eeeb5.jpg",
            title:"成都大熊猫研究基地",
            price:19.8
          },
           {
            id:"02",
            imgUrl:"http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_250x250_986e4594.jpg",
            title:"都江堰",
            price:38
          },
           {
            id:"03",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1706/c4/c4b6c51a2ac942cfa3.img.jpg_250x250_24fa639b.jpg",
            title:"花舞人间",
            price:89
          },
          {
            id:"04",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1903/6b/6bf66a821f918235a3.water.jpg_250x250_29f8b89c.jpg",
            title:"蔚然花海",
            price:40
          },
          {
            id:"05",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1510/35/354c1ba2d51ba83d90.img.jpg_250x250_52366d7b.jpg",
            title:"成都浣花溪公园",
            price:47
          },
          {
            id:"06",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1809/6d/6de192f67ebc1470a3.img.jpg_250x250_443bdd9c.jpg",
            title:"漫花庄园",
            price:40
          },
          
        ]
      }
    }
  }
</script>

<style scoped lang='stylus'>
@import '~css/common.styl';

  .hot{
    margin-top:.2rem;
    font-size:.28rem;
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