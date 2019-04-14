<template>
    <div class="banner">
        <div @click='showSwiper'>
            <div class="banner-img">
                <img src="http://img1.qunarzz.com/sight/p0/1809/47/472d64fd85cdc9fa3.img.jpg_600x330_b61e1048.jpg"/>
                <div class="banner-info">
                石象湖(AAAA景区)
                </div>
            </div>
        </div>
        <div class="banner-gallery"  v-show='imgSwiper' @click='hideSwiper'>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(slide, index) in bannerList" :key="index">
                    <img :src="slide.imgUrl">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>  
            
        </div>
        
    </div>
</template>
<script>

export default {
  data(){
      return {
           swiperOption: {
            pagination: {
              el: '.swiper-pagination',
              type:'fraction'
            },
          },
          bannerList:[
              {
                  "id":"01",
                  "imgUrl":"http://img1.qunarzz.com/sight/p0/1809/47/472d64fd85cdc9fa3.img.jpg_600x330_b61e1048.jpg"
              },
               {
                  "id":"02",
                  "imgUrl":"http://img1.qunarzz.com/sight/p0/1809/ea/ea8f57f488ed8776a3.img.jpg_r_800x800_6964c64e.jpg"
              },
               {
                  "id":"03",
                  "imgUrl":"http://img1.qunarzz.com/sight/p0/1809/2a/2aa1d62d4e10d27ba3.img.jpg_r_800x800_bb13bca4.jpg"
              }
          ],
          'imgSwiper':false
      }
  },
  methods: {
      showSwiper(){
          this.imgSwiper=true;
      },
      hideSwiper(){
          this.imgSwiper=false;
      }
  }
}
</script>
<style scoped>
  .banner-img{
      position:relative;
      width:100%;
      height:0;
      padding-bottom:55%;
      background-color:#ddd;
      overflow:hidden;
     
  }
  .banner-img img{
      width:100%;
  }
  .banner-info{
      position:absolute;
      bottom:.36rem;
      left:.2rem;
      font-size:.36rem;
      color:#fff;
  }
  .banner-gallery{
      background:#000;
      position:fixed;
      width:100%;
      bottom:0;
      top:0;
      display:flex;
      justify-content: center;
      align-items: center;
      overflow:hidden;
  }
  .banner-gallery img{
      width:100%;
      
  }
  .swiper-pagination-fraction, 
  .swiper-pagination-custom, 
  .swiper-container-horizontal > .swiper-pagination-bullets
  {
      color:#fff;
      font-size:.28rem;
      position: fixed;
      bottom: .32rem;
  }
</style>