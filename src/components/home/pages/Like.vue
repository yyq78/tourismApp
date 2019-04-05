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
    data() {
      return {
        likeList: [
          {
            id: "01",
            imgUrl: "http://img1.qunarzz.com/sight/p0/1809/1f/1f39774291457a42a3.img.jpg_200x200_e2d8001d.jpg",
            title: "石象湖",
            msg: "3500",
            price: "80",
            map: "浦江县"
          },
          {
            id: "02",
            imgUrl: "http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg",
            title: "成都海昌极地公园",
            msg: "33425",
            price: "198",
            map: "双流县"
          },
          {
            id: "03",
            imgUrl: "http://img1.qunarzz.com/sight/p0/1706/c4/c4b6c51a2ac942cfa3.img.jpg_200x200_2805e881.jpg",
            title: "花舞人间",
            msg: "3585",
            price: "89",
            map: "新津县"
          },
          {
            id: "04",
            imgUrl: "http://img1.qunarzz.com/sight/p0/1512/3a/3ab83c0358208e8d90.img.jpg_200x200_14e2fbfd.jpg",
            title: "花水湾四季温泉谷",
            msg: "389",
            price: "139",
            map: "花水湾四季温泉谷"
          },
          {
            id: "05",
            imgUrl: "http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg",
            title: "成都大熊猫繁育研究基地",
            msg: "133245",
            price: "19.8",
            map: "成华区"
          }

        ]
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