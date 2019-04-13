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
      vacationList:[],
      changeCity:''
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
                if(data.some((item)=>item.city==this.city)){
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
                else{
                      this.swiperList=[];
                      this.iconsList=[];
                      this.hotList=[];
                      this.likeList=[];
                      this.vacationList=[];
                }
               

              
              }
          )
     }
  },
  mounted(){
    this.changeCity=this.city;
    this.getHttp();
  },
  activated() {
     if(this.changeCity!==this.city){
      this.getHttp();
      this.changeCity=this.city;
    }
  }
}
</script>
<style scoped></style>