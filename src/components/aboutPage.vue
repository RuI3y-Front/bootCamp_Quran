<template>
  <div class="row">
    <div class="row" v-for="aya in sura" :key="aya">
      {{ aya }}
    </div>
  </div>
</template>

<script>
import { ayat, SuraList } from "../assets/quran-metadata";
import { useRouter, useRoute } from "vue-router";
import { computed, ref } from "@vue/runtime-core";

const ayatArray = ayat.split("\n");

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    const suraNumber = computed(() => route.params.id);

    const sura = computed(() => {
      let sura = SuraList[suraNumber.value];
      let start = sura[0];
      let end = start + sura[1];
      return ayatArray.slice(start, end);
    })

    return {
      suraNumber,
      SuraList,
      sura,
    };
  },
};
</script>

<style></style>
