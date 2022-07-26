<template>
  <apexchart
    type="line"
    height="350"
    width="100%"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import ar from "apexcharts/dist/locales/ar.json";

export default {
  name: "ResultChart",
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 150, 99, 50],
      },
    ],
    chartOptions: {
      chart: {
        locales: [ar],
        defaultLocale: "ar",
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
        },
      },
      annotations: {
        points: [
          {
            x: "اغسطس",
            y: 99,
            marker: {
              size: 8,
              fillColor: "#fff",
              strokeColor: "red",
              radius: 2,
              cssClass: "apexcharts-custom-class",
            },
            label: {
              borderColor: "#FF4560",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#FF4560",
              },

              text: "Result",
            },
          },
        ],
      },

      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "مخطط الشهور بدرجة الحرارة",
        align: "center",
        style: {
          color: "red",
          fontSize: "12px",
          fontFamily: "Tajawal, Arial, sans-serif",
          fontWeight: 600,
          cssClass: "apexcharts-yaxis-title",
        },
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "يناير",
          "فبراير",
          "مارس",
          "ابريل",
          "مايو",
          "يونيه",
          "يوليو",
          "اغسطس",
          "سبتمير",
          "اكتوبر",
          "نوفمبر",
          "ديسمير",
        ],
        title: {
          text: "الشهور",
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "red",
            fontSize: "12px",
            fontFamily: "Tajawal, Arial, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
      yaxis: {
        title: {
          text: "درجة الحرارة",
          rotate: -90,
          offsetX: -40,
          offsetY: 0,
          style: {
            color: "red",
            fontSize: "12px",
            fontFamily: "Tajawal, Arial, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-title",
          },
        },
        min: 0,
        max: 200,
      },
    },
  }),
};
</script>
