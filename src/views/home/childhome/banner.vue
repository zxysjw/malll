<template>
  <Swiper>
    <Swiper-item v-for="(item,index) in bannerdata" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt='item.title' >
      </a>
    </Swiper-item>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
  name:'banner',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    bannerdata:{
      type:Array,
      required:{}
    }
  }
}
</script>

<style scoped>

</style>