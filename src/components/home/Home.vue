<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
      <home-location></home-location>
      <home-hot></home-hot>
  </div>
</template>
<script>
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcon from './pages/Icon'
import HomeLocation from './pages/Location'
import HomeHot from './pages/Hot'

export default{
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation,
    HomeHot
  }
}
</script>
<style scoped></style>