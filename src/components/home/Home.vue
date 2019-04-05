<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
      <home-location></home-location>
      <home-hot></home-hot>
      <home-like></home-like>
      <home-vacation></home-vacation>
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
  }
}
</script>
<style scoped></style>