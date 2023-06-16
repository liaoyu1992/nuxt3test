
<template>
  <n-carousel dot-type="line" :space-between="10" :slides-per-view="1" :loop="false" draggable>
    <v-chart class="histogram-charts" :option="opitions" :init-options="{ renderer: 'svg' }" autoresize/>
    <v-chart class="histogram-charts" :option="opitions1" :init-options="{ renderer: 'svg' }" autoresize/>
  </n-carousel>
</template>
<script lang="ts" setup>
import { Axis, use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent, } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { computed } from "vue-demi";
use([ SVGRenderer, GridComponent, BarChart, LineChart,TitleComponent, TooltipComponent, LegendComponent, ]);
import { NIcon, NCarousel} from "naive-ui";
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
// const data = computed(() => {
//   return props.data
// });

const opitions = ref({});
const opitions1 = ref({});

</script>
<style scoped>
.histogram-charts {
  height: 100%;
  width: 100%;
}
.testddd{
  color:rgb(49, 173, 218),
}
</style>
