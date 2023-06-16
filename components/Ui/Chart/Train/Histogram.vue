

<template>
  <v-chart
    class="histogram-charts"
    :option="opitions"
    :init-options="{ renderer: 'svg' }"
  />
</template>
<script lang="ts" setup>
import { Axis, use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { computed } from "vue-demi";
use([
  SVGRenderer,
  GridComponent,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const props = defineProps({
  category: {
    type: Array,
    default: () => [],
  },
  data1: {
    type: Array,
    default: () => [],
  },
  data2: {
    type: Array,
    default: () => [],
  },
});
const categorys = computed(() => props.category);
const datas1 = computed(() => props.data1);
const datas2 = computed(() => props.data2);
const defaultOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  textStyle: {
    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
  },
  yAxis: {
    type: "category",
    data: categorys,
  },
  xAxis: {
    type: "value",
    minInterval: 1,
  },
  series: [
    {
      name: "1",
      type: "bar",
      stack: "total",
      itemStyle: {
        color: "rgb(255,112,112)",
      },
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: datas1,
    },
    {
      name: "2",
      type: "bar",
      stack: "total",
      itemStyle: {
        color: "rgb(145,204,117)",
      },
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: datas2,
    },
  ],
};
const opitions = ref({});
onMounted(() => {
  opitions.value = defaultOption;
});
</script>
<style scoped>
.histogram-charts {
  height: 100%;
  width: 100%;
}
</style>
