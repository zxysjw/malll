<template>
	<div id="xxkBar">
		<ul>
			<li
				v-for="(item, index) in top"
				:key="index"
				@click="isActive(index)"
				:class="{ active: index == num ? true : false }"
			>
				<span>{{ item }}</span>
			</li>
		</ul>
		<div class="bottom">
			<div v-for="(item, index) in data[newData].list" :key="index">
				<a href="">
					<div><img :src="item.show.img" alt="" /></div>
					<p>{{ item.title }}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "xxkBar",
	data() {
		return {
			num: 0,
			dataName: ["pop", "new", "sell"],
			newData: "pop",
		};
	},
	props: {
		top: {
			type: Array,
			default: [],
		},
		data: {
			type: Object,
			default: {},
		},
	},
	methods: {
		isActive(index) {
			this.num = index;
      this.newData = this.dataName[index];
      this.$emit('tranData',this.newData)
		},
		
	},
};
</script>

<style scoped>
#xxkBar ul {
	display: flex;
	height: 40px;
	list-style: none;
}
#xxkBar ul li {
	flex: 1;
	text-align: center;
}
#xxkBar ul li span {
	line-height: 30px;
}
#xxkBar ul .active {
	border-bottom: 3px solid pink;
	color: pink;
}
.bottom {
	width: 100%;
  clear:both;
  height: 100%;
}
.bottom:after {
        content: '';
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
.bottom > div {
	width: 50%;
	box-sizing: border-box;
	margin: 5px 0;
	padding: 0 5px;
	float: left;
	height: 270px;
	font-size: 12px;
	overflow: hidden;
}
.bottom > div img {
	width: 100%;
	border-radius: 10px;
}
</style>
