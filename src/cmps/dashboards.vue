<template>
  <section class="dashboard flex align-center justify-center space-around" v-if="labelsData">
    <div class="toys-per-label">
      <h3>Toys per label: </h3>
      <DoughnutChart :chartData="labelsData" />
    </div>
    <div class="toys-per-stock">
      <h3>Toys availability: </h3>
      <DoughnutChart :chartData="toysData" />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "dashboard",
  components: { DoughnutChart },
  data() {
    return {
      labelsData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              "#77CEFF",
              "#0079AF",
              "#123E6B",
              "#97B0C4",
              "#A5C8ED",
              "#0079AF",
              "#A5C8ED",
            ],
          },
        ],
      },
      toysData: {
        labels: ["In Stock", "Out of stock"],
        datasets: [
          {
            data: null,
            backgroundColor: ["#7fffd4", "#f28c8c"],
          },
        ],
      },
    };
  },
  created() {
    const dataSet = this.$store.getters.getLabelsCount;

    for (var label in dataSet) {
      this.labelsData.labels.push(label)
      this.labelsData.datasets[0].data.push(dataSet[label]);
    }
    this.toysData.datasets[0].data = this.$store.getters.getToysStock;
  },
});
</script>
