
<template>
  <v-chart class="histogram-charts" :option="opitions" :init-options="{ renderer: 'svg' }" />
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
  data: {
    type: Object,
    default: () => { },
  },
});
const categorys = computed(() => props.category);
const data = computed(() => {
  return props.data
});
const defaultOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  legend: {
    icon: "rect",
    itemWidth: 20, // 
    itemHeight: 14, // 
    itemGap: 24, // 
    data: ["1"],
    textStyle: {
      color: "#c1dafc",
      fontSize: "12",
    },
    right: "10%",
  },
  xAxis: {
    type: "category",
    data: categorys,
  },
  yAxis: {
    type: "value",
    minInterval: 1,
  },
  series: [
    {
      name: '1',
      type: 'bar',
      stack: 'Search Engine',
      barWidth: 40,
      emphasis: {
        focus: 'series'
      },
      data: data.value.add
    },
  ],
  color: ["#5470c6"],
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
