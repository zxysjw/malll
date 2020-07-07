<template>
	<div id="home">
		<header-bar class="header">
			<template v-slot:headCenter><p>购物街</p></template>
		</header-bar>
		<banner :bannerdata="banners"></banner>
		<topBar :topbardata="topBars"></topBar>
		<print />
		<xxk-bar :top="xxkBarTop" :data='goods' @tranData='tran'/>
	</div>
</template>

<script>
import headerBar from "common/headerBar/headBar";
import { getHomeData,getNewHomeData } from "network/home";

import banner from "views/home/childhome/banner";
import topBar from "views/home/childhome/topbar";
import print from "views/home/childhome/print";
import xxkBar from "components/content/xxkBar";

export default {
	name: "home",
	components: {
		headerBar,
		banner,
		topBar,
		print,
		xxkBar,
	},
	data() {
		return {
			banners: [],
			topBars: [],
			xxkBarTop: ["流行", "新品", "精选"],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] },
			},
			name:'pop',
			bool:true,
		};
	},
	created() {
    this.getHomeData()
    this.getNewHomeData('pop')
    this.getNewHomeData('new')
    this.getNewHomeData('sell')
    window.addEventListener("scroll", this.onScroll);
	},
	methods: {
		// 接受子组件传递的数据
		tran(data){
			this.name = data
		},
		onScroll() {
			// 上拉加载更多
			//可滚动容器的高度
			let innerHeight = document.querySelector("#home").clientHeight;
			//屏幕尺寸高度
			let outerHeight = document.documentElement.clientHeight;
			//可滚动容器超出当前窗口显示范围的高度
			let scrollTop = document.documentElement.scrollTop;
			//scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
			if (innerHeight < outerHeight + scrollTop) {
				//加载更多操作
				this.getNewHomeData(this.name)
				console.log(this.name);
				
			}
		},
		getHomeData() {
			getHomeData()
				.then((data) => {
					this.banners = data.data.data.banner.list;
					this.topBars = data.data.data.recommend.list;
				})
				.catch((err) => {
					console.log(err);
				});
    },
    getNewHomeData(type){
			const num = this.goods[type].page+1
			this.goods[type].page++
			if(!this.bool) return
      getNewHomeData(type,num).then((res)=>{
        this.goods[type].list.push(...res.data.data.list) 
      }).catch((err)=>{
				console.log(err);
				alert('到底了')
				this.bool=false
      })
    }
	},
};
</script>

<style scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
}
</style>
