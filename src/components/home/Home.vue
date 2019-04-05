<template>
  <div>
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icon :iconsList="iconsList"></home-icon>
      <home-location></home-location>
      <home-hot :hotList="hotList"></home-hot>
      <home-like :likeList="likeList"></home-like>
      <home-vacation :vacationList="vacationList"></home-vacation>
  </div>
</template>
<script>
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcon from './pages/Icon'
import HomeLocation from './pages/Location'
import HomeHot from './pages/Hot'
import HomeLike from './pages/Like'
import HomeVacation from './pages/Vacation'

export default{
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation,
    HomeHot,
    HomeLike,
    HomeVacation
  },
  data(){
    return {
      swiperList:[],
      iconsList:[],
      hotList:[],
      likeList:[],
      vacationList:[]
    }
  },
  mounted(){
    this.$http.get("/api/dataHome.json")
    .then((res)=>
        {
          const data=res.data.data[0];
          this.swiperList=data.swiperList;
          this.iconsList=data.iconsList;
          this.hotList=data.hotList;
          this.likeList=data.likeList;
          this.vacationList=data.vacationList;
        }
    )
  }
}
</script>
<style scoped></style>