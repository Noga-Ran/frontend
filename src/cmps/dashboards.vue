<template>
  <section class="dashboard">
    <DoughnutChart :chartData="testData" />
  </section>
</template>

<script lang="ts">
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: 'Doughnut',
  data() {
    return {
      testData: {
        labels: ['1-4 nights', '5-6 nights', '7+ nights'],
        datasets: [
          {
            data: [6, 5,2],
            backgroundColor: [  "#ff7482",'#2c9df0','#ffcb4f' ],
          },
        ]
      }
    }
  },

  components: { DoughnutChart },

}
</script>
