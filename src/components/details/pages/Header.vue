<template>
  <div class="header">

    <div class="header-return" @click='toHome' v-show='showHeader'>

      <span class="iconfont">&#xe600;</span>

    </div>


    <div class="header-top"  v-show='!showHeader' :style='styleOpacity'>
      
      <div class="header-left" @click='toHome'>
        <span class='iconfont'>&#xe600;</span>
      </div>
      
      <div class="header-title">
        石象湖
      </div>
    
    </div>
    
  </div>
</template>
<script>

export default {
  data(){
    return{
      'showHeader':true,
      'styleOpacity':{
        'opacity':0
      }
    }
  },
  methods:{
    toHome(){
      this.$router.push('/');
    }
  },
  mounted() {
    let that=this;
    window.addEventListener("scroll",function(){
      let top=document.body.scrollTop||document.documentElement.scrollTop;
     
      if(top>40){
        let opacity=top/200;
        opacity=opacity>1 ? 1:opacity;
        that.styleOpacity={opacity};
        that.showHeader=false;
      }
      else{
        that.showHeader=true;
      }
    })
  },

}
</script>
<style scoped lang='stylus'> 
@import '~css/var.styl';
   .header{
    width:100%;
    line-height:.88rem;
    background-color: $bgcolor;
    color:$textcolor;
    font-size:.32rem;
    position:absolute;
    top:0;
    left:0;
  }
  .header-return{
    position:absolute;
    background:rgba(0,0,0,0.4);
    left:.1rem;
    top:.1rem;
    width:.72rem;
    height:.72rem;
    border-radius:.36rem;
  }
  .header-return .iconfont{
    position:absolute;
    top:-.06rem;
    left:.1rem;
    color:#fff;
    font-size:.4rem;
  }
  .header-top{
    width:100%;
    line-height:.88rem;
    background-color: $bgcolor;
    color:$textcolor;
    font-size:.32rem;
    position:fixed;
    z-index:99;
  }
  .header-left{
    width:.4rem;
    padding:0 .2rem;
    text-align:center;
    font-weight:bold;
    position:absolute;
  }
  .header-title{
    text-align:center;
  }

</style>