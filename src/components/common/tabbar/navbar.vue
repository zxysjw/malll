<template>
  <div id="navbar">
    <slot></slot> 
  </div>  
</template>

<script>
export default {
  name:'navbar'
}
</script>

<style scoped>
  #navbar{
    position: fixed;
    bottom: 0; left: 0;
    display: flex;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0 2px 2px rgba(255, 255, 255, .1);
    width: 100%;
  }
</style>