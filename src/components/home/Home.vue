<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
      <home-location></home-location>
      <home-hot></home-hot>
      <home-like></home-like>
  </div>
</template>
<script>
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcon from './pages/Icon'
import HomeLocation from './pages/Location'
import HomeHot from './pages/Hot'
import HomeLike from './pages/Like'

export default{
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation,
    HomeHot,
    HomeLike
  }
}
</script>
<style scoped></style>