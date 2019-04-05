<template>
  <div class="vacation">
    <div class="vacation-top">
      周末去哪儿
    </div>
    <ul>
      <li class="vacation-item" v-for="item in vacationList" :key=item.id>
        <div class="img-container">
          <img :src="item.imgUrl" alt="item.title">
        </div>
        
        <div class="vacation-text">
          <div class="vacation-title">{{item.title}}</div>
          <div class="vacation-msg">{{item.msg}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data (){
    return {
      vacationList:[
        {
          id:"01",
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title:'成都必打卡',
          msg:'成都的标志，也是现代人对老成都的记忆'
        },
        {
          id:"02",
          imgUrl:'http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',
          title:'摩崖石刻造像',
          msg:'诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选'
        },
         {
          id:"03",
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',
          title:'成都文艺范儿',
          msg:'《成都》唱火了这里，其实这儿不只有酒馆，还有很多文艺爆棚的地方'
        },
         {
          id:"04",
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
          title:'玩转主题乐园',
          msg:'乐园，与青春作伴'
        },
         {
          id:"05",
          imgUrl:'http://img1.qunarzz.com/sight/source/1507/e8/7afdd7b86bf778.jpg_r_640x214_c70adb31.jpg',
          title:'我的周末我做主',
          msg:'在成都Hold各种长假短假'
        }
      ]
    }
  }
}
</script>


<style scoped lang="stylus">
  @import '~css/common.styl';
  .vacation{
    margin-top:.2rem;
    
    font-size:.28rem;
  }
  .vacation-top{
    padding:.2rem;
  }
  .vacation-item{
    margin-bottom:.2rem;
    width:100%;
    background:#fff;
  }
  .img-container{
    width:100%;
    height:0;
    padding-bottom: 37.43%;
    background:#ccc;
  }
  .vacation-item img{
    width:100%;
  }
  .vacation-text{
    padding: .2rem;
  }
  .vacation-title{
    color:#212121;
    line-height:.44rem;
  }
  .vacation-msg{
    font-size:.2rem;
    line-height:.42rem;
    color:#616161;
    padding-right:1.4rem;
    textOverflow();
  }
</style>