

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
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: () => ""
  }
});
const categorys = computed(() => props.category);
const datas = computed(() => {
  return props.data.map((element) => {
    return {
      value: element,
      itemStyle: {
        color: "#3491FA",
      },
    };
  });
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
    data: [props.title],
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
      name: props.title,
      type: "bar",
      barMaxWidth: 40,
      data: datas,
    },
  ],
  color: ["#3491FA"],
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
