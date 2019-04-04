<template>
  <div class="header-swiper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperList" :key="index">
            <img :src="slide.imgSrc" alt="slide.alt">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
    export default{
      data(){
        return {
          swiperOption: {
            pagination: {
              el: '.swiper-pagination'
            },
            loop:true,
            autoplay:true
          },
          swiperList: [
            {
              imgSrc:require("@/assets/img/swiper1.jpg"),
              alt:'去哪儿门票'
            },
            {
              imgSrc:require("@/assets/img/swiper2.jpg"),
              alt:'去哪儿门票'
            },
            {
              imgSrc:require("@/assets/img/swiper3.jpg"),
              alt:'去哪儿门票'
            }
          ]
        }
      }
    }
</script>
<style scoped>
  .header-swiper{
    background:#ccc;
    width:100%;
    height:0;
    padding-bottom:26.67%;
  }
  .header-swiper img{
    width:100%;
  }
 .header-swiper >>> .swiper-pagination-bullet-active{
   background:#fff;
 }

</style>