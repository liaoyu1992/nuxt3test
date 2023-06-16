
<template>
  <v-chart class="histogram-charts" :option="opitions" :init-options="{ renderer: 'svg' }" autoresize />
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
// const categorys = computed(() => props.category);
const categorys = ref([
  
]);
// const data = computed(() => {
//   return props.data
// });
// const labelOption = {
//   show: true,
//   position: app.config.position,
//   distance: app.config.distance,
//   align: app.config.align,
//   verticalAlign: app.config.verticalAlign,
//   rotate: app.config.rotate,
//   formatter: '{c}  {name|{a}}',
//   fontSize: 16,
//   rich: {
//     name: {}
//   }
// };
let section = ref('');//

const opitions = ref({});

</script>
<style scoped>
.histogram-charts {
  height: 100%;
  width: 100%;
}
.testddd{
  color:rgb(192, 90, 85),
}
</style>
