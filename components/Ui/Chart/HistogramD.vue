
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
const data1s = computed(() => {
  return props.data1.map((element) => {
    return {
      value: element,
      itemStyle: {
        color: "#86CF68",
      },
    };
  });
});
const data2s = computed(() => {
  return props.data2.map((element) => {
    return {
      value: element,
      itemStyle: {
        color: "#FF0066",
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
    data: ["1", "2","3"],
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
      name: "1",
      type: "bar",
      barMaxWidth: 40,
      data: datas,
    },
    {
      name: "2",
      type: "bar",
      barMaxWidth: 40,
      data: data1s,
    },
    {
      name: "3",
      type: "bar",
      barMaxWidth: 40,
      data: data2s,
    },
  ],
  color: ["#3491FA", "#86CF68", "#FF0066"],
  label: {
        show: true,
        position: 'top',
        color:'grey',
        fontSize: '12px',
      },
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
