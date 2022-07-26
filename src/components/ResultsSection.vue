<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mx-auto pa-2 rounded-lg" flat>
        <v-card-title class="text-center pa-0">
          <span class="tj-font mx-auto">النتيجة - Result</span>
        </v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="6">
          <v-card class="pa-2" flat outlined>
            <v-card-title tag="h2">
              <span class="tj-font">الكثافة العظمى - MAX DRY DENSITY</span>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-chip class="ma-2" color="primary" outlined pill>
                {{ maxDryDensity }}
                <span class="mr-3">gm/cc</span>
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-2" flat outlined>
            <v-card-title tag="h2">
              <span class="tj-font">الرطوبة المثالية - OPT. MOIST. CONT</span>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-chip class="ma-2" color="primary" outlined pill>
                {{ OptMoistCont }}
                <span class="mr-3">%</span>
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ResultsSection",
  data: () => ({
    maxDryDensity: 2.02,
    OptMoistCont: 10.2,
  }),
};
</script>

<style scoped></style>
