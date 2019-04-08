<template>
  <div>
    <city-header></city-header>

    <city-list
     :hotCities="hotCities"
     :cities="cities">
     </city-list>
  </div>
</template>


<script>
import CityHeader from './pages/Header'
import CityList from './pages/List'
export default{
  components:{
    CityHeader,
    CityList
  },
  data(){
    return {
      hotCities:[],
      cities:{}
    }
  },
  mounted(){
    this.$http.get('api/city.json')
    .then((res)=>{
      const data=res.data.data;
      this.hotCities=data.hotCities;
      this.cities=data.cities;
    })
  }
}
</script>

<style>
   .hot-top{
    font-size:.24rem;
    padding:.2rem;
  }
  .hot-list{
    overflow:hidden;
    position:relative;
   
  }
  .hot-list li{
    float:left;
    width:33.33%;
    font-size:.28rem;
    line-height:.9rem;
    text-align: center;
    border-bottom: .02rem solid #ddd;
    margin-bottom:-1px;
  }
  .hot-list:before{
    content:" ";
    position:absolute;
    left:33.33%;
    width:33.33%;
    height:100%;
    border-right:.02rem solid #ddd;
    border-left:.02rem solid #ddd;
  }
</style>