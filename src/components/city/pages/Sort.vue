<template>
  <div class="sort">
    <div class="sort-top">字母排序</div>
    <ul class="sort-list">
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .sort-top{
    font-size:.24rem;
    padding:.2rem;
  }
  .sort-list{
    overflow:hidden; 
  }
  .sort-list li{
    float:left;
    width:16.66%;
    font-size:.28rem;
    line-height:.9rem;
    text-align: center;
  }
 
</style>