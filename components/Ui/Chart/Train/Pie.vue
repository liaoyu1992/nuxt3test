
<template>
  <v-chart
    class="pie-charts"
    :option="opitions"
    :init-options="{ renderer: 'svg' }"
  />
</template>

<script lang="ts" setup>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { watchEffect } from "vue";
use([SVGRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
const datas = computed(() => props.data);
watchEffect(()=>{
  console.log(props.data,datas)
})
const defaultOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    left: "left",
    orient: "vertical",
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: "1",
      type: "pie",
      radius: [50, 148],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8,
      },
      data: datas,
      label: {
        show: true,
        formatter: (params) => `${params.percent}%`,
        position: "inside",
        color: "#ffffff",
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
const opitions = ref({});
onMounted(() => {
  opitions.value = defaultOption;
});
</script>

<style scoped>
.pie-charts {
  height: 100%;
  width: 100%;
}
</style>
