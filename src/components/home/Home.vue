<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
      <home-location></home-location>
  </div>
</template>
<script>
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcon from './pages/Icon'
import HomeLocation from './pages/Location'

export default{
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation
  }
}
</script>
<style scoped></style>