<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
  </div>
</template>
<script>
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcon from './pages/Icon'

export default{
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon
  }
}
</script>
<style scoped></style>