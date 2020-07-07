<template>
  <div class="topBar">
    <a :href="item.link" v-for="(item,index) in topbardata" :key="index">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </a>
  </div>  
</template>

<script>
export default {
  name:'topBar',
  props:{
    topbardata:{
      type:Array,
      company:[]
    }
  }
}
</script>

<style scoped>
  .topBar{
    display: flex;
    height: 160px;
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 10px solid #ccc;
  }
  .topBar a{
    flex: 1;
    border-radius: 50%;
    margin-top: 10px;
  }
  .topBar a img{
    width: calc(100% - 20px);
    border-radius: 50%;
    margin-bottom: 10px;
  }
</style>