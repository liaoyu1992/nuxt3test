
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
    data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
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
      emphasis: {
        focus: 'series'
      },
      data: data.value.class
    },
    {
      name: '2',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data.value.out
    },
    {
      name: '3',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data.value.rale
    },
    {
      name: '4',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data.value.ojt
    },
    {
      name: '5',
      type: 'bar',
      stack: 'Search Engine',
      data: data.value.ptr,
      emphasis: {
        focus: 'series'
      },
      // markLine: {
      //   lineStyle: {
      //     type: 'dashed'
      //   },
      //   data: [[{ type: 'min' }, { type: 'max' }]]
      // }
    },
    {
      name: '6',
      type: 'bar',
      barWidth: 40,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data.value.online
    },
    {
      name: '7',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data.value.learn
    },
    {
      name: '8',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data.value.send
    },
    {
      name: '9',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: data.value.other
    }
  ],
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
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
