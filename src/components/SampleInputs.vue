<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mx-auto pa-2" flat outlined>
        <v-card-title>
          <span class="tj-font">مدخلات العينة - DETERMINATION</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="layer in layers" :key="layer.name">
              <v-card cols="3">
                <v-card-text>
                  <p>{{ layer.number }}</p>
                  <v-text-field
                    label="Filled"
                    filled
                    dense
                    v-model="layer.sampleWeightPlusMold"
                  ></v-text-field>
                  <p>{{ layer.wetSampleWeight }}</p>
                  <p>{{ layer.wetUnitWeight }}</p>
                  <p>{{ layer.dryUnitWeight }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto pa-2" flat outlined>
        <v-card-title>
          <span class="tj-font">مدخلات الرطوبة - MOISTURE</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="layer in layers" :key="layer.name">
              <v-card cols="3">
                <v-card-text>
                  <p>{{ layer.number }}</p>
                  <p>{{ layer.sampleWeightPlusMold }}</p>
                  <p>{{ layer.wetSampleWeight }}</p>
                  <p>{{ layer.wetUnitWeight }}</p>
                  <p>{{ layer.dryUnitWeight }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SampleInputs",
  data: () => ({
    layers: [
      {
        number: "sample1",
        sampleWeightPlusMold: "10",
        wetSampleWeight: "11",
        wetUnitWeight: "111",
        dryUnitWeight: "1111",
      },
      {
        number: "sample2",
        sampleWeightPlusMold: "20",
        wetSampleWeight: "11",
        wetUnitWeight: "111",
        dryUnitWeight: "1111",
      },
      {
        number: "sample3",
        sampleWeightPlusMold: "30",
        wetSampleWeight: "11",
        wetUnitWeight: "111",
        dryUnitWeight: "1111",
      },
      {
        number: "sample4",
        sampleWeightPlusMold: "40",
        wetSampleWeight: "11",
        wetUnitWeight: "111",
        dryUnitWeight: "1111",
      },
      {
        number: "sample5",
        sampleWeightPlusMold: "50",
        wetSampleWeight: "11",
        wetUnitWeight: "111",
        dryUnitWeight: "1111",
      },
    ],
  }),
};
</script>

<style scoped></style>
