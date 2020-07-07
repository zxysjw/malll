<template>
  <navbar>
    <navbaritem link='/home'>
      <template v-slot:itemImg><img src="~assets/img/tabbar/home.svg" alt=""></template>
      <template v-slot:itemActive><img src="~assets/img/tabbar/home_active.svg" alt=""></template>
      <template v-slot:itemName><p>首页</p></template>
    </navbaritem>
    <navbaritem link='category'>
      <template v-slot:itemImg><img src="~assets/img/tabbar/category.svg" alt=""></template>
      <template v-slot:itemActive><img src="~assets/img/tabbar/category_active.svg" alt=""></template>
      <template v-slot:itemName><p>分类</p></template>
    </navbaritem>
    <navbaritem link='cart'>
      <template v-slot:itemImg><img src="~assets/img/tabbar/cart.svg" alt=""></template>
      <template v-slot:itemActive><img src="~assets/img/tabbar/cart_active.svg" alt=""></template>
      <template v-slot:itemName><p>购物车</p></template>
    </navbaritem>
    <navbaritem link='profile'>
      <template v-slot:itemImg><img src="~assets/img/tabbar/profile.svg" alt=""></template>
      <template v-slot:itemActive><img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
      <template v-slot:itemName><p>我的</p></template>
    </navbaritem>
  </navbar>
</template>

<script>

import navbar from 'common/tabbar/navbar'
import navbaritem from 'common/tabbar/navbaritem'

export default {
  name:'navbargroup',
  components:{
    navbar,
    navbaritem,
  }  
}
</script>

<style scoped>

</style>