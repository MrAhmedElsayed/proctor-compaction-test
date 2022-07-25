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
    <v-row>
      <v-col>
        <v-card class="mx-auto pa-2" flat outlined>
          <v-card-text>
            <p class="tj-font">DETERMINATION No.</p>
            <v-row>
              <v-col>
                <!--                  https://www.tablesgenerator.com/html_tables -->
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-right">1</th>
                        <th class="text-right">2</th>
                        <th class="text-right">3</th>
                        <th class="text-right">4</th>
                        <th class="text-right">5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <td class="text-right">وزن العينة رطبة</td>
                      <td class="text-right">الكثافة الرطبة</td>
                      <td class="text-right">الكثافة الجافة</td>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    moldWeight: "",
    moldVolume: "",
    layersNo: "",
    blowLayer: "",
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
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
