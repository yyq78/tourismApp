<template>
  <div class="list">
    <div>
      <div class="item-title">A</div>
      <ul class="item-msg">
        <li>阿坝</li>
        <li>阿坝</li>
        <li>阿坝</li>
        <li>阿坝</li>
        <li>阿坝</li>
        <li>阿坝</li>
        <li>阿坝</li>
        <li>阿坝</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .item-title{
    font-size:.24rem;
    padding:.2rem;
  }
  .item-msg{
    overflow:hidden;
    position:relative;
  }
  .item-msg li{
    float:left;
    width:25%;
    font-size:.28rem;
    line-height:.9rem;
    text-align: center;
    border-bottom: .02rem solid #ddd;
    margin-bottom:-1px;
  }
 .item-msg:before{
    content:" ";
    position:absolute;
    left:25%;
    width:50%;
    height:100%;
    border-right:.02rem solid #ddd;
    border-left:.02rem solid #ddd;
  }
   .item-msg:after{
    content:" ";
    position:absolute;
    right:25%;
    width:25%;
    height:100%;
    border-left:.02rem solid #ddd;
  }
</style>