<template>
  <div class="navbaritem" @click="btnClick">
    <div v-if="isActive"><slot name='itemImg'></slot></div>
    <div v-else><slot name='itemActive'></slot></div>  
    <div :class={active:!isActive}><slot name='itemName'></slot></div>  
  </div>  
</template>

<script>
export default {
  name:'navbaritem',
  props:{
    link:{
      type:String,
      required:true
    }
  },
  methods:{
    btnClick(){
      return this.$router.replace(this.link)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) == -1
    }
  }
}
</script>

<style scoped>
  .navbaritem{
    height: 49px;
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .navbaritem img{
    width: 24px;
    height: 24px;
  }
  .active{
    color: red;
  }
</style>