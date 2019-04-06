<template>
  <div class="hot">
    <div class="hot-top">
      热门城市
    </div>
    <ul class="hot-list">
      <li class="hot-item">北京</li>
      <li>上海</li>
      <li>北京</li>
      <li>北京</li>
      <li>北京</li>
      <li>北京</li>
      <li>北京</li>
      <li>北京</li>
      <li>北京</li>
      <li>三亚</li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
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