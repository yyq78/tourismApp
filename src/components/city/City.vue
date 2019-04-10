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

</style>