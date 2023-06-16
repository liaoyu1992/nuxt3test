
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
  data: {
    type: Object,
    default: () => {},
  },
});
const categorys = computed(() => props.category);
// const categorys = ref([]);
const data = computed(() => {
  return props.data;
});
const defaultOption = {
  //
  title: {
    text: "",
    left: "center",
  },
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
    itemWidth: 20, 
    itemHeight: 14, 
    itemGap: 24, 
    data: ["1", "1", "1"],
    textStyle: {
      color: "#666",
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
  series: data,
  color: ["#5470c6", "rgb(192, 90, 85)", "#91cc75"],
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
.testddd {
  color: rgb(192, 90, 85);
}
</style>
