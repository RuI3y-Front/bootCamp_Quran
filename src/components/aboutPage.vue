<template>

  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <div id="ayeha" class="d-flex flex-fill justify-content-center flex-wrap">
    <div
      id="ayeha-div"
      v-for="(ayaa, index) in list"
      :key="index"
       ref="text"
      
    >
      <div id="aya" >
        {{ ayaa }} <span id="aya-index">﴿{{ index + 1 }}﴾</span>
      </div>

      <div id="tarjome" v-for="(tarjomeAyat,i) in tarjomeList" :key="i">
        {{ tarjomeAyat[i] }} ({{ i + 1 }})
      </div>

      <div id="action">
        <div id="copy" @click="">  
            <i id="copy-icon" @click="CopyAya(ayaa,ayaTranslateCopy[0][index])"></i>
    </div>
        <div id="share" ><i id="icon-share"></i></div>
        <div id="ply"><i id="icon-ply" @click="plySound(suraNumber,index+1)"></i>
          <audio   ref="audioElement" :src="urlAudio" type="audio/mp3" >
              
          </audio> 
        </div>
      </div>
      <span id="border"></span>
    </div>
    <div @click="scrollToTop()"><span id="scrollup"></span></div>
    <span @click="$router.go(-1)"><span id="backPage"></span></span>
   
  </div>
</template>

<script lang="ts">
import { page } from "../assets/quranPage.js";
import { ayat, SuraList } from "../assets/quran-metadata";
import { useRouter, useRoute } from "vue-router";
import { onMounted, onUnmounted, computed, nextTick } from "@vue/runtime-core";
import { tarjome } from "../assets/tarjomeh/fa.makarem";
import { ref } from "vue";
import useClipboard from 'vue-clipboard3'

export default {
 
  name: "about",
  setup() {
    "use strict";
    const router = useRouter();
    const route = useRoute();
    let ayatArray = ayat.split("\n");
    let suraNumber = +route.params.id;
    
    //  ایندکس آیه ها را پیدا میکنه و اون هارو مساوی با سوره نامبر میکنه
    // let sura =computed (() =>{

    let pageNumber = +page.findIndex((pages) => pages[0] >= suraNumber);


    const [newSuraNumber, newAyaNumber] = page[pageNumber];
    const firstAyaOfPage = SuraList[newSuraNumber - 1][newAyaNumber - 1];

    const nextPageNumber = +page.findIndex(
      (pages) => pages[0] >= suraNumber + 1
    );
    const [nextSuraNumber, nextAyaNumber] = page[nextPageNumber];
    const firstAyaofNextPage = SuraList[nextSuraNumber - 1][+nextAyaNumber - 1];
    const list = ([] = ayatArray.slice(firstAyaOfPage, firstAyaofNextPage));
    //  })

    let tarjomeAlllist = tarjome.split("\n");
    let tarjomeList = [
      tarjomeAlllist.splice(
        SuraList[newSuraNumber - 1][newAyaNumber - 1],
        SuraList[nextSuraNumber - 1][+nextAyaNumber - 1]
      ),
    ];

    function scrollToTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 2000);
      }, 20);
    }
            // copy /// 
            
let ayaTranslateCopy  =computed(()=>{
tarjomeList.slice([newAyaNumber - 1],[+nextAyaNumber - 1])

  return tarjomeList
})
            function CopyAya(aya:string, i:number){

               try{ navigator.clipboard.writeText(aya + " / " + i);
            } catch{
              alert("nemishe")
            }
            
            }
            const  urlAudio=ref()
            const audioElement = ref<HTMLAudioElement>();
            
           async function plySound(i:number,index:number){
       urlAudio.value= await "https://www.everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/00"+i+ "00"+index +".mp3"
        nextTick()
         audioElement.value!.play();
         console.log(suraNumber);
         console.log(urlAudio.value);
         
            }
              
    return {
      CopyAya,audioElement,
      urlAudio,
      plySound,
      suraNumber,
       scrollToTop,
      SuraList,
      tarjomeAlllist,
      tarjomeList,
      list,
      ayaTranslateCopy
    };
  },
};
</script>

<style scoped>
#scrollup{
  background-image: url(../icon/icons8-up-50.png);
        width: 45px;
    height: 46px;
    display: block;
    left: 55px;
    bottom: 1px;
    position: fixed;
}
#backPage{
      background-image: url(../icon/icons8-go-back-48.png);
    width: 45px;
    height: 46px;
    display: block; 
    left: 55px;
    top: 16px;
    position: fixed;
}

#icon-share{
  background-image: url(../icon/icons8-share-30.png);
  width: 30px;
  height: 30px;
  display: inline-block;
}
#share{
  width: 20px;
  height: 30px;
}
#copy{
  width: 20px;
  height: 30px;
  margin-bottom: 4px;
}
#copy-icon:hover{
  width: 31px;
  height: 29px;
  cursor: pointer;
}
#copy-icon{
  background-image: url(../icon/icons8-copy-30.png);
  display: inline-block;
  width: 30px;
  height: 28px;
}
#ply{
  height: 30px;
}
#icon-ply:hover{
  height: 26px;
  width: 24px;
  cursor: pointer;
  color: red;
}
#icon-ply{
       width: 24px;
    display: inline-block;
    height: 25px;
    background-image: url(../icon/icons8-play-50.png);
}
#action {
  display: inline-block;
  float: left;
}
#tarjome {
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
#ayeha {
  max-width: 100%;
  height: 100%;

  align-items: center;
}
#ayeha-div {
  width: 100%;
  font-family: aekan;
  font-size: 30px;
  padding-right: 40px;
  margin-top: 10px;
  margin-right: 80px;
  margin-left: 180px;
}

* {
  direction: rtl;
  text-align: right;
}
@font-face {
  font-family: me-quran;
  src: url("../assets/fonts/neirizi/neirizi.woff2") format("woff2");
}
#aya-index {
  color: #7a7a7c;
  font-size: 20px;
}
</style>
