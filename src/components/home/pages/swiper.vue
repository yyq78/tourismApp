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
      props:['swiperList'],
      data(){
        return {
          swiperOption: {
            pagination: {
              el: '.swiper-pagination'
            },
            loop:true,
            autoplay:true,
            observer:true
          }
          
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
    position:relative;
  }
  .header-swiper img{
    width:100%;
  }
 .header-swiper >>> .swiper-pagination-bullet-active{
   background:#fff;
 }

</style>