<template>
<div :style="{fontFamily: font}">
 <router-link to="/"></router-link>

  <router-view></router-view>

</div>
</template>

<script>




export default {
 data(){
   return{
     font: 'b yekan'
   }
 },
 created() {
   if (localStorage.font) {
     this.font = localStorage.font
   }
 },
 computed:{
 
 }
 
};
</script>

<style>
</style>
