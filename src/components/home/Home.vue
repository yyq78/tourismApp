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
import {mapState} from 'vuex'
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
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHttp(){
      this.$http.get("/api/dataHome.json")
          .then((res)=>
              {
                const data=res.data.data;
                data.forEach((item,index)=>{
                  if(item.city==this.city){
                    this.swiperList=item.swiperList;
                    this.iconsList=item.iconsList;
                    this.hotList=item.hotList;
                    this.likeList=item.likeList;
                    this.vacationList=item.vacationList;
                  }
                })
              
              }
          )
     }
  },
  mounted(){
    this.getHttp();
  }
}
</script>
<style scoped></style>