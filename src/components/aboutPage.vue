<template>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

  
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

  <div id="ayeha" class="d-flex flex-fill justify-content-center  flex-wrap " >
    
    <div id="ayeha-div"  v-for="(aya,index) in list" :key="index" >
    <div id="aya">{{ aya}}  <span id="aya-index">﴿{{index+1}}﴾</span></div>

    <div id="tarjome" v-for="tarjomeAyat in tarjomeList" :key="tarjomeAyat">  {{tarjomeAyat[index]}} ({{index +1}}) </div>
   
  
      <div id="action" >
          <div id="copy"><i>s</i></div>
          <div id="share"> <i>s</i></div>
          <div id="ply"><i>a</i></div>
      </div>
       <span id="border"></span>
    </div>
    
  </div>
</template>

<script lang="ts">
import {page} from "../assets/quranPage.js"
import { ayat, SuraList } from "../assets/quran-metadata";
import { useRouter, useRoute } from "vue-router";
import { computed, ref } from "@vue/runtime-core";
import {tarjome} from '../assets/tarjomeh/fa.makarem'


export default {
name:'about',
  setup() {
    "use strict"
    const router = useRouter();
    const route = useRoute();
  let ayatArray = ayat.split("\n");
 let suraNumber =  +route.params.id;
  
//  ایندکس آیه ها را پیدا میکنه و اون هارو مساوی با سوره نامبر میکنه
  // let sura =computed (() =>{
   
 
  let pageNumber = +page.findIndex(pages =>pages[0] >= suraNumber)     
  
  const [newSuraNumber,newAyaNumber]=page[pageNumber]
  const firstAyaOfPage = SuraList[newSuraNumber-1 ][newAyaNumber-1]

  const nextPageNumber =  +page.findIndex(pages =>pages[0]>=suraNumber+1)
  const [nextSuraNumber  ,nextAyaNumber]=page[nextPageNumber]
  const firstAyaofNextPage=SuraList[nextSuraNumber -1][+nextAyaNumber-1]
 const list= ayatArray.slice(firstAyaOfPage ,firstAyaofNextPage )
    //  })

debugger
   let tarjomeAlllist = tarjome.split("\n")
    let tarjomeList=[ tarjomeAlllist.splice(SuraList[newSuraNumber -1][newAyaNumber -1], SuraList[nextSuraNumber -1][+nextAyaNumber-1]) ]
      
     
    return {
      suraNumber,
      SuraList,
      tarjomeAlllist,tarjomeList,
      list
      
    };
  },
};
</script>

<style scoped>
#aya{

}
#action{
  display: inline-block;
  float: left;
 
}
#tarjome{
  margin-top: 50px;
      font-size: 19px;
      width: 80%;
      display: inline-block;
}
#border {
 display: flex;
    width: 100%;
    border-bottom: 1px solid #dfdfe0;
    margin-top: 20px;
    margin-bottom: 8px;
}
#ayeha{
  max-width: 100%;
  height: 100%;
  
  align-items: center;
}
#ayeha-div{
 width: 100%;
    font-family: aekan;
    font-size: 30px;
    padding-right: 40px;
      margin-top: 10px;
    margin-right: 80px;
    margin-left: 180px;
}

*{
      direction: rtl;
    text-align: right;
}
  @font-face {
    font-family: me-quran ;
   src: url("../assets/fonts/me-quran/me-quran.woff") format("woff");
  }
  #aya-index{
    color: #7a7a7c;
    font-size: 20px;
    
  }



</style>
