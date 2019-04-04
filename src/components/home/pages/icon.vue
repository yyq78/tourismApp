<template>
	<div class='icons'>
		

		<swiper :options="swiperOption">

			<swiper-slide 
			v-for='(item,key) in page'
			:key='key'
			>

			 	<div class='icons-item' 
			 	v-for='page in item'
			 	:key='page.id'
			 	>
					<img :src="page.imgUrl">
					<p>{{page.title}}</p>
				</div>

			</swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>

		</swiper>

	</div>
</template>

<script>
export default{
      data(){
        return {
          swiperOption: {
          },
          iconsList: [
            {
              id:"01",
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
              title:"景点门票"
            },
           {
              id:"02",
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
              title:"一日游"
            },
           {
              id:"03",
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
              title:"成都必游"
            },
            {
              id:"04",
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
              title:"川剧变脸"
            },
            {
              id:"05",
              imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
              title:"自然风光"
            },
              {
              id:"06",
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
              title:"亲子游"
            },
           {
              id:"07",
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
              title:"游乐场"
            },
           {
              id:"08",
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
              title:"熊猫基地"
            },
            {
              id:"09",
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
              title:"动植物园"
            },
            {
              id:"10",
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
              title:"成都赏花"
            }
          ]
        }
       
      },
       computed: {
          page(){
            let pages=[];
            this.iconsList.forEach((item,index)=>{

              let idx=Math.floor(index/8);

              if(!pages[idx]) pages[idx]=[];

              pages[idx].push(item);

            })

            return pages;
          }
        }
    }
</script>
<style scoped>
.icons{
  width:100%;
  overflow:hidden;
}
  .icons-item{
    width:25%;
    padding-bottom:25%;
    height:0;
    float:left;
  }
  .icons-item img{
    width:1.1rem;
    height:1.1rem;
    display:block;
    margin:0 auto;
    padding-top:.2rem
  }
  .icons-item p{
      margin:.1rem;
      font-size:.28rem;
      text-align:center;
      color:#212121;
  }
</style>