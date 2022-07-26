<template>
  <v-row>
    <v-col cols="auto" md="6">
      <v-card class="mx-auto pa-2" flat outlined>
        <v-card-text>
          <p class="tj-font">بيانات القالب - Mold Info</p>
          <v-row>
            <v-col>
              <v-text-field
                label="وزن القالب"
                placeholder="WEIGHT OF MOLD"
                prepend-inner-icon="mdi-weight-gram"
                flat
                outlined
                dense
                type="number"
                v-model="moldWeight"
                class="scheher"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="حجم القالب"
                placeholder="VOLUME OF MOLD"
                prepend-inner-icon="mdi-cup-water"
                flat
                outlined
                dense
                type="number"
                v-model="moldVolume"
                class="scheher"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="auto" md="6">
      <v-card class="mx-auto pa-2" flat outlined>
        <v-card-text>
          <p class="tj-font">الطبقات والضربات - BLOWS & LAYER</p>
          <v-row>
            <v-col>
              <v-text-field
                label="عدد الطبقات"
                placeholder="NUMBER OF LAYERS"
                prepend-inner-icon="mdi-layers-triple-outline"
                flat
                outlined
                dense
                type="number"
                v-model="layersNo"
                class="scheher"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="عدد الضربات"
                placeholder="BLOWS/LAYER"
                prepend-inner-icon="mdi-tally-mark-5"
                flat
                outlined
                dense
                type="number"
                v-model="blowLayer"
                class="scheher"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MoldInfo",
  data: () => ({
    moldWeight: "",
    moldVolume: "",
    layersNo: 5,
    blowLayer: 25,
  }),
};
</script>

<style scoped></style>
