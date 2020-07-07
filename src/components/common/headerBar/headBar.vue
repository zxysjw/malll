<template>
  <div id="header">
    <div class="left"><slot></slot></div>
    <div class="center"><slot name="headCenter"></slot></div>
    <div class="right"><slot></slot></div>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #header{
    height: 44px;
    line-height: 44px;
    background-color: pink;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    text-align: center;
    color: #fff;
  }
</style>