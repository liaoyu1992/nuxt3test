
<template>
  <loading-group :pending="pending">
    <n-carousel  ref="myCarousel" class="w-full" :space-between="10" :slides-per-view="2" :loop="false" draggable>
      <div class="pt-[10px] h-260px w-full">
        <v-chart v-if="options1Ref" :option="opitions1" :init-options="{ renderer: 'svg' }" autoresize/>
      </div>
      <div class="pt-[10px] h-260px w-full">
        <v-chart v-if="options2Ref" :option="opitions2" :init-options="{ renderer: 'svg' }" autoresize/>
      </div>
      <div class="pt-[10px] w-[100%] h-260px">
        <v-chart v-if="options3Ref" :option="opitions3" :init-options="{ renderer: 'svg' }" autoresize/>
      </div>
      <div class="pt-[10px] w-[100%] h-260px">
        <v-chart v-if="options4Ref" :option="opitions4" :init-options="{ renderer: 'svg' }" autoresize/>
      </div>
    </n-carousel>
  </loading-group>

</template>
<script lang="ts" setup>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent, } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([SVGRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);
import { ref, Component, onMounted, reactive, nextTick} from "vue";
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
// const categorys = computed(() => props.category);
// const data = computed(() => {
//   return props.data
// });
const pending = ref(false);
const myCarousel = ref();

const opitions1 = ref({});
const opitions2 = ref({});
const opitions3 = ref({});
const opitions4 = ref({});
const options1Ref = ref(true);
const options2Ref = ref(true);
const options3Ref = ref(true);
const options4Ref = ref(true);

// defineExpose({
//   disposeCharts,
// });
</script>
<style scoped>

</style>
