<template>
<div>
 <router-link to="/"></router-link>

  <router-view></router-view>
 
{{$route.params.id}}
</div>
</template>

<script>




export default {
 data(){
   return{
 
   }
 },computed:{
 
 }
 
};
</script>

<style>
</style>
