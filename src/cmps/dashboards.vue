<template>
  <section class="dashboard-layout">
    <section class="dashboard-line">
      <Line :chartData="lineChartData" :chart-options="ogptions" :width="width" :height="height" />
    </section>
    <section class="dashboard-doughnut">
      <DoughnutChart :chartData="doughnutData" />
    </section>
  </section>
</template>

<script>
import { DoughnutChart } from 'vue-chart-3';
import { Line } from 'vue-chartjs'
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: 'charts',
  props: {
    height: {
      type: Number,
      default: 200
    },
    width: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      doughnutData: {
        labels: ['1-4 nights', '5-6 nights', '7+ nights'],
        datasets: [
          {
            data: [6, 5, 2],
            backgroundColor: ["#ff7482", '#2c9df0', '#ffcb4f'],
          },
        ]
      },
      lineChartData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
          {
            data: [60, 92, 10, 58, 13, 78, 22, 56],
            borderColor: '#ff7482',
            responsive: true,
          },
        ],
      },
      ogptions: {
        responsive: true
      }
    }
  },

  components: { DoughnutChart, Line },

}
</script>
