
<template>
  <v-chart
    class="line-charts"
    :option="opitions"
    :init-options="{ renderer: 'svg' }"
  />
</template>
  
<script lang="ts" setup>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);
const props = defineProps({
  legend: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
});
const legends = computed(() => props.legend);
const datas = computed(() => props.data);
const opitions = ref({});
onMounted(() => {
 // opitions.value = defaultOption;
});
</script>
  
<style scoped>
.line-charts {
  height: 100%;
  width: 100%;
}
</style>
  