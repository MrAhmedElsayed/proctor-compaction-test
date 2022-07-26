<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="12">
        <v-card class="mx-auto pa-2" flat outlined ripple>
          <v-card-text class="text-center">
            <p class="text-h4">Moisture density relation of soil</p>
            <p class="ws-font">(ASTM D 698 - 1557 AASHTO T-99 - 180)</p>
            <p class="tj-font">علاقة الكثافة بالرطوبة (تجربة بروكتور)</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!--    >>mold info-->
    <MoldInfo />
    <!--    <<mold info-->
    <!--    >>sample inputs-->
    <SampleInputs />
    <!--    <<sample inputs-->
    <!--    >>Results section-->
    <ResultsSection />
    <!--    <<Results section-->
    <v-row>
      <v-col cols="12">
        <v-card flat class="pa-3">
          <ResultChart />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ResultChart from "@/components/ResultChart";
import MoldInfo from "@/components/MoldInfo";
import SampleInputs from "@/components/SampleInputs";
import ResultsSection from "@/components/ResultsSection";
export default {
  name: "HomeView",
  components: { ResultsSection, SampleInputs, MoldInfo, ResultChart },
  data: () => ({
    items: [
      { text: "وزن القالب + العينة - WT.OF SAMPLE+MOLD", icon: "mdi-folder" },
      {
        text: "وزن العينة رطبة - WT.OF WET SAMPLE",
        icon: "mdi-account-multiple",
      },
      { text: "الكثافة الرطبة - WET UNIT WT.", icon: "mdi-star" },
      { text: "الكثافة الجافة- DRY UNIT WT.", icon: "mdi-history" },
    ],
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Scheherazade+New&family=Tajawal&family=Work+Sans&display=swap");

.ro-font {
  font-family: "Roboto", sans-serif;
}
.ws-font {
  font-family: "Work Sans", sans-serif;
}
.tj-font {
  font-family: "Tajawal", sans-serif !important;
  font-size: large;
}
.scheher {
  font-family: "Scheherazade New", serif;
}
</style>
